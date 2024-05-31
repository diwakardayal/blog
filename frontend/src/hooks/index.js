/** @format */

import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { BlogContext } from "../context/BlogProvider";

export const useAuth = () => useContext(AuthContext);
export const useBlog = () => useContext(BlogContext);
