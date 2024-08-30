import React from "react";
import useAuth from "../features/useAuth";

const LoginPage: React.FC = () => {
  const { username, setUsername, password, setPassword, handleLogin } =
    useAuth();

  return (
    <div className="p-4 flex gap-2 justify-center">
      <input
        className="border p-2"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="border p-2"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
        className="bg-blue-500 h-auto text-white p-2"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
