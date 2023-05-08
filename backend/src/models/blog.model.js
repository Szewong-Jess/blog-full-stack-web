import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Please input Title"],
      unique: true,
    },
    content: {
      type: String,
      require: [true, "Please input content"],
    },
    author: {
      type: String,
      require: [true, "Please provide author"],
    },
    isFeature: {
      type: Boolean,
      require: [true, "Please provide is feature"],
    },
  },
  {
    timestamps: true,
  }
);

export const BlogModel = mongoose.model("Blog", blogSchema);
