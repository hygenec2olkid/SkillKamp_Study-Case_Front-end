import "../styles/global.css";
import { AuthContext } from "@/context/AuthContext";
import { useAuth } from "@/hooks/useAuth";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { user, login, logout } = useAuth();
  return (
    <AuthContext.Provider value={{ user: user, setUser: login }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
};

export default MyApp;
