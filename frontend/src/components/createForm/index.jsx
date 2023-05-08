import { useRef, useState } from "react";
import axiosClient from "../../api/index.js";
import Button from "../button";
import Switch from "../switch";
import { toast } from "react-toastify";
import "./style.css";

const CreateForm = () => {
  const title = useRef(null);
  const content = useRef(null);
  const [isCheck, setIsCheck] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reformTitle = title.current.value
      .split(" ")
      .map((value) => value.toLowerCase())
      .join("-");

    const blog = {
      title: reformTitle,
      content: content.current.value,
      isFeature: isCheck,
      author: "Jess Wong",
    };

    const data = await axiosClient.post("/blog", blog);

    if (data.status === 400) {
      toast("Submit Failed", {
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

    if (data.status === 200) {
      toast("Submit Succeed", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      title.current.value = null;
      content.current.value = null;
      setIsCheck(false);
    }
  };

  const onChangeCheckbox = (value) => {
    setIsCheck(value);
  };

  return (
    <form className="create-form-container" onSubmit={handleSubmit}>
      <div className="create-form-row">
        <label>Title: </label>
        <input
          type="text"
          placeholder="Type your title"
          name="title"
          ref={title}
        />
      </div>
      <div className="create-form-row">
        <label>Content: </label>
        <textarea rows="5" cols="50" name="content" ref={content}></textarea>
      </div>
      <div className="create-form-switch-row">
        <Switch
          checked={isCheck}
          onChange={onChangeCheckbox}
          name="Is Feature: "
        />
      </div>
      <div className="create-form-row create-form-button">
        <Button name="Submit" type="submit" />
      </div>
    </form>
  );
};

export default CreateForm;
