import { apiSlice } from "@/appState/apiSlice";

export const stocksApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getStocks: builder.query({
      query: () => ({
        url: "/api/stocks",
      }),
      providesTags: ["stocks"],
    }),
  }),
});

export const { useGetStocksQuery } = stocksApiSlice;
