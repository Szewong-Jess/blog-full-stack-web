import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../../api/index";
import { titleCase } from "../../helpers";
import { toast } from "react-toastify";
import Switch from "../../components/switch";
import Button from "../../components/button";
import "./style.css";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const title = useRef();
  const content = useRef();

  const navigate = useNavigate();

  const getBlog = async (id) => {
    const res = await axiosClient.get(`/blog/${id}`);
    if (res.status === 200) {
      setBlog(res.data);
      setIsCheck(res.data.isFeature);
      title.current.value = res.data.title
        ?.split("-")
        .map((value) => titleCase(value))
        .join(" ");
      content.current.value = res.data.content;
    }
  };

  const onEditBlog = async () => {
    const payload = {
      author: blog?.author,
      content: content.current.value,
      title: title.current.value,
      isFeature: isCheck,
    };

    console.log(payload);

    const isUpdate = await axiosClient.patch(`/blog/${blog._id}`, payload);

    console.log(isUpdate);

    if (isUpdate.status === 203) {
      toast("Updated Succeed", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setBlog({});

      title.current.value = null;

      content.current.value = null;

      navigate("/");
    }
  };

  const onDeleteBlog = async () => {
    const isDelete = await axiosClient.delete(`/blog/${blog._id}`);

    if (isDelete.status === 200) {
      toast("Delete Succeed", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      navigate("/");
    }
  };

  const onCheck = (value) => {
    setIsCheck(value);
  };

  useEffect(() => {
    if (id) {
      getBlog(id);
    }
    if (localStorage.getItem("user")) {
      setIsAdmin(true);
    }
  }, []);
  return (
    <div
      className={blog.isFeature ? "blog-container featured" : "blog-container"}
    >
      <div className="blog-row">
        <label>Title: </label>{" "}
        <input type="text" ref={title} disabled={!isAdmin} />
      </div>
      <div className="blog-row">
        <label>Content: </label>
        <textarea rows="4" cols="50" ref={content} disabled={!isAdmin} />
      </div>
      <div className="blog-row">
        <label>Updated At: </label>
        <span>{blog.updatedAt}</span>
      </div>
      <div className="blog-row">
        <label>Author: </label>
        <span>{blog.author}</span>
      </div>
      <div className="blog-row-checkbox">
        <label>Is Feature: </label>
        <Switch
          isCheck={isCheck}
          onChange={onCheck}
          isDisable={!isAdmin}
          className="blog-row-switch"
        />
      </div>
      <div
        className="blog-btn-row"
        style={{ display: isAdmin ? "flex" : "none" }}
      >
        <Button
          name="Delete"
          isDisable={!isAdmin}
          color="#E0144C"
          onClick={onDeleteBlog}
        />
        <Button name="Edit" isDisable={!isAdmin} onClick={onEditBlog} />
      </div>
    </div>
  );
};

export default Blog;
