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
          Email: <a href="/">kunalinbox83@gmail.com</a>
        </p>
        <p>
          On the Internet :<a href="/">Linkedin</a> / <a href="/">Linkedin</a> /
          <a href="/">Linkedin</a>
        </p>
      </div>
    </div>
  );
}
