import React from "react";
// import "./App.css";
import Postview from "./Postview";
import LandingPage from "./LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/Postview" element={<Postview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
