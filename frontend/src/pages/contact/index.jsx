import Message from "../../components/message";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 style={{ color: "#3D3D3D" }}>Contact</h1>
      <h1 style={{ marginBottom: "30px", color: "#3D3D3D" }}>—</h1>
      <div class="contact-img-wrap">
        <img src="src/assets/autumn.png" className="contact-img" />
      </div>
      <Message />
    </div>
  );
};

export default Contact;
