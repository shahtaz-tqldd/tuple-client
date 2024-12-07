import { useSelector } from "react-redux";

export default function useAuth() {
  const auth = useSelector((state) => state?.auth);
  if (auth?.token) {
    return { token: auth?.token, role: auth?.role };
  } else {
    return {};
  }
}
