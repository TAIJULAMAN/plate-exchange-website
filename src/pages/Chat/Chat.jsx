import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiSendPlane2Fill } from "react-icons/ri";
import { FiMenu, FiMoreVertical } from "react-icons/fi";
import { IoImagesOutline, IoCheckmarkDone } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";

const users = [
    {
        id: 1,
        name: "John Smith",
        message: "Interested in your plate listing",
        time: "2:45 PM",
        avatar: "https://avatar.iran.liara.run/public/28",
        online: true,
        unread: 2
    },
    {
        id: 2,
        name: "Sarah Johnson",
        message: "Is the plate still available?",
        time: "1:30 PM",
        avatar: "https://avatar.iran.liara.run/public/27",
        online: false,
        unread: 0
    },
    {
        id: 3,
        name: "Mike Wilson",
        message: "Thanks for the quick response!",
        time: "12:15 PM",
        avatar: "https://avatar.iran.liara.run/public/29",
        online: true,
        unread: 1
    },
    {
        id: 4,
        name: "Emma Davis",
        message: "Can we arrange a viewing?",
        time: "11:45 AM",
        avatar: "https://avatar.iran.liara.run/public/30",
        online: false,
        unread: 0
    },
    {
        id: 5,
        name: "Alex Brown",
        message: "What's your best price?",
        time: "Yesterday",
        avatar: "https://avatar.iran.liara.run/public/31",
        online: false,
        unread: 3
    }
];

const Chat = () => {
    const [selectedUser, setSelectedUser] = useState(users[0]);
    const [activeTab, setActiveTab] = useState("Buyers");
    const [messages, setMessages] = useState([
        {
            text: "Hi! I'm interested in your plate listing. Is it still available?",
            sender: "them",
            time: "2:30 PM",
            read: true
        },
        {
            text: "Yes, it's still available! Would you like to know more details?",
            sender: "me",
            time: "2:32 PM",
            read: true
        },
        {
            text: "What's the condition of the plate? Any damage or wear?",
            sender: "them",
            time: "2:35 PM",
            read: true
        },
        {
            text: "It's in excellent condition, no visible damage. I can send more photos if you'd like.",
            sender: "me",
            time: "2:37 PM",
            read: true
        },
        {
            text: "That would be great! Also, are you flexible on the price?",
            sender: "them",
            time: "2:40 PM",
            read: false
        }
    ]);
    const [newMessage, setNewMessage] = useState("");
    const [showSidebar, setShowSidebar] = useState(false);
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);

    const sendMessage = () => {
        if (newMessage.trim()) {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            setMessages([
                ...messages,
                { text: newMessage, sender: "me", time: timeString, read: true },
            ]);
            setNewMessage("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const handleFileUpload = () => {
        fileInputRef.current?.click();
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
      <div className="flex flex-col h-screen bg-white ">
        <div className="p-5 border-b border-gray-200">
          <h1 className="text-[#3c3d37] text-start text-3xl font-bold mb-4">
            Messages
          </h1>
        </div>

        {/* Header for Mobile */}
        <div className="flex items-center justify-between p-4 bg-[#3c3d37] text-white md:hidden shadow-sm">
          <FiMenu
            className="text-2xl cursor-pointer hover:text-yellow-400 transition-colors"
            onClick={() => setShowSidebar(!showSidebar)}
          />
          <h1 className="text-xl font-bold">Messages</h1>
          <div className="w-6"></div> {/* Spacer for centering */}
        </div>

        <div className="flex h-screen overflow-y-scroll flex-1">
          {/* Sidebar - User List */}
          <div
            className={`absolute md:relative   top-0 left-0 w-80 md:w-96  bg-white flex flex-col border-r border-gray-200 transition-transform duration-300 
    ${showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
          >
            <div className="p-4">
              <button
                className="md:hidden self-end mb-4 text-gray-500 hover:text-gray-700 float-right"
                onClick={() => setShowSidebar(false)}
              >
                ✖
              </button>
              {/* <div className="relative">
                            <AiOutlineSearch
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                            />
                            <input
                                type="text"
                                placeholder="Search conversations..."
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                            />
                        </div> */}
            </div>
            <div className="overflow-y-auto h-screen flex-1">
              {users.map((user) => (
                <div
                  key={user.id}
                  className={`flex items-center gap-3 p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    selectedUser.id === user.id
                      ? "bg-yellow-50 border-r-4 border-yellow-400"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedUser(user);
                    if (window.innerWidth < 768) setShowSidebar(false);
                  }}
                >
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    {user.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">
                        {user.name}
                      </h3>
                      <span className="text-xs text-gray-500 ml-2">
                        {user.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate mt-1">
                      {user.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="px-6 py-4 bg-white border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  {selectedUser.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {selectedUser.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {selectedUser.online
                      ? "Online"
                      : "Last seen " + selectedUser.time}
                  </p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FiMoreVertical className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-auto bg-gray-50 p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md xl:max-w-lg rounded-2xl p-4 ${
                      msg.sender === "me"
                        ? "bg-[#00823b] text-white"
                        : "bg-white text-gray-900 shadow-sm border border-gray-200"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs opacity-70">{msg.time}</p>
                      {msg.sender === "me" && (
                        <IoCheckmarkDone
                          className={`w-4 h-4 ${
                            msg.read ? "text-blue-500" : "text-gray-400"
                          }`}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            {/* Message Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-end gap-3">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*,application/pdf"
                  onChange={(e) =>
                    console.log("File selected:", e.target.files[0])
                  }
                />
                <button
                  onClick={handleFileUpload}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  title="Attach file"
                >
                  <IoImagesOutline className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                  className={`p-3 rounded-full transition-colors ${
                    newMessage.trim()
                      ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  title="Send message"
                >
                  <RiSendPlane2Fill className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Chat;