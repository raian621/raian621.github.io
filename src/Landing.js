import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Box from "./components/Box";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-socials">
        <FaGithubSquare size="2em" />
        <FaLinkedin size="2em" />
        <FaTwitterSquare size="2em" />
      </div>
      <hr/>
      <h1 className="landing-name">Ryan Bell</h1>
      <hr/>
      <div className="landing-links">
        <Link to="/aboutme">about</Link>
        <Box width="2px" height="1.5em" margin="0 12px"/>
        <a href="#">projects</a>
        <Box width="2px" height="1.5em" margin="0 12px"/>
        <a href="#">contact</a>
      </div>
    </div>
  )
}

export default Landing;