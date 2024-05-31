/** @format */

const asyncHandler = require("../middleware/asyncHandler");
const Blog = require("../db/models/blog");

// @desc Get blog post by id
// @route GET /api/blog/:blogId
// @access Public
const fetchBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.params;

  const blogs = await Blog.findOne({ where: { id: blogId } });

  if (!blogs) {
    res.status(404);
    throw new Error("Blog not found");
  }

  res.json({ blogs });
});

// @desc Get all blog posts
// @route GET /api/blog
// @access Public
const fetchBlogs = asyncHandler(async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500);
    throw new Error("Internal server error");
  }
});

// @desc Create blog post
// @route POST /api/blog
// @access Private
const createBlogPost = asyncHandler(async (req, res) => {
  const { title, content, authorId } = req.body;

  const user = await Blog.create({
    title,
    content,
    authorId,
  });

  res.status(201).json(user);
});

// @desc Update blog post
// @route PUT /api/blog
// @access Private
const updateBlogPost = asyncHandler(async (req, res) => {
  const { postId, title, content } = req.body;

  if (!postId || !title || !content) {
    res.status(400);
    throw new Error("Please provide postId, title, content");
  }

  const post = await Blog.findByPk(postId);
  post.title = title || post.title;
  post.content = content || post.content;

  await post.save();

  res.status(200).json(post);
});

// @desc Delete blog post
// @route Delete /api/blog
// @access Private
const deleteBlogPost = asyncHandler(async (req, res) => {
  const { postId } = req.body;

  if (!postId) {
    res.status(400);
    throw new Error("Please provide postId, title, content");
  }

  const post = await Blog.findByPk(postId);

  if (!post) {
    res.status(404);
    throw new Error("Blog post not found");
  }

  await post.destroy();

  res.status(200).json({
    message: "Blog post deleted successfully",
  });
});

module.exports = {
  fetchBlogs,
  fetchBlog,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};
