import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Box from "./components/Box";
import { useState } from "react";

const Landing = () => {
  const [aboutMeActive, setAboutMeActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const toggleAboutMe = () => {
    setAboutMeActive(!aboutMeActive);
  }
  const toggleProjects = () => {
    setProjectsActive(!projectsActive);
  }
  const toggleContact = () => {
    setContactActive(!contactActive);
  }

  return (
    <div className="landing">
      <div className="landing-socials">
        <a href="https://github.com/raian621"><FaGithubSquare size="2em" /></a>
        <a href="https://www.linkedin.com/in/ryan-z-bell/"><FaLinkedin size="2em" /></a>
        <a href="https://twitter.com/ryanbell621"><FaTwitterSquare size="2em" /></a>
      </div>
      <hr/>
      <h1 className="landing-name">Ryan Bell</h1>
      <hr/>
      <div className="landing-buttons">
        <button className="landing-button" onClick={toggleAboutMe}>about me</button>
        <Box width="2px" height="1.5em" margin="0 12px"/>
        <button className="landing-button" onClick={toggleProjects}>projects</button>
        <Box width="2px" height="1.5em" margin="0 12px"/>
        <button className="landing-button" onClick={toggleContact}>contact</button>
      </div>
      <AboutMe toggleActive={toggleAboutMe} active={aboutMeActive}/>
      <Projects toggleActive={toggleProjects} active={projectsActive}/>
      <Contact toggleActive={toggleContact} active={contactActive}/>
    </div>
  )
}

export default Landing;