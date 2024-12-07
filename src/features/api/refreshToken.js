import { store } from "@/store";
import { userLoggedIn, userLoggedOut } from "../auth/authSlice";
import { apiSlice } from "./apiSlice";

const BaseURL = import.meta.env.VITE_APP_BASE_URL;

export const apiMiddleware = (api) => (next) => async (action) => {
  const result = next(action);

  if (action.error && action?.payload?.data?.message === "jwt expired") {
    await refreshAuthToken(action, next);
  }

  return result;
};

const refreshAuthToken = async (action, next) => {
  try {
    const response = await fetch(`${BaseURL}/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      // throw new Error("Failed to refresh token");

      // console.log("error", await response.json());

      const error = await response.json();

      if (
        error.statusCode === 422 &&
        error.message === "Invalid Refresh Token"
      ) {
        store.dispatch(userLoggedOut());
      }
    }

    const data = await response.json();

    if (data?.data?.accessToken) {
      store.dispatch(
        userLoggedIn({
          token: data?.data?.accessToken,
          user: JSON.parse(localStorage.getItem("auth"))?.user,
        })
      );
    }

    if (action.payload.status === 500) {
      const { endpointName, originalArgs } = action.meta.arg;
      const { endpoints } = apiSlice;

      // Retry the original request if endpointName exists
      if (endpoints && endpoints[endpointName]) {
        store.dispatch(endpoints[endpointName].initiate(originalArgs)); // Retry the original request
      }
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};
