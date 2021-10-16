import React from "react";
import { animate } from "../utils";

interface HomeProps {
  route: (name: string) => void;
}

export default function Home(props: HomeProps) {
  const { route } = props;
  return (
    <div className="mainContainer">
      <div className={`infoContainer ${animate("fadeIn", 1)}`}>
        <h1>kunal kumar</h1>
        <p>Web Designer & Developer</p>
        <p>
          Creating beautiful and engaging digital experiences in Delhi,India.
        </p>
      </div>
      <div className="navigationContainer">
        <h1 onClick={() => route("work")} className={animate("flipInX", 1)}>
          work
        </h1>
        <h1 onClick={() => route("about")} className={animate("flipInX", 2)}>
          about
        </h1>
        <h1 onClick={() => route("contact")} className={animate("flipInX", 3)}>
          contact
        </h1>
      </div>
    </div>
  );
}
