import { apiSlice } from "@/appState/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAuth: builder.query({
      query: () => ({
        url: "/api/auth",
      }),
      providesTags: ["savings"],
    }),
  }),
});

export const { useGetAuthQuery } = authApiSlice;
