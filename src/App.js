import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Contact from './Contact';
import Projects from './Projects';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
      </Routes>
    </div>
  );
}

export default App;
