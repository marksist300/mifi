import { apiSlice } from "@/app/apiSlice";

export const stocksApiSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getStocks: build.query({
      query: () => "",
      providesTags: ["stocks"],
    }),
  }),
});
