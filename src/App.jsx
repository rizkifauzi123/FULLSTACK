// src/App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Team from "./components/Team";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Home />
      <Team />
      <Contact />
    </div>
  );
};

export default App;


