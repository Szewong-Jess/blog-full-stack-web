import { BlogModel } from "../models/blog.model.js";

const findBlogs = async (query) => {
  const payload = {};

  if (query["isFeature"]) {
    if (query["isFeature"] === "true") {
      payload["isFeature"] = true;
    } else {
      payload["isFeature"] = false;
    }
  }

  return await BlogModel.find(payload);
};

const createBlog = async (payload) => {
  return await BlogModel.create(payload);
};
const findBlogById = async (id) => {
  return await BlogModel.findById(id);
};
const findBlogByAuthor = async (name) => {
  return await BlogModel.find({ author: name });
};
const findBlogByTitle = async (name) => {
  return await BlogModel.findOne({ title: name });
};
const updateBlog = async (id, payload) => {
  return await BlogModel.findByIdAndUpdate(id, payload);
};
const deleteBlog = async (id) => {
  return await BlogModel.findByIdAndDelete(id);
};

export {
  findBlogs,
  createBlog,
  findBlogById,
  findBlogByAuthor,
  updateBlog,
  deleteBlog,
  findBlogByTitle,
};
