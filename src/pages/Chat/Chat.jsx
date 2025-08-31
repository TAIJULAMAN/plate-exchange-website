// src/pages/Chat.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useCreateMessageMutation } from "../../Redux/api/Chat/createChatApi";

export default function Chat() {
  const { id: receiverId } = useParams(); // seller/user id
  const [searchParams] = useSearchParams();
  const registrationId = searchParams.get("plate"); // registrationId from query
  const navigate = useNavigate();

  const [createMessage] = useCreateMessageMutation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const createChannel = async () => {
      try {
        // Step 1: Request backend to create/get channel
        const res = await createMessage({
          id: receiverId,
          formData: new FormData(), // empty → just create channel
          registrationId,
        }).unwrap();

        const channel = res.data.channel;
        if (channel && channel.channelName) {
          // Step 2: Send initial message automatically
          const initialFormData = new FormData();
          initialFormData.append(
            "message",
            `Is this plate ${registrationId} available?`
          );

          await createMessage({
            id: receiverId,
            formData: initialFormData,
            registrationId,
          }).unwrap();

          // Step 3: Navigate to channel details page
          navigate(
            `/userdashboard/message-centre/details/${channel.channelName}`
          );
        }
      } catch (err) {
        console.error("Failed to create/get channel:", err);
      } finally {
        setLoading(false);
      }
    };

    createChannel();
  }, [receiverId, registrationId, createMessage, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {loading ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Creating chat channel...</h1>
          <p className="text-gray-500">Please wait while we set things up.</p>
        </>
      ) : (
        <p className="text-red-500">
          Couldn’t create channel. Please try again.
        </p>
      )}
    </div>
  );
}

