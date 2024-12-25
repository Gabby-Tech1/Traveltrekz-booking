import Cookies from "js-cookie";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { getToken } from "../utils/cookieGetFunction";

interface AuthContextType {
  isAuthenticated: boolean; // Ensure this is a boolean
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initialize state as a boolean from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const savedAuth = localStorage.getItem("isAuthenticated");
    return savedAuth === "true"; // Fix: Ensure boolean comparison
  });

  // Validate authentication using cookies
  useEffect(() => {
    const validateAuth = async () => {
      try {
        const { cookieToken } = await getToken();
        if (cookieToken) {
          setIsAuthenticated(true);
          localStorage.setItem("isAuthenticated", "true");
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem("isAuthenticated");
        }
      } catch (error) {
        console.error("Cookie validation failed:", error);
        setIsAuthenticated(false);
      }
    };

    validateAuth();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    Cookies.set("isAuthenticated", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    Cookies.remove("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
