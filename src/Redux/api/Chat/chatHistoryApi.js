import { baseApi } from "../baseApi";

const chatHistoryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getChannelChatHistory: builder.query({ //getting all my channels
            query: () => `channel/my_channel`,
            providesTags: ['ChannelChatHistory'],
        }),
        channelChatDetails: builder.query({ //getting all my channels
            query: (channelName) => `message/plate_ways_chat_history/${channelName}`,
            providesTags: ['ChannelChatDetails'],
        }),
        handleImgMSG: builder.mutation({
            query: (formData) => ({
                url: `message/send_message`,
                method: "POST",
                body: formData,
            }),
            invalidatesTags: ['ChannelChatDetails'],
        }),
    }),
});

export const { useGetChannelChatHistoryQuery , useChannelChatDetailsQuery, useHandleImgMSGMutation } = chatHistoryApi;
export default chatHistoryApi;