import Navbar from "./components/navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import Login from "./pages/login";
import CreateBlog from "./pages/edit";
import Blog from "./pages/blog";
import RequireAuth from "./components/requireAuth";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const { setAuth } = useAuth();
  useEffect(() => {
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("userId");
    setAuth({
      user: {
        id: userId,
        name: username,
      },
    });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <div className="routes-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route element={<RequireAuth />}>
            <Route path="/edit" element={<CreateBlog />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
