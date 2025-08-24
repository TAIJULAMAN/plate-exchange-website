
import { baseApi } from "./baseApi";

const subscriptionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllSubscription: builder.query({
            query: () => ({
                url: "subscription/find_all_buyer_subscription",
                method: "GET"

            }),
            providesTags: ["subscription"],
        }),

    }),
});



export const {
    useGetAllSubscriptionQuery

} = subscriptionApi;

export default subscriptionApi;