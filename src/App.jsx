
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import NavBar from "./Components/NavBar.jsx";
import Show from "./Components/Show.jsx";
import "./App.css";

function App() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home apiUrl={apiUrl} apiKey={apiKey} />} />
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
