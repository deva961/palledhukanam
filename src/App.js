import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./screens/about/About";
import Contact from "./screens/contact/Contact";
import Home from "./screens/home/Home";
import NotFound from "./screens/NotFound/NotFound";
import Products from "./screens/products/Products";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
