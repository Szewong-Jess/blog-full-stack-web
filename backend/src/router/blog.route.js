import express from "express";
import {
  findBlogByTitleController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
  findAllBlogController,
} from "../controllers/blog.controller.js";
import { protect } from "../middleware/requrieUser.js";

const router = express.Router();

router.get("/:id", findBlogByTitleController);

router.get("/", findAllBlogController);

//router.get("/:id", findBlogController);

router.post("/", protect, createBlogController);

router.patch("/:id", protect, updateBlogController);

router.delete("/:id", protect, deleteBlogController);

export default router;
