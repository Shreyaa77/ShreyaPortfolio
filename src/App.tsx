
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./Components/About";
import Skills from "./Components/Skill";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Home from "./Components/Home";


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </Router>

  )

}

export default App;
