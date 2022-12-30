import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Contact from './Contact';
import NavBar from './components/NavBar';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <NavBar pages={[
        {
          name: "Home",
          path: "/",
          current: true
        },
        {
          name: "Projects",
          path: "projects",
          current: false
        },
        {
          name: "Contact",
          path: "contact",
          current: false
        },
      ]}/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
