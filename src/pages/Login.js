import React, { useState } from "react";
import loginSignupImage from "../asset/login1.gif";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRedux } from "../redux/userSlice";
import loginImg from "../asset/login.jpg";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const dataRes = await fetchData.json();
      toast(dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        navigate("/");
      }
    } else {
      alert("Please enter required fields");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="w-full md:w-2/3 bg-cover bg-center h-full md:h-full"
        style={{ backgroundImage: `url(${loginImg})` }}
      ></div>
  
      <div className="w-full md:w-1/3 bg-blue-100 flex justify-center items-center h-full">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <div className="w-16 h-16 overflow-hidden rounded-full drop-shadow-md shadow-md flex justify-center items-center m-auto mb-6">
            <img src={loginSignupImage} className="w-full h-full object-cover" alt="loginImg" />
          </div>
  
          <form className="w-full flex flex-col" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
  
            <label htmlFor="email" className="font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mb-4 w-full bg-slate-200 p-2 rounded focus:outline-blue-400"
              value={data.email}
              onChange={handleOnChange}
              required
            />
  
            <label htmlFor="password" className="font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mb-4 w-full bg-slate-200 p-2 rounded focus:outline-blue-400"
              value={data.password}
              onChange={handleOnChange}
              required
            />
  
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-all">
              Login
            </button>
          </form>
  
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );  
};

export default Login;
