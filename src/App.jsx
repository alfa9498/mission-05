import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // State untuk mengatur tampilan form

  const toggleForm = () => {
    setIsLogin(!isLogin); // Mengganti antara login dan register
  };

  return (
    <div>
      {isLogin ? (
        <LoginForm toggleForm={toggleForm} />
      ) : (
        <RegisterForm toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthForm;
