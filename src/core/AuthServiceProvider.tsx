import React from "react";
import { container } from "../app/container";
import { TYPES } from "../app/types";
import { AuthService } from "./AuthService";

const authService = container.get<AuthService>(TYPES.AuthService);

export const AuthServiceContext = React.createContext<AuthService | undefined>(
  undefined
);

export const AuthServiceProvider: React.FC = ({ children }) => {
  return (
    <AuthServiceContext.Provider value={authService}>
      {children}
    </AuthServiceContext.Provider>
  );
};

export const useAuthService = () => {
  const context = React.useContext(AuthServiceContext);
  if (context === undefined) {
    throw new Error(
      "useAuthService must be used within an AuthServiceProvider"
    );
  }
  return context;
};
