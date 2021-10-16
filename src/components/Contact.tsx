import { animate } from "../utils";

interface contactProps {
  route: (name: string) => void;
  screen: string;
}

export default function Contact(props: contactProps) {
  return (
    <div className="contactContainer">
      <h1 className={animate("fadeInUp", 0)}>Hello.</h1>
      <div className="infoContainer">
        <p>Just keeping this Simple.</p>
        <p>
          Email:{" "}
          <a href="mailto:kunalinbox83@gmail.com">kunalinbox83@gmail.com</a>
        </p>
        <p>
          On the Internet :
          <a href="https://www.linkedin.com/in/kunalkumar007/">Linkedin</a> /{" "}
          <a href="https://www.github.com/kunalkumar007/">Github</a> /{" "}
          <a href="https://www.instagram.com/kunal.developer/">Instagram</a>
        </p>
      </div>
    </div>
  );
}
