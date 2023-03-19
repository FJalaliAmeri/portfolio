import React from "react";
import "./index.css";
import About from "./routes/About";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import CoverLetter from "./routes/CoverLetter";
import Credentials from "./routes/Credentials";
import Resume from "./routes/Resume";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/coverletter" element={<CoverLetter />} />
      </Routes>
    </>
  );
}
export default App;
