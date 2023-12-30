import React from 'react';
import { useEffect } from 'react';
import "./animation.css"

const Animation = () => {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = '/site';
    }, 10 * 300 + 1250);

    return () => clearTimeout(redirectTimeout);
  }, []);

  const text = [
    " > telnet globemc.org 23",
    "      ________      __         __  _________",
    "    / ____/ /___  / /_  ___  /  |/  / ____/",
    "  / / __/ / __ \\/ __ \\/ _ \\/ /|_/ / /     ",
    " / /_/ / / /_/ / /_/ /  __/ /  / / /___   ",
    " \\____/_/\\____/_.___/\\___/_/  /_/\\____/",
    " ",
    " Connecting...",
    " Connected",
    " Redirecting...",
    " ",
    " Copyright 2023 Unsafe Software",
  ];

  return(
    <div class="typewriter">
      {text.map((line, index) => (
          <pre key={index} style={{ animationDelay: `${index >= 8 ? index === 13 ? 10 * 300 + 750 : index * 300 + 750 : index * 300 + 300}ms`, margin: "0 0 0 -1.2vw"}}>
            {line}
          </pre>
        ))}
    </div>
  );
}
export default Animation;