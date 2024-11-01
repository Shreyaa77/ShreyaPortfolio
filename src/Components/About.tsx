
import "../App.css"
function About() {

  return (
    <>

<header className="header">
     <nav className="navbar">
     <div className="logo-container">

      </div> 
      
      <ul className='nav-links'>
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/skills">Skills</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
      
    </ul>
    </nav>
    </header>

{/*About*/}
<section id='About' className='section About'>
  <h2 className='bold'>About</h2>
  <p>Hello I'm a International Masters student at the University of limerick.</p>
</section>

<footer className="footer"> {/* Footer section */}
        <p>&copy; {new Date().getFullYear()} Shreya Shinde. All Rights Reserved.</p> {/* Dynamic copyright year */}
      </footer> 

    </>
  )
}

export default About
