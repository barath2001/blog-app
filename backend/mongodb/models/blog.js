import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dateCreated: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
});

const BlogModel = mongoose.model("Blog", BlogSchema);

export default BlogModel;
