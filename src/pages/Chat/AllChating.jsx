// src/pages/Chat/ChatLayout.jsx
import React, { useState, useRef, useEffect, useMemo } from "react";
import { FiMenu, FiMoreVertical } from "react-icons/fi";
import { RiSendPlane2Fill } from "react-icons/ri";
import { IoImagesOutline, IoCheckmarkDone } from "react-icons/io5";
import {
  useGetChannelChatHistoryQuery,
  useChannelChatDetailsQuery,
} from "../../Redux/api/Chat/chatHistoryApi";
import { jwtDecode } from "jwt-decode";
import useChatSocket from "../../hooks/useChatSocket";
import { getImageUrl } from "../../config/envConfig";

export default function ChatLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  // myId
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const decoded = token ? jwtDecode(token) : null;

  


const myId = decoded?.id;

// Sidebar: all chats
const {
  data: chatsData,
  isLoading: chatsLoading,
  isError: chatsError,
} = useGetChannelChatHistoryQuery();

// Process chats to always show the other participant
const allChats = (chatsData?.data?.all_chat || []).map((chat) => {
  // Determine partner
  const partner = chat.receiverId?._id === myId ? chat.senderId : chat.receiverId;

  return {
    ...chat,
    partnerId: partner?._id,
    partnerName: partner ? `${partner.fastname || ""} ${partner.lastname || ""}`.trim() : "",
    partnerAvatar: partner?.photo || null,
  };
});





  const [activeChannel, setActiveChannel] = useState(null);
  const [activePeer, setActivePeer] = useState(null);

  // Default to first chat
  useEffect(() => {
    if (!activeChannel && allChats.length > 0) {
      const first = allChats[0];
      setActiveChannel(first.channelName);
      setActivePeer(first.receiverId || null);
    }
  }, [allChats, activeChannel]);

  // Messages query
  const {
    data: chatDetailData,
    isLoading: messagesLoading,
  } = useChannelChatDetailsQuery(activeChannel, { skip: !activeChannel });

  const [messages, setMessages] = useState([]);

  // Socket hook
  const { messages: socketMessages, sendMessage } = useChatSocket(
    activeChannel,
    myId
  );

  const listRef = useRef(null);
  const [newMessage, setNewMessage] = useState("");

  // Sort ascending (oldest first)
  const sortByCreatedAtAsc = (arr) =>
    [...arr].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  const dedupeByIdOrSignature = (arr) => {
    const seen = new Set();
    const result = [];
    for (const m of arr) {
      const sig =
        m._id ||
        `${m.senderId?._id || m.senderId}-${m.message}-${new Date(
          m.createdAt
        ).getTime()}`;
      if (!seen.has(sig)) {
        seen.add(sig);
        result.push(m);
      }
    }
    return result;
  };

  const formatTime = (ts) =>
    new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // Load API messages → ascending
  useEffect(() => {
    if (chatDetailData?.data?.all_chat) {
      const sorted = sortByCreatedAtAsc(chatDetailData.data.all_chat);
      setMessages(sorted);
    } else if (!activeChannel) {
      setMessages([]);
    }
  }, [chatDetailData, activeChannel]);

  // Merge realtime → append
  useEffect(() => {
    if (socketMessages && socketMessages.length > 0) {
      const merged = dedupeByIdOrSignature([...messages, ...socketMessages]);
      setMessages(sortByCreatedAtAsc(merged));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socketMessages]);

  // Always scroll to bottom when messages change
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, activeChannel]);

  // Send
  const handleSend = () => {
    if (!newMessage.trim() || !activeChannel) return;

    const tempMessage = {
      _id: `temp-${Date.now()}`,
      message: newMessage,
      senderId: myId,
      createdAt: new Date().toISOString(),
      files: [],
    };
    setMessages((prev) =>
      sortByCreatedAtAsc(dedupeByIdOrSignature([...prev, tempMessage]))
    );

    sendMessage(newMessage);
    setNewMessage("");
  };

  // Header peer info
  const headerPeer = useMemo(() => {
    if (activePeer) return activePeer;
    const found = allChats.find((c) => c.channelName === activeChannel);
    return found?.receiverId || null;
  }, [activePeer, allChats, activeChannel]);

  return (
    <div className="flex flex-col h-screen bg-white pt-20">
      {/* Top Bar */}
      <div className="p-5 border-b border-gray-200 flex items-center justify-between md:justify-start">
        <button
          className="md:hidden mr-3 text-gray-600"
          onClick={() => setShowSidebar(true)}
          aria-label="Open conversations"
        >
          <FiMenu className="text-2xl" />
        </button>
        <h1 className="text-[#3c3d37] text-3xl font-bold">Messages</h1>
      </div>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div
          className={`absolute md:relative top-0 left-0 w-80 md:w-96 bg-white flex flex-col border-r border-gray-200 transition-transform duration-300 z-20
          ${showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          <div className="p-4 flex justify-between md:hidden">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setShowSidebar(false)}
              aria-label="Close"
            >
              ✖
            </button>
          </div>

          {chatsLoading ? (
            <p className="p-4">Loading chats...</p>
          ) : chatsError ? (
            <p className="p-4 text-red-500">Failed to load chats.</p>
          ) : (
            <div className="overflow-y-auto flex-1">

                
              {allChats.map((chat) => {
                const isActive = chat.channelName === activeChannel;
                const peer = chat.receiverId;
                const avatarSrc = peer?.photo ? getImageUrl(peer.photo) : null;

                return (
                  <div
                    key={chat._id}
                    onClick={() => {
                      setActiveChannel(chat.channelName);
                      setActivePeer(peer || null);
                      if (window.innerWidth < 768) setShowSidebar(false);
                    }}
                    className={`flex items-center gap-3 p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors
                    ${isActive ? "bg-yellow-50 border-r-4 border-yellow-400" : ""}`}
                  >
                    <div className="relative">
                      {avatarSrc ? (
                        <img
                          src={avatarSrc}
                          alt={peer?.fastname || "user"}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                          {(peer?.fastname?.[0] || "?").toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-semibold text-gray-900 truncate">
                          {peer?.fastname} {peer?.lastname}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {formatTime(chat.createdAt)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {chat.lastMessage?.message || "No messages yet"}
                      </p>
                    </div>
                  </div>
                );
              })}


            </div>
          )}
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          {activeChannel && (
            <div className="px-6 py-4 bg-white border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  {headerPeer?.photo ? (
                    <img
                      src={getImageUrl(headerPeer.photo)}
                      alt={`${headerPeer?.fastname || ""} ${
                        headerPeer?.lastname || ""
                      }`}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                      {(headerPeer?.fastname?.[0] || "?").toUpperCase()}
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {headerPeer
                      ? `${headerPeer.fastname || ""} ${
                          headerPeer.lastname || ""
                        }`.trim()
                      : activeChannel}
                  </h2>
                </div>
              </div>
              <FiMoreVertical className="w-5 h-5 text-gray-500" />
            </div>
          )}

          {/* Messages ASC by time */}
          <div
            ref={listRef}
            className="flex-1 overflow-auto bg-gray-50 p-4 space-y-4"
          >
            {activeChannel ? (
              messagesLoading ? (
                <p>Loading messages...</p>
              ) : messages.length === 0 ? (
                <p className="text-gray-500">No messages yet.</p>
              ) : (
                messages.map((msg) => {
                  const sid = msg?.senderId?._id || msg?.senderId;
                  const isMine = sid === myId;
                  return (
                    <div
                      key={msg._id}
                      className={`flex ${isMine ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md xl:max-w-lg rounded-2xl p-4 ${
                          isMine
                            ? "bg-[#00823b] text-white"
                            : "bg-white text-gray-900 shadow-sm border border-gray-200"
                        }`}
                      >
                        <p className="text-sm break-words">{msg.message}</p>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs opacity-70">
                            {formatTime(msg.createdAt)}
                          </p>
                          {isMine && (
                            <IoCheckmarkDone className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )
            ) : (
              <p className="text-gray-500 p-2">
                Select a conversation to start chatting.
              </p>
            )}
          </div>

          {/* Input */}
          {activeChannel && (
            <div className="p-4 bg-white border-t border-gray-200 flex gap-3">
              <button
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200"
                title="Attach file"
              >
                <IoImagesOutline className="w-5 h-5 text-gray-600" />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                onClick={handleSend}
                disabled={!newMessage.trim()}
                className={`p-3 rounded-full ${
                  newMessage.trim()
                    ? "bg-yellow-400 hover:bg-yellow-500"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                title="Send message"
              >
                <RiSendPlane2Fill className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
