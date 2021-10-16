import React from "react";
import pic from "../assets/pic.jpeg";
import HacktoberfestLogo from "../assets/hacktoberfest_logo.svg";
import { animate } from "../utils";

interface aboutProps {
  route: (name: string) => void;
}

export default function About(props: aboutProps) {
  return (
    <div className="aboutMainContainerDiv">
      <div className="aboutMainContainer">
        <h1 className={animate("slideInUp", 0)}>About</h1>
        <span className="quote">
          I'm Kunal. A Full Stack React Developer from India.
        </span>
        <p className="description-long">
          Hi, I’m Kunal. I’m a multi talented human with expertise in MERN Stack
          and also in a wide range of design disciplines.
          <br /> <br />
          You can also call me frontend, backend, full stack or by any other
          market defined function-title. I am also a multi-disciplinary maker
          with knowledge in a wide range of design disciplines, advisor,
          front-end, backend, full stack developer, designer and many more.
          <br /> <br />
          I don't like to define myself by the work I’ve done. I define myself
          by the work I want to do. Skills can be taught, personality is
          inherent. I prefer to keep learning, continue challenging myself, and
          do interesting things that matter.
          <br /> <br />
          Fueled by high energy levels and boundless enthusiasm, I’m easily
          inspired and more than willing to follow my fascinations wherever they
          take me. I'm a passionate, expressive, multi-talented spirit with the
          natural ability to entertain and inspire. I’m never satisfied to just
          come up with ideas. instead I have an almost impulsive need to act on
          them.
          <br /> <br />
          My abundant energy fuels me in the pursuit of many interests, hobbies,
          areas of study and artistic endeavours. I’m a fast learner label to
          pick up new skills and juggle different projects and roles with
          relative ease.
          <br /> <br />I like to develop expertise in a number of areas over the
          course of my life and career. My personality type is ENTJ. I currently
          work remotely with a selected freelance client and are open for new
          opportunities.
          <br /> <br />
          <span className="header">Experience</span>
          <br />- <span className="boldText">Degree</span> in Artificial
          Intelligence and Machine Learning
          <br />- <span className="boldText">Contributor</span> in HacktoberFest
          2021
          <img src={HacktoberfestLogo} className="imageIcon" alt="" />
          <br />- <span className="boldText">Technical Previewer</span> in
          Github Copilot
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
            alt=""
            className="imageIcon"
          />
          <br />- <span className="boldText">Open Source Contributor</span> in
          react-bootstrap
          <img
            src="https://img.icons8.com/color/48/000000/bootstrap.png"
            alt=""
            className="imageIcon"
          />
          <br />- <span className="boldText">Frontend Development Intern</span>{" "}
          @ oodles Technologies, Gurugram
          <br />- <span className="boldText">Nodejs Backend Intern</span> @
          Ridobiko, Delhi
          <br />
          <br />
          <span className="header">Skills</span>
          <br />
          HTML / CSS / ES6 JavaScript / TypeScript / Reactjs / React Native
          <br /> Redux / Rest API / MongoDB / Jest
          <br /> Nodejs / django / Firebase
          <br /> Figma / Adobe XD
          <br /> <br />
          <span className="header">kudos</span>
          <br />
          Most of what in a Project is team work, it's very rare these days to
          make anything great all on your own. I have only included work that I
          had a large contribution to, whether it's design, ideas, UX, process,
          engineering, mentorship, advice or creative direction. THANK YOU.
        </p>
        <br />
        <button className="button" onClick={() => props.route("contact")}>
          Contact Me
        </button>
      </div>
      <img src={pic} alt="" className={`profileImg ${animate("zoomIn", 1)}`} />
    </div>
  );
}
