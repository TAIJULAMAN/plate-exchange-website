import { baseApi } from "../baseApi";


const soldPlatesApi = baseApi.injectEndpoints({
          endpoints: (builder) => ({
                    getSoldPlates: builder.query({
                              query: () => ({
                                        url: 'plates_sales/find_by_all_listed_sales_plate',
                                        method: 'GET',
                              }),
                              providesTags: ['listedPlates'],
                    }),
          }),
});

export const {
      useGetSoldPlatesQuery,
} = soldPlatesApi;
