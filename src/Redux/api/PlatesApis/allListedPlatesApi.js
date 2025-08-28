import { baseApi } from "../baseApi";


const allPlatesApi = baseApi.injectEndpoints({
          endpoints: (builder) => ({
                    getAllPlates: builder.query({
                              query: ({page, limit}) => ({
                                        url: `plates_sales/find_by_all_listed_sales_plate?page=${page}&limit=${limit}`,
                                        method: 'GET',
                              }),
                              providesTags: ['listedPlates'],
                    }),
          }),
});

export const {
      useGetAllPlatesQuery,
} = allPlatesApi;

