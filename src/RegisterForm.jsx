import React from "react";
import "./RegisterForm.css";
import flag from "./assets/indonesia.png"; // Pastikan Anda memiliki gambar bendera
import logo from "./assets/logo.png"; // Pastikan Anda memiliki gambar logo

const RegisterForm = () => {
  return (
    <div className="register-form">
      <div className="register-logo-container">
        <div className="register-logo-box">
          <img src={logo} alt="Logo" className="register-logo" />{" "}
          {/* Logo ditampilkan */}
        </div>
      </div>
      <div className="register-form-container">
        <div className="register-form-box">
          <h2>Pendaftaran Akun</h2>
          <p>Yuk, daftarkan akunnu sekarang juga!</p>
          <form>
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
                </div>
              </div>
            </div>
            <div className="register-form-group">
              <label htmlFor="password">
                Kata Sandi <span className="required">*</span>
              </label>
              <input
                type="password"
                id="password"
                required
                className="register-input-field"
              />
            </div>
            <div className="register-form-group">
              <label htmlFor="confirmPassword">
                Konfirmasi Kata Sandi <span className="required">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                required
                className="register-input-field"
              />
            </div>
            <a href="#" className="register-forgot-password">
              Lupa Password?
            </a>
            <button type="submit" className="btn register-submit-button">
              Daftar
            </button>
            <a href="#" className="register-login-link">
              Masuk
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
