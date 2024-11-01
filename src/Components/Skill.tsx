import "../Components/Skill.css"
import Navbar from "./navbar"
function Skills() {

  return (
    <>
<Navbar/>

{/*Skills*/}
<section id='Skills' className='skills-body'>
  <h2 className='skills'>Skills</h2>
  
  <div className="image-container">
  
  <p><img className="html" src = "/public/images/Html Logo.png"></img></p>
   
  

  <p><img className="CSS" src = "/public/images/CSS logo.webp"></img></p>
  

  
  <p><img className="Tailwind" src = "/public/images/tailwind logo.png"></img></p>
  

  
  <p><img className="Figma" src = "/public/images/figma logo.png"></img></p>
  

</div>
 


</section>


<footer className="footer"> {/* Footer section */}
        <p>&copy; {new Date().getFullYear()} Shreya Shinde. All Rights Reserved.</p> {/* Dynamic copyright year */}
      </footer> 

    </>
  )
}

export default Skills