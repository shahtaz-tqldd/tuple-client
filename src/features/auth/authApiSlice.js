import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => {
        const { bodyData } = data;
        return {
          url: `/auth/login`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: bodyData,
          credentials: "include",
        };
      },
      providesTags: ["auth"],
    }),

    userRegister: builder.mutation({
      query: ({ bodyData }) => {
        return {
          url: `/auth/register`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: bodyData,
        };
      },
      invalidatesTags: ["auth"],
    }),

    verifyRegistration: builder.mutation({
      query: (data) => {
        const { bodyData } = data;
        return {
          url: `/auth/verify-registration`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: bodyData,
        };
      },
    }),

    forgotPassword: builder.mutation({
      query: (data) => {
        const { bodyData } = data;
        return {
          url: `auth/forget-password`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: bodyData,
        };
      },
    }),

    resetPassword: builder.mutation({
      query: (data) => {
        const { bodyData, userId, token } = data;
        return {
          url: `auth/forgot-password/${userId}/${token}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: bodyData,
        };
      },
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserRegisterMutation,
  useVerifyRegistrationMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApiSlice;
