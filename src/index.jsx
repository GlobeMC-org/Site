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

// const Map = () => {
//   return(
//     <embed src="https://65.108.18.28:25663/" style={{width: "100%", height: "100%"}} frameborder="0"/>
//   );
// }

const App = () => {
  const Map = () => window.location.href = "http://65.108.18.28:25663/";

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<div className="Margin"><MDR url={"/mds/home.md"} /></div>} />
          <Route path="/guide" element={<div className="Margin"><MDR url={"/mds/guide.md"} /></div>} />
          <Route path="/rules" element={<div className="Margin"><MDR url={"/mds/rules.md"} /></div>} />
          <Route path="/mods" element={<div className="Margin"><MDR url={"/mds/mods.md"} /></div>} />
          <Route path="/eula" element={<div className="Margin"><MDR url={"/mds/eula.md"} /></div>} />
          <Route path="/map" element={<Map />} />
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
