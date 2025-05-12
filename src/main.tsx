import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./hooks/useAuth";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
