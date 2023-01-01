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
        <a href="https://github.com/raian621"><FaGithubSquare color="#161b22" size="2em"/></a>
        <a href="https://www.linkedin.com/in/ryan-z-bell/"><FaLinkedin color="#0a66c2" size="2em" /></a>
        <a href="https://twitter.com/ryanbell621"><FaTwitterSquare color="#1d9bf0" size="2em" /></a>
      </div>
      <Box width="100%" height="2px" color="#C9ADA7"/>
      <div className="landing-description">
        <h1 className="landing-name">Ryan Bell</h1>
        <p className="landing-text">Adipisicing commodo elit aliquip adipisicing sunt consectetur ullamco sint do et Lorem exercitation deserunt. Veniam duis amet dolore duis qui. Ullamco ullamco do aliqua anim fugiat voluptate sint est labore magna fugiat. Ea occaecat aute excepteur magna veniam ullamco ea anim nostrud sunt aliquip Lorem.</p>
      </div>
      <Box width="100%" height="2px" color="#C9ADA7"/>
      <div className="landing-buttons">
        <button className="landing-button" onClick={toggleAboutMe}>about me</button>
        <Box width="2px" height="1.5em" margin="auto 12px" color="#C9ADA7"/>
        <button className="landing-button" onClick={toggleProjects}>projects</button>
        <Box width="2px" height="1.5em" margin="auto 12px" color="#C9ADA7"/>
        <button className="landing-button" onClick={toggleContact}>contact</button>
      </div>
      <AboutMe toggleActive={toggleAboutMe} active={aboutMeActive}/>
      <Projects toggleActive={toggleProjects} active={projectsActive}/>
      <Contact toggleActive={toggleContact} active={contactActive}/>
    </div>
  )
}

export default Landing;