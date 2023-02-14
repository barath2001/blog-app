import express from "express";

import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlogById,
  deleteBlogById,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.route("/").get(getAllBlogs);
router.route("/:id").get(getBlogById);
router.route("/").post(createBlog);
router.route("/:id").patch(updateBlogById);
router.route("/:id").delete(deleteBlogById);

export default router;
