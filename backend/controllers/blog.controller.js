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
    const { title, description, dateCreated, content, image } = req.body;

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
  const { id } = req.params;

  const blogExists = await Blog.findOne({ _id: id });

  if (blogExists) res.status(200).json(blogExists);
  else {
    res.status(404).json({ message: "Blog not found" });
  }
};

const updateBlogById = async (req, res) => {};

const deleteBlogById = async (req, res) => {};

export { getAllBlogs, createBlog, getBlogById, updateBlogById, deleteBlogById };
