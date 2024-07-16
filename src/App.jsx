import React from "react";

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./style/style.css";

// Scripts
import "./assets/js/preline";

//Pages
import { About, Home, Portfolio, Services, Contact } from "./pages";

function App() {
  return (
    <>
      <HashRouter>
        <main>
          <Routes>
            <Route index exact path="/" element={<Home />} />
            <Route index exact path="/portfolio" element={<Portfolio />} />
            <Route index exact path="/about" element={<About />} />
            <Route index exact path="/services" element={<Services />} />
            <Route index exact path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </HashRouter>
    </>
  );
}

export default App;
