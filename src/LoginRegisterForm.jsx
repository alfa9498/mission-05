// LoginRegisterForm.jsx
import React, { useState } from "react";
import LoginForm from "./LoginForm"; // Impor komponen LoginForm
import RegisterForm from "./RegisterForm"; // Impor komponen RegisterForm

const LoginRegisterForm = () => {
  const [isRegister, setIsRegister] = useState(false); // State untuk menentukan form yang ditampilkan

  const toggleForm = () => {
    setIsRegister(!isRegister); // Mengubah form
  };

  return (
    <div>
      {isRegister ? (
        <RegisterForm toggleForm={toggleForm} />
      ) : (
        <LoginForm toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default LoginRegisterForm;
