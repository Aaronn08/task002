import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Temperature from "./pages/Temperature";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2>Smart Home Company</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/temperature">Temperature</Link></li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/temperature" element={<Temperature />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
