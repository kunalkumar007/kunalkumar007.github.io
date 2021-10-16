import React, { useEffect, useState } from "react";

interface workProps {
  route: (name: string) => void;
  screen: string;
}

export default function Work(props: workProps) {
  const { route, screen } = props;

  return (
    <div className="mainContainer">
      <div className="infoContainer">
        <h1>WORK</h1>
        <p>
          This is a showcase of my best work in a variety of fields, from
          Graphic and Web Design to Product Design and Management.
        </p>
        <p>
          The world of Digital Design has grown at an extremely rapid rate over
          the last 10 years and my aim has been to evolve with it. I’m learning
          and gaining new skills every day.
        </p>
      </div>
      <div className="navigationContainer">
        <h1>work</h1>
        <h2>– Product Management</h2>
        <h1>about</h1>
        <h2>– Product Management</h2>
        <h1>contact</h1>
        <h2>– Product Management</h2>
        <h1>contact</h1>
        <h2>– Product Management</h2>
        <h1>contact</h1>
        <h2>– Product Management</h2>
        <h1>contact</h1>
        <h2>– Product Management</h2>
        <h1>contact</h1>
        <h2>– Product Management</h2>
        <h1>contact</h1>
      </div>
    </div>
  );
}
