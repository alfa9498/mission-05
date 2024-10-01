import React, { useState } from "react";
import "./RegisterForm.css";
import flag from "./assets/indonesia.png"; // Pastikan Anda memiliki gambar bendera
import logo from "./assets/logo.png"; // Pastikan Anda memiliki gambar logo
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const RegisterForm = () => {
  // State untuk visibilitas password
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  // Fungsi toggle untuk visibilitas password
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Fungsi toggle untuk visibilitas konfirmasi password
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className="register-form">
      {/* Bagian Logo */}
      <div className="register-logo-container">
        <div className="register-logo-box">
          <img src={logo} alt="Logo" className="register-logo" />
        </div>
      </div>

      {/* Bagian Form Pendaftaran */}
      <div className="register-form-container">
        <div className="register-form-box">
          <h2>Pendaftaran Akun</h2>
          <p>Yuk, daftarkan akunmu sekarang juga!</p>
          <form>
            {/* Input Nama Lengkap */}
            <div className="register-form-group">
              <label htmlFor="fullName">
                Nama Lengkap <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                className="register-input-field"
              />
            </div>

            {/* Input Email */}
            <div className="register-form-group">
              <label htmlFor="email">
                E-Mail <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="register-input-field"
              />
            </div>

            {/* Input No. HP */}
            <div className="register-form-group">
              <label htmlFor="phone">
                No. Hp <span className="required">*</span>
              </label>
              <div className="register-phone-input">
                <div className="phone-input-container">
                  <img
                    src={flag}
                    alt="Bendera"
                    className="register-flag-icon"
                  />
                  <span className="register-country-code">+62</span>
                  <span className="dropdown-icon">▼</span>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="register-input-field"
                  />
                </div>
              </div>
            </div>

            {/* Input Kata Sandi */}
            <div className="register-form-group password-container">
              <label htmlFor="password">
                Kata Sandi <span className="required">*</span>
              </label>
              <div className="input-with-icon">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  required
                  className="register-input-field"
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
            </div>

            {/* Input Konfirmasi Kata Sandi */}
            <div className="register-form-group password-container">
              <label htmlFor="confirmPassword">
                Konfirmasi Kata Sandi <span className="required">*</span>
              </label>
              <div className="input-with-icon">
                <input
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  id="confirmPassword"
                  required
                  className="register-input-field"
                />
                <span
                  className="password-icon"
                  onClick={toggleConfirmPasswordVisibility}
                  role="button"
                  aria-label="Toggle Confirm Password Visibility"
                >
                  {isConfirmPasswordVisible ? (
                    <MdVisibilityOff />
                  ) : (
                    <MdVisibility />
                  )}
                </span>
              </div>
            </div>

            {/* Link Lupa Password */}
            <a href="#" className="register-forgot-password">
              Lupa Password?
            </a>

            {/* Tombol Submit */}
            <button type="submit" className="btn register-submit-button">
              Daftar
            </button>

            {/* Link Masuk */}
            <a href="#" className="register-login-link">
              Masuk
            </a>
            <div className="line">atau</div>
            <button className="google-button">
              <img src={googleIcon} alt="Google Icon" className="google-icon" />
              Login dengan Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
