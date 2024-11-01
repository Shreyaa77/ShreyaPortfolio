import "../Components/Contact.css"
function Contact() {

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

    {/*Contact section */}
<section id="contact" className="section contact">
<h2 className='bold'>Contact Me:</h2>
<p>Contact number: <a href="tel:+353 899828713">+353 899828713</a></p>
<p>Email: <a href="mailto:24150002@studentmail.ul.ie">24150002@studentmail.ul.ie</a></p> {/* Email link */}
<p>LinkedIn: <a href="https://www.linkedin.com/in/shreya-shinde-6005a1275/" target="_blank">https://www.linkedin.com</a></p>

</section>

<footer className="footer"> {/* Footer section */}
        <p>&copy; {new Date().getFullYear()} Shreya Shinde. All Rights Reserved.</p> {/* Dynamic copyright year */}
      </footer> 

    </>
  )
}

export default Contact