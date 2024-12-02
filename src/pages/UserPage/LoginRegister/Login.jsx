import "../../../styles/login.css";
import { useState } from "react";
import logo from "../../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import axios from "axios";

const API = import.meta.env.VITE_API;

const Login = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API}/auth/login`, userData);
      if (data?.status) {
        localStorage.setItem("user", JSON.stringify(data?.data));
        localStorage.setItem("token", data?.data?.token);
        localStorage.setItem("refresh_token", data?.data?.refresh_token);
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
      alert("invalid username or password");
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
                <h2 className="login-text text-center mb-3">Welcome!</h2>
                <div className="login-switch bg-secondary rounded-5 d-flex justify-content-center align-items-center mb-3">
                  <Link className="btn btn-login active box-shadow-lg">Login</Link>
                  <Link className="btn btn-register" to="/register">
                    Register
                  </Link>
                </div>
                <p className="login-txt-1 text-center mb-3">Welcome Back! Please Login to Your Account</p>
                <form id="loginForm" onSubmit={handleSubmit}>
                  <div className=" login-text4 position-relative">
                    <label htmlFor="username" className="form-label d-block mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control-login"
                      id="username"
                      placeholder="Enter your Username"
                      value={userData?.email}
                      onChange={({ target }) => setUserData((prev) => ({ ...prev, email: target.value }))}
                      style={{
                        fontSize: "12px",
                        color: "#acacac",
                        fontWeight: "300",
                      }} //tambahkan ini
                    />
                  </div>
                  <div className="login-text4 position-relative">
                    <label htmlFor="password" className="form-label d-block mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control-login w-100"
                      id="password"
                      placeholder="Enter your Password"
                      value={userData?.password}
                      onChange={({ target }) => setUserData((prev) => ({ ...prev, password: target.value }))}
                      style={{
                        fontSize: "12px",
                        color: "#acacac",
                        fontWeight: "300",
                      }} //tambahkan d-block agar bisa atas bawah dan w-100
                    />
                    <i className="las la-eye-slash position-absolute password-toggle-icon"></i>
                  </div>

                  <div className="d-flex justify-content-between ">
                    <div>
                      <input type="checkbox" id="remember" />
                      <label className="text-decoration-none" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-decoration-none">
                      Forgot Password?
                    </a>
                  </div>
                  <button type="submit" className="btn-submit">
                    Login
                  </button>
                </form>
                <p className="text-center login-text3 mt-3 or-login-with">or Login with</p>
                <div className="d-flex justify-content-center">
                  <button className="mx-2 sosmed-btn">
                    <FaGoogle size={16} className="text-light" />
                  </button>
                  <button className="mx-2 sosmed-btn">
                    <FaFacebook size={16} className="text-light " />
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

export default Login;
