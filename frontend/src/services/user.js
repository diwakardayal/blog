/** @format */

import axios from "axios";

async function login(user) {
  const res = await axios.post("/api/user/auth", user);
  return res.data;
}

async function register(user) {
  const res = await axios.post("/api/user/", user);
  return res;
}
export { login, register };
