/** @format */

import { createContext, useState } from "react";
import { fetchPosts } from "../services/blog";

export const BlogContext = createContext();

// eslint-disable-next-line react/prop-types
export default function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);

  async function getBlogs() {
    const response = await fetchPosts();
    console.log(response.data);
    setBlogs(response.data);
  }

  return (
    <BlogContext.Provider value={{ blogs, getBlogs }}>
      {children}
    </BlogContext.Provider>
  );
}
