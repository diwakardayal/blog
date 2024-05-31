/** @format */

import axios from "axios";

async function fetchPosts() {
  const res = await axios.get("/api/blog/");
  return res;
}

async function fetchPostById(postId) {
  const res = await axios.get("/api/blog/" + postId);
  return res?.data?.blogs;
}

async function createPost(post) {
  const res = await axios.post("/api/blog", post);
  return res.data;
}

async function updatePost(post) {
  const res = await axios.put("/api/blog", post);
  return res;
}

async function deletePost(postId) {
  const res = await axios.delete("/api/blog", {
    data: postId,
  });
  return res;
}

export { fetchPosts, fetchPostById, createPost, updatePost, deletePost };
