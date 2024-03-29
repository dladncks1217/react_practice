import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputScreen from "./screen/InputScreen";
import Main from "./screen/Main";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/input" element={<InputScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
