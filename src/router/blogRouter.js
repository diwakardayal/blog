/** @format */

const express = require("express");
const {
  fetchBlogs,
  fetchBlog,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
} = require("../controller/blogController");

const router = express.Router();

router.route("/:blogId").get(fetchBlog);
router
  .route("/")
  .get(fetchBlogs)
  .post(createBlogPost)
  .put(updateBlogPost)
  .delete(deleteBlogPost);

module.exports = router;
