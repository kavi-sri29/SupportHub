import React from "react";
import { Route, Routes } from "react-router-dom";
import { Givesupport } from "./components/Givesupport";

import Header from "./components/Header";
import { Register } from "./components/Register";
import "./style.css";
import "./support.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<Givesupport />} />

        <Route path="/login" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
