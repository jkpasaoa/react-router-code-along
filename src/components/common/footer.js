import NewsLetter from "../pages/newsletter";
import {Link} from "react-router-dom"

export default function Footer() {
  const year = new Date().getFullYear()
    return (
      <footer>
        <p>I Love Light. All Rights Reserved {year}</p>
        <ul>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/newsletter" >NewsLetter</Link>
          </li>
        </ul>
      </footer>
    );
  };
  
