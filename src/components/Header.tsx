import React, { useEffect, useState } from "react";
import { animate } from "../utils";
interface menuProps {
  route: (name: string) => void;
  screen: string;
}

const HomeHeader = () => {
  return (
    <div className="headerMenuContainer">
      <div className={`headerMenu ${animate("bounceInUp", 0)}`}>
        <a href="https://www.linkedin.com/in/kunalkumar007/">
          <h4>li</h4>
        </a>
        <a href="https://github.com/kunalkumar007">
          <h4>gb</h4>
        </a>
        <a href="https://www.instagram.com/kunal.developer/">
          <h4>ig</h4>
        </a>
        <a href="mailto:kunalinbox83@gmail.com">
          <h4>dm</h4>
        </a>
      </div>
      <div className="logo">
        <h1>K.K</h1>
      </div>
    </div>
  );
};

const HeaderMenu = (props: menuProps) => {
  const { route, screen } = props;
  const [color, setcolor] = useState("black");
  useEffect(() => {
    if (screen === "contact") {
      setcolor("white");
    }
  }, [props, screen]);
  return (
    <div className="headerMenuContainer" style={{ color }}>
      <div className={`aboutMenu ${animate("slideInUp", 0)}`}>
        <h4 onClick={() => route("home")}>home</h4>
      </div>
    </div>
  );
};

export { HomeHeader, HeaderMenu };
