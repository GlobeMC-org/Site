import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Outlet } from "react-router-dom";

import Site from "./site.jsx"
import Animation from './animation.jsx';
import './nav.scss';

const Nav = () => {
  return(
    <>
      <nav>
        <ul>
          <li><b>GlobeMC</b></li>
          <li>Map</li>
          <li>Guide</li>
          <li>Rules</li>
          <li>Mods</li>
          <li>Discord</li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Site />} />
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