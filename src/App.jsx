<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import NavBar from './Components/NavBar.jsx';
import Show from './Components/Show.jsx';
import SearchBar from './Components/SearchBar';
import './App.css';
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import NavBar from "./Components/NavBar.jsx";
import Show from "./Components/Show.jsx";
import SearchBar from "./Components/SearchBar";

import "./App.css";
>>>>>>> 59f0038e0f9f1329788ac1071c8d17c2706735cd

function App() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
<<<<<<< HEAD

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home apiUrl={apiUrl} apiKey={apiKey} />} />
          <Route path='/SearchBar' element={<SearchBar />} />
          <Route path='/about' element={<About />} />
          <Route
            path='/videos/:id'
            element={<Show apiUrl={apiUrl} apiKey={apiKey} />}
          />
        </Routes>
      </Router>
    </div>
  );
=======
>>>>>>> 59f0038e0f9f1329788ac1071c8d17c2706735cd

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/SearchBar"
            element={<SearchBar apiUrl={apiUrl} apiKey={apiKey} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/videos/:id"
            element={<Show apiUrl={apiUrl} apiKey={apiKey} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
