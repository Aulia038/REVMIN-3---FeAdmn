import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import "../../../styles/login.css";
import axios from "axios";

const API = import.meta.env.VITE_API;
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { status } = await axios.post(`${API}/auth/register`, { ...formData, phone: "0" });
      if (status === 200) {
        alert("success create account");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      alert("unable create account");
    }
  };

  return (
    <div className="login-page">
      <div className="hero-login">
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
              <img src={logo} alt="Logo" className="logo-login" />
            </div>
            <div className="col-12 col-md-8 col-lg-6">
              <div className="form-login bg-white p-4 p-md-5 rounded-4 shadow-lg">
                <h2 className="login-text text-center mb-3">Please Register</h2>
                <div className="login-switch bg-secondary rounded-5 d-flex justify-content-center align-items-center mb-3">
                  <Link className="btn btn-register" to={`/login`}>
                    Login
                  </Link>
                  <Link className="btn btn-login active box-shadow-lg" to="/register">
                    Register
                  </Link>
                </div>
                <p className="login-txt-1 text-center mb-2">Enter Personal Details & Start Journey With Us</p>

                <form id="registerForm" onSubmit={handleSubmit}>
                  <div className=" login-text4">
                    <label for="email" className="form-label  ">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control-login"
                      id="email"
                      placeholder="Enter your Email Address"
                      value={formData?.email}
                      onChange={({ target }) => setFormData((prev) => ({ ...prev, email: target.value }))}
                      style={{
                        fontSize: "12px",
                        color: "#acacac",
                        fontWeight: "300",
                      }} //tambahkan ini
                    />
                  </div>
                  <div className=" login-text4">
                    <label for="username" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control-login"
                      id="username"
                      placeholder="Enter your Full Name"
                      value={formData?.nama}
                      onChange={({ target }) => setFormData((prev) => ({ ...prev, nama: target.value }))}
                      style={{
                        fontSize: "12px",
                        color: "#acacac",
                        fontWeight: "300",
                      }}
                    />
                  </div>
                  <div className=" position-relative">
                    <label for="password" className="form-label d-block">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control-login w-100"
                      id="password"
                      placeholder="Enter your Password"
                      value={formData?.password}
                      onChange={({ target }) => setFormData((prev) => ({ ...prev, password: target.value }))}
                      style={{
                        fontSize: "12px",
                        color: "#acacac",
                        fontWeight: "300",
                      }}
                    />
                    <i className="las la-eye-slash position-absolute password-toggle-icon"></i>
                  </div>
                  <button type="submit" className="btn-submit ">
                    Register
                  </button>
                </form>

                <p className="text-center login-text3 mt-3 or-login-with">or Login with</p>
                <div className="d-flex justify-content-center">
                  <button className="mx-2 sosmed-btn">
                    <FaGoogle size={16} className="text-light" />
                  </button>
                  <button className="mx-2 sosmed-btn">
                    <FaFacebook size={16} className="text-light" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
