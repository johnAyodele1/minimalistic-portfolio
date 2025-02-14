import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Work from "./Work.jsx";
import Contact from "./Contact.jsx";
import Omnifood from "./Omnifood.jsx";
import Mapty from "./Mapty.jsx";
import Bankist from "./Bankist.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/omnifood" element={<Omnifood />} />
        <Route path="/mapty" element={<Mapty />} />
        <Route path="/bankist" element={<Bankist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
