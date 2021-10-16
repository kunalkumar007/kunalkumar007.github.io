import React, { useEffect, useState } from "react";
import About from "./components/About";
import { HeaderMenu, HomeHeader } from "./components/Header";
import "./styles/app.css";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import loader from "./assets/loading1.gif";

function App() {
  const [bgColor, setbgColor] = useState("#EEE7E1");
  const [screen, setScreen] = useState("home");
  const [loading, setloading] = useState(true);
  const routeHandler = (name: string) => setScreen(name);
  useEffect(() => {
    setTimeout(() => setloading(false), 2000);
  }, []);
  useEffect(() => {
    if (screen === "contact") {
      setbgColor("#1A1919");
    } else {
      setbgColor("#EEE7E1");
    }
  }, [screen]);
  if (loading) {
    return (
      <div className="loadingScreen">
        <img src={loader} alt="" />
      </div>
    );
  }

  return (
    <>
      <div className="appContainer" style={{ backgroundColor: bgColor }}>
        {screen === "home" && (
          <>
            <HomeHeader />
            <Home route={routeHandler} />
          </>
        )}
        {screen === "about" && (
          <>
            <HeaderMenu route={routeHandler} screen={screen} />
            <About route={routeHandler} />
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
            <Contact route={routeHandler} screen={screen} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
