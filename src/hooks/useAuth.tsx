import { useContext, createContext, useState, ReactNode, useEffect } from "react";
import { demoUsers } from "../context/DemoUsers";

interface User {
  id: number;
  role: "client" | "admin";
  email: string;
  password: string;
  nom: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("hf-user");
    if (stored) {
      const parsed = JSON.parse(stored) as User;
      setUser(parsed);
    }
  }, []);

  const login = (email: string, password: string) => {
    const found = demoUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setUser(found as User);
      localStorage.setItem("hf-user", JSON.stringify(found));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("hf-user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
