import React, { useState } from "react";
import "./LoginForm.css";
import { MdVisibility, MdVisibilityOff } from "react-icons/md"; // Import ikon visibility
import logo from "./assets/logo.png"; // Pastikan path logo sudah benar

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State untuk mengatur visibilitas password

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // Mengubah state saat ikon diklik
  };

  return (
    <div className="main-container">
      <div className="logo-container">
        <div className="logo-box">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="login-container">
        <div className="login-box">
          <h2>Masuk ke Akun</h2>
          <p>Yuk, lanjutin belajarmu di videobelajar.</p>
          <form>
            <div className="form-group">
              <label htmlFor="email">
                E-mail <span className="required">*</span>
              </label>
              <input type="email" id="email" required className="input-field" />
            </div>
            <div className="form-group password-container">
              <label htmlFor="password">
                Kata Sandi <span className="required">*</span>
              </label>
              <input
                type={isPasswordVisible ? "text" : "password"} // Mengubah tipe input
                id="password"
                required
                className="input-field" // Class untuk styling
              />
              <span
                className="password-icon"
                onClick={togglePasswordVisibility}
                role="button"
                aria-label="Toggle Password Visibility"
              >
                {isPasswordVisible ? <MdVisibilityOff /> : <MdVisibility />}
              </span>
            </div>
            <a href="#" className="forgot-password">
              Lupa Password?
            </a>
            <button type="submit" className="btn login-button">
              Masuk
            </button>
            <button type="button" className="btn register-button">
              Daftar
            </button>
          </form>
          <div className="line">atau</div>
          <div className="google-login">
            <button className="google-button">
              <img
                src="./assets/google-icon.png"
                alt="Google"
                className="google-icon"
              />
              Login dengan Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
