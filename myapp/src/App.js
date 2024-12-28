import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import WatchDetailsDisplayer from "./components/WatchDetailsDisplayer";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/details" element={<WatchDetailsDisplayer />} />
    </Routes>
  </BrowserRouter>
);

export default App;
