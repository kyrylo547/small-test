import { useNavigate } from "@tanstack/react-router";
import { useAuthService } from "../core/AuthServiceProvider";
import { useState } from "react";

const useAuth = () => {
  const authService = useAuthService();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await authService.login(username, password);
    localStorage.setItem("authToken", "your-token");
    navigate({ to: "/" });
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
  };
};

export default useAuth;
