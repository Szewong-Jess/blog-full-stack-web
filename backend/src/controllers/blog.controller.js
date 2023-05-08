import {
  findBlogByTitle,
  findBlogByAuthor,
  findBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../service/blog.service.js";
import mongoose from "mongoose";

const findAllBlogController = async (req, res) => {
  const query = req.query;

  const blogs = await findBlogs(query);

  if (!blogs) return res.status(404).send("Blogs not found");

  return res.status(200).send(blogs);
};

const findBlogByTitleController = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).send("Title not found");

  const blog = await findBlogByTitle(id);

  if (!blog) return res.status(400).send("Blog not found");

  return res.status(200).send(blog);
};

const findAuthorBlogController = async (req, res) => {
  const { author } = req.query;

  if (!author) return res.status(400).send("Author is required");

  const blogs = await findBlogByAuthor(author);

  if (!blogs || blog.length === 0) {
    return res.status(400).send("Blog not found");
  }

  return res.status(200).send(blogs);
};

const createBlogController = async (req, res) => {
  const { title, content, author, isFeature } = req.body;

  if (!title || !content || !author || !isFeature) {
    res.send("Infomation is not complete");
  }

  const blog = await findBlogByTitle(title);

  if (blog) return res.status(400).send("Blog is existed");

  const newBlog = await createBlog(req.body);

  if (!newBlog) return res.status(400).send("Create Blog Failed");

  return res.status(200).send(newBlog);
};

const updateBlogController = async (req, res) => {
  const { id } = req.params;

  const payload = req.body;

  if (!id || !payload)
    return res.status(400).send("Id or payload not complete");

  const blog = await updateBlog(mongoose.Types.ObjectId(id), payload);

  if (!blog) return res.status(400).send("Update blog failed");

  return res.status(203).send(blog);
};

const deleteBlogController = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).send("Id is not existed");

  const blog = await deleteBlog(mongoose.Types.ObjectId(id));

  if (!blog) return res.status(404).send("Blog not found");

  return res.status(200).send("Blog post deleted");
};

export {
  findAllBlogController,
  findBlogByTitleController,
  findAuthorBlogController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
};
