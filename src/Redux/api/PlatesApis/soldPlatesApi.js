import { baseApi } from "../baseApi";


const soldPlatesApi = baseApi.injectEndpoints({
          endpoints: (builder) => ({
                    getSoldPlates: builder.query({
                              query: ({params}) => ({
                                        url: 'plates_sales/find_by_all_sold_plate_sales_list',
                                        method: 'GET',
                              }),
                              providesTags: ['soldPlates'],
                    }),
          }),
});

export const {
      useGetSoldPlatesQuery,
} = soldPlatesApi;
