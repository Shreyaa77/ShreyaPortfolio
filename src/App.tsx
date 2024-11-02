
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/navbar";
import About from "./Components/About";
import Skills from "./Components/Skill";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Home from "./Components/Home";


function App() {
  return (<>
<Navbar></Navbar>
    <Router>
      <Routes>
        <Route path="/ShreyaPortfolio/" element={<Home />} />
        <Route path="/ShreyaPortfolio/about" element={<About />} />
        <Route path="/ShreyaPortfolio/skills" element={<Skills />} />
        <Route path="/ShreyaPortfolio/contact" element={<Contact />} />
        <Route path="/ShreyaPortfolio/blog" element={<Blog/>} />
      </Routes>
    </Router>
    </>
  )

}

export default App;
