import { useRef } from "react";
import axiosClient from "../../api/index.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./style.css";

const LoginForm = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const loginForm = async (e) => {
    e.preventDefault();

    const payload = {
      email: email.current.value,
      password: password.current.value,
    };

    const res = await axiosClient.post("/auth/login", payload);

    if (res.status === 400 || res.status === 403) {
      toast("Login Failed", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (res.status === 200) {
      toast("Login Succeed", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      localStorage.setItem("accessToken", res.data.accessToken);

      localStorage.setItem("username", res.data.user.name);

      localStorage.setItem("userId", res.data.user.id);

      setAuth({ user: res.data.user });

      email.current.value = null;

      password.current.value = null;

      navigate("/");
    }
  };

  return (
    <form className="login-form" onSubmit={loginForm}>
      <div className="form-row">
        <label>Email: </label>
        <input type="text" name="email" ref={email} />
      </div>
      <div className="form-row">
        <label>Password: </label>
        <input type="password" name="password" ref={password} />
      </div>
      <button type="submit" className="form-btn">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
