import "../App.css"
import Navbar from "./navbar"
function Skills() {

  return (
    <>
<Navbar/>

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