import { useContext } from "react";
import { AuthContext } from "../context/auth";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("Auth Context was used outside of its Provider");
  }

  return context;
};

export default useAuth;
