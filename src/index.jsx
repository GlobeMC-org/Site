import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const text = [
    "      ________      __         __  _________",
    "    / ____/ /___  / /_  ___  /  |/  / ____/",
    "  / / __/ / __ \\/ __ \\/ _ \\/ /|_/ / /     ",
    " / /_/ / / /_/ / /_/ /  __/ /  / / /___   ",
    " \\____/_/\\____/_.___/\\___/_/  /_/\\____/",
    " ",
    " Join us today! play.globemc.org",
    " ",
    " * Map: https://map.globemc.org/",
    " * Discord: LINK",
    " * Rules: https://globemc.org/rules/",
    " * Wiki: https://globemc.org/wiki/",
    " ",
    " Copyright 2023 Unsafe Software"
  ];

  return(
    <>
      <div class="typewriter">
        {text.map((line, index) => (
            <pre key={index} style={{ animationDelay: `${index * 750 + 500}ms`, margin: "0 0 0 -1.2vw"}}>
              {line}
            </pre>
          ))}
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);