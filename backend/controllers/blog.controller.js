import mongoose from "mongoose";
import Blog from "../mongodb/models/blog.js";

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, description, content, image } = req.body;
    const dateCreated = new Date().toISOString();

    const newBlog = await Blog.create({
      title,
      description,
      dateCreated,
      content,
      image,
    });

    res.status(200).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    let blogExists = null;

    if (mongoose.Types.ObjectId.isValid(id)) {
      blogExists = await Blog.findOne({ _id: id });
    }

    if (blogExists) res.status(200).json(blogExists);
    else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBlogById = async (req, res) => {
  try {
    const { title, description, content, image } = req.body;
    const dateCreated = new Date().toISOString();

    const { id } = req.params;

    const blogToUpdate = await Blog.findOne({ _id: id });

    if (blogToUpdate) {
      const newBlog = await Blog.findOneAndUpdate(
        { _id: id },
        {
          title,
          description,
          dateCreated,
          content,
          image,
        }
      );

      res.status(200).json(newBlog);
    } else {
      throw new Error("Blog not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blogToDelete = await Blog.findById({ _id: id });

    if (blogToDelete) {
      blogToDelete.remove();
      res.status(202).send({ message: "deleted successfully" });
    } else {
      throw new Error("Blog not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllBlogs, createBlog, getBlogById, updateBlogById, deleteBlogById };
