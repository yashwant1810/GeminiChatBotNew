import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home.jsx";  // Example of another page
import Mario from "./mario.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mario" element={<Mario />}  />
    </Routes>
  );
};

export default App;