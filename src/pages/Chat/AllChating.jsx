import React from "react";
import { useGetChannelChatHistoryQuery } from "../../Redux/api/Chat/chatHistoryApi";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../config/envConfig";

export default function AllChating() {
  const { data, isLoading, isError } = useGetChannelChatHistoryQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading chats...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500">Failed to load chats.</p>
      </div>
    );
  }

  const allChats = data?.data?.all_chat || [];

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-50 pt-40">
      <h1 className="text-3xl font-bold mb-6">All Chat History</h1>

      {allChats.length === 0 ? (
        <p className="text-gray-500">No chats found.</p>
      ) : (
        <div className="w-full max-w-2xl space-y-4">
          {allChats.map((chat) => (
            <div
              key={chat._id}
              onClick={() => {
                navigate(`/userdashboard/message-centre/details/${chat.channelName}`);
              }}
              className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4 cursor-pointer"
            >
              {chat.receiverId.photo ? (
                <img
                  src={`${getImageUrl(chat.receiverId.photo)}`}
                  alt={chat.receiverId.fastname}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                  {chat.receiverId.fastname[0]}
                </div>
              )}

              <div className="flex-1">
                <div className="font-semibold">
                  {chat.receiverId.fastname} {chat.receiverId.lastname}
                </div>
                <div className="text-gray-500 text-sm">
                </div>
              </div>

              <div className="text-gray-400 text-xs">
                {new Date(chat.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
