import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
