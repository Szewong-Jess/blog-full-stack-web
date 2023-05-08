import { useRef } from "react";
import axiosClient from "../../api/index.js";
import { toast } from "react-toastify";
import "./style.css";

const Message = () => {
  const name = useRef(null);
  const email = useRef(null);
  const msg = useRef(null);
  const onLeaveMsg = async () => {
    const payload = {
      to: email.current.value,
      name: name.current.value,
      text: msg.current.value,
    };

    const res = await axiosClient.post("/mail", payload);

    if (res.status === 200) {
      toast("Leave Message Succeed", {
        position: "center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      email.current.value = "";
      name.current.value = "";
      msg.current.value = "";
    }
  };
  return (
    <>
      <div className="message-container">
        <form onSubmit={onLeaveMsg}>
          <h2 style={{ margin: "40px" }}>Hi! I'm Heather</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p>
            This is a great space to write long text about your company and your
            services. You can use this space to go into a little more detail
            about your company. Talk about your team and what services you
            provide. Tell your visitors the story of how you came up with the
            idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
          <h6 style={{ margin: "40px" }}>DROP ME A LINE</h6>
          <input
            type="text"
            name="name"
            placeholder="Name"
            style={{ margin: "15px", width: "35%", border: "none" }}
            ref={name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={{ margin: "15px", width: "35%", border: "none" }}
            ref={email}
          />
          <textarea
            name="messagebox"
            placeholder="Type your messafe here..."
            id=""
            style={{
              margin: "15px",
              width: "75%",
              height: "100px",
              border: "none",
            }}
            ref={msg}
          ></textarea>
          <br />
          <button
            type="submit"
            style={{
              border: "none",
              width: "200px",
              height: "40px",
              color: "white",
              backgroundColor: "#3D3D3D",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Message;
