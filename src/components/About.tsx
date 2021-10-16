import React from "react";
import pic from "../assets/pic.jpeg";

export default function About() {
  return (
    <div style={{ display: "flex" }}>
      <div className="aboutMainContainer">
        <h1>About</h1>
        <span className="quote">
          I'm Kunal. A designer, maker and problem solver.
        </span>
        <p className="description-long">
          I’ve been designing with computers since the day I first opened
          Microsoft Paint. The cusp of art and technology has always fascinated
          me and I've never been afraid to just jump in and give it a go,
          whether it's Paint, Photoshop, Sketch or CSS. Fast forward to 2019 and
          I’ve tried it all, from Digital Campaign Design and Flash Actionscript
          to Web Design, Animation and HTML/CSS, to Product Design and Product
          Management. Everything I have done, small or big, has been a vital
          stepping stone for where I am today: A Senior Product Manager at
          GoDaddy.
          <br />
          <br />
          <span className="header">Experience</span>
          <br />
          - Degree in Brand Communications
          <br />- 13 years experience in Digital Design, Advertising and Product
          <br />
          <br />
          <span className="header">Skills</span>
          <br />
          UI/UX Design / Strategy / Product Management / User Research / Agile
          Methodologies / Collaboration / Design Sprints / Design Systems / HTML
          and CSS / CMS Design & Architecture / Webflow Development /
          Photography / Graphic Design
          <br />
          <br />
          <span className="header">kudos</span>
          <br />
          Most of what is in this portfolio is team work, it's very rare these
          days to make anything great all on your own. I have only included work
          that I had a large contribution to, but whether it's design, ideas,
          UX, process, engineering, mentorship, advice or creative direction,
          the following people have influenced my growth and career path in a
          massive way: Shawn Roos, Wayne Berry, Daniel Klopper, Michael Thorne,
          Kobus Brummer, Pascal Righini, Jade Scully. THANK YOU.
        </p>
        <br />
        <button className="button">Contact Me</button>
      </div>
      <img src={pic} alt="" className="profileImg" />
    </div>
  );
}
