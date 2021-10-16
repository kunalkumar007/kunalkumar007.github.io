import { animate } from "../utils";

interface workProps {
  route: (name: string) => void;
  screen: string;
}

export default function Work(props: workProps) {
  return (
    <div className="mainContainer">
      <div className="infoContainer">
        <h1>WORK</h1>
        <p className={animate("slideInUp", 0)}>
          This is a showcase of my best work in a variety of fields, from
          Graphic and Web Design to Web Design and Development.
        </p>
        <br />
        <p className={animate("slideInUp", 0)}>
          From Web Components and UI/UX animations to React.JS, Redux, Firebase,
          and Node.JS. Check out my latest web software development portfolio
          projects.
        </p>
      </div>
      <div className="navigationContainer">
        <a href="https://covi-tracker-19.netlify.app/">
          <h1>Cowin</h1>
        </a>
        <h2>– Covid 19 Tracker App </h2>
        <a href="https://artile.netlify.app/">
          <h1>Artile</h1>
        </a>
        <h2>– Advice App</h2>
        <a href="https://baconipsumgeneratorapp.netlify.app/">
          <h1>Bacon</h1>
        </a>
        <h2>– Random Text generator App</h2>
        <a href="https://chancy.netlify.app/">
          <h1>chancy</h1>
        </a>
        <h2>– Markdown Editor App</h2>
        <a href="https://flater.netlify.app/">
          <h1>Flater</h1>
        </a>
        <h2>– Wildfire Tracker App</h2>
        <a href="https://inver-react.netlify.app/">
          <h1>inver</h1>
        </a>
        <h2>– Expense Tracker App</h2>
        <a href="https://narries.netlify.app/">
          <h1>Narries</h1>
        </a>
        <h2>– Todo List App</h2>
      </div>
    </div>
  );
}
