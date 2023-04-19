import { apiSlice } from "@/appState/apiSlice";

export const spendingApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSpending: builder.query({
      query: () => ({
        url: "/api/spending",
      }),
      providesTags: ["spending"],
    }),
  }),
});

export const { useGetSpendingQuery } = spendingApiSlice;
