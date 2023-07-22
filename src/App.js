import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Authors from "./components/Authors";
import About from "./components/About";
import Post1 from "./components/Post1";
import Post2 from "./components/Post2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/post/1" element={<Post1 />} />
          <Route path="/post/2" element={<Post2 />} />
        </Routes>
        <footer>Aly Strom - 2023</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
