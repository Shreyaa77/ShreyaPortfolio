import "../App.css"
function Skills() {

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

{/*Skills*/}
<section id='Skills' className='section Skills'>
  <h2 className='bold'>Skills</h2>
  <p></p>
</section>

<footer className="footer"> {/* Footer section */}
        <p>&copy; {new Date().getFullYear()} Shreya Shinde. All Rights Reserved.</p> {/* Dynamic copyright year */}
      </footer> 

    </>
  )
}

export default Skills