import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>

    <Navbar />   

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

  </BrowserRouter>
);