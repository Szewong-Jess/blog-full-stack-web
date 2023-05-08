import Button from "../button";
import axiosClient from "../../api/index.js";
import { toast } from "react-toastify";
import { useRef } from "react";
import "./style.css";

const Footer = () => {
  const email = useRef(null);

  const onSubscribe = async () => {
    const payload = {
      email: email.current.value,
    };

    const res = await axiosClient.post("/mail/sub", payload);

    if (res) {
      toast("Subscribe Succeed", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      email.current.value = "";
    }
  };

  return (
    <div className="footer-container">
      <h3 className="footer-title">JOIN MY MAIL LIST</h3>
      <div className="footer-wrap">
        <input
          type="email"
          className="footer-input"
          placeholder="Enter your email"
          ref={email}
        />
        <Button name="submit" onClick={onSubscribe} />
      </div>
    </div>
  );
};

export default Footer;
