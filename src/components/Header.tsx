import React, { useEffect, useState } from "react";
interface menuProps {
  route: (name: string) => void;
  screen: string;
}
const HomeHeader = () => {
  return (
    <div className="headerMenuContainer">
      <div className="headerMenu">
        <h4>li</h4>
        <h4>gb</h4>
        <h4>ig</h4>
        <h4>dm</h4>
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
    if (screen === "contact") setcolor("white");
  }, [props, screen]);
  return (
    <div className="headerMenuContainer" style={{ color }}>
      <div className="aboutMenu">
        <h4 onClick={() => route("home")}>home</h4>
      </div>
    </div>
  );
};

export { HomeHeader, HeaderMenu };
