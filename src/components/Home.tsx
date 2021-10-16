import React from "react";

interface HomeProps {
  route: (name: string) => void;
}

export default function Home(props: HomeProps) {
  const { route } = props;
  return (
    <div className="mainContainer">
      <div className="infoContainer">
        <h1>kunal kumar</h1>
        <p>Web Designer & Developer</p>
        <p>
          Creating beautiful and engaging digital experiences in Delhi,India.
        </p>
      </div>
      <div className="navigationContainer">
        <h1 onClick={() => route("work")}>work</h1>
        <h1 onClick={() => route("about")}>about</h1>
        <h1 onClick={() => route("contact")}>contact</h1>
      </div>
    </div>
  );
}
