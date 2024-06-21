import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/style.css";
import "./style/icons.css";

//Lucid Icons
import "./assets//libs/lucide/umd/lucide.min.js";

//Pages
import { Home } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route index exact path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
