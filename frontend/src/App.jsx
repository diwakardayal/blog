/** @format */

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./HomePage";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import PageNotFound from "./404Page";

import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";


function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<SignInForm />} />
            <Route path="/register" element={<SignUpForm />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
