import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn, userLoggedOut } from "../features/auth/authSlice";
import { getCookieValue, parseJwt } from "../utils/cookies";

export default function useAuthCheck() {
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookieValue("authToken");

    if (token) {
      const decodedToken = parseJwt(token);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedToken && decodedToken.exp > currentTime) {
        dispatch(userLoggedIn({ token, user: decodedToken }));
      } else {
        dispatch(userLoggedOut());
      }
    } else {
      dispatch(userLoggedOut());
    }

    setAuthChecked(true);
  }, [dispatch]);

  return authChecked;
}
