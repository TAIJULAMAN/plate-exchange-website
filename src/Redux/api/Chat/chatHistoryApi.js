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
    }),
});

export const { useGetChannelChatHistoryQuery , useChannelChatDetailsQuery } = chatHistoryApi;
export default chatHistoryApi;