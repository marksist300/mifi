import { apiSlice } from "@/appState/apiSlice";

export const savingsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSavings: builder.query({
      query: () => ({
        url: "/api/savings",
      }),
      providesTags: ["savings"],
    }),
  }),
});

export const { useGetSavingsQuery } = savingsApiSlice;
