import "../Components/Blog.css";
import Footer from "./footer";
import Navbar from "./navbar";
function Blog() {
  return (
    <>
      <Navbar />

      <section id="Blog" className="blog-body">
        <h2 className="blog">Blog</h2>
        <div>
          <p>
            <img
              className="img1"
              src="/public/images/Business type Headshot.jpg"
            ></img>
          </p>
          <p className="story text-center pt-20">
            Hello My name is Shreya. Nice to meet you.
          </p>
        </div>

        <div>
          <p>
            <img
              className="img2"
              src="/public/images/Aesthetic Photo.jpg"
            ></img>
          </p>
          <p className="story2 text-center pt-20">
            I took this photo at night. The moon was looking very beautiful and
            huge so I inspired me to get a click of it. I wanted to capture the
            largeness of the moon in the night sky. The beautiful lonely streets
            at night gives a feeling of longing to me for some reason. The
            street lights along with the moon and the car headlights gives a
            perfect aesthetic shot. To capture the moon especially I turned down
            the light in my camera settings completely low. This made the
            moonlight, the streetlight and the car headlights pop out. Giving
            this beautiful aesthetic shot.
          </p>
        </div>

        <div>
          <p>
            <img
              className="img3"
              src="/public/images/Photo showing passion.jpg"
            ></img>
          </p>
          <p className="story3 text-center pt-20">
            In this photo I wanted to show my love for reading. I love reading
            books so I thought what better way to convey that than this picture.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;