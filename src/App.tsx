
import {  Routes, Route, BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App;
