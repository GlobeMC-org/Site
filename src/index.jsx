import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';

import Animation from "./animation.jsx";
import Nav from "./nav.jsx"
import MDR from "./mdr.jsx"
import './nav.scss';

const Discord = () => {
  useEffect(() => {
    window.location.href = "https://discord.gg/eRUHxGECsy";
  }, []);
}

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<MDR url={"/mds/home.md"} />} />
          <Route path="/guide" element={<MDR url={"/mds/guide.md"} />} />
          <Route path="/rules" element={<MDR url={"/mds/rules.md"} />} />
          <Route path="/mods" element={<MDR url={"/mds/mods.md"} />} />
          <Route path="/discord" element={<Discord />} />
        </Route>

        <Route path="/anim" element={<Animation />}/>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);