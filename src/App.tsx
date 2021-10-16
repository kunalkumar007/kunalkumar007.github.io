import React, { useEffect, useRef, useState } from "react";
import About from "./components/About";
import { HeaderMenu, HomeHeader } from "./components/Header";
import "./styles/app.css";
import Home from "./components/Home";
import gsap from "gsap";
import { Power4, Power1 } from "gsap/all";
import Work from "./components/Work";

function App() {
  const containerRef = useRef(null);
  let loadingRef = useRef(null);
  let loadingDuration = 2;
  const query = gsap.utils.selector(containerRef);
  const [screen, setScreen] = useState("home");
  const routeHandler = (name: string) => setScreen(name);
  useEffect(() => {
    gsap.to(loadingRef.current, {
      height: 0,
      duration: loadingDuration,
      autoAlpha: 0,
      ease: Power1.easeOut,
    });
    gsap.from(query(".infoContainer,.navigationContainer"), {
      duration: 4,
      yPercent: 10,
      ease: Power4.easeInOut,
    });
  }, []);
  return (
    <>
      <div className="loadingScreen" ref={loadingRef}></div>
      <div className="appContainer" ref={containerRef}>
        {screen === "home" && (
          <>
            <HomeHeader />
            <Home route={routeHandler} />
          </>
        )}
        {screen === "about" && (
          <>
            <HeaderMenu route={routeHandler} screen={screen} />
            <About />
          </>
        )}
        {screen === "work" && (
          <>
            <HeaderMenu route={routeHandler} screen={screen} />
            <Work route={routeHandler} screen={screen} />
          </>
        )}
        {screen === "contact" && (
          <>
            <HeaderMenu route={routeHandler} screen={screen} />
            <Work route={routeHandler} screen={screen} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
