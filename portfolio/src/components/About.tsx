import Header from "./Header"
import '../assets/css/main.css'
import profile from '../assets/img/profile-img.jpeg';
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Header/>
      <main className="main">
      
        <section id="about" className="about section">
          
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>Software Engineer with a passion for innovation, problem-solving, and developing scalable web applications.</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <img src={profile} className="img-fluid" alt="Profile" />
              </div>
              <div className="col-lg-8 content">
                <h2>Full Stack Web Developer</h2>
                <p className="fst-italic py-3">
                  Experienced in building and maintaining web applications using modern frameworks like Laravel and Ruby on Rails, with expertise in front-end technologies like React.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Karthik Eswaran </span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>6369699163</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Location:</strong> <span>Tirupur, Tamil Nadu</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>shifukarthik05@gmail.com</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Tech in Information Technology</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Graduation Year:</strong> <span>2024</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Date Of Birth:</strong> <span>Aug 05 2002</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                    </ul>
                  </div>
                </div>
                <p className="py-3">
                  With hands-on experience developing ERP solutions in Laravel and optimizing database queries in Ruby on Rails, I am committed to writing clean, efficient, and scalable code. 
                  I thrive in collaborative environments, continuously learning and implementing the latest technologies to solve complex challenges.
                </p>
              </div>
            </div>

          </div>

        </section>

        <section id="skills" className="skills section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <p>Proficient in full-stack web development, with a strong focus on back-end architecture and front-end interactivity.</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row skills-content skills-animation">

              <div className="col-lg-6">

                <div className="progress">
                  <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                  <div className="progress-bar-wrap">
                  </div>
                </div>

                <div className="progress">
                  <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                  </div>
                </div>

                <div className="progress">
                  <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                  <div className="progress-bar-wrap">
                  </div>
                </div>

              </div>

              <div className="col-lg-6">

                <div className="progress">
                  <span className="skill"><span>PHP</span> <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                  </div>
                </div>

                <div className="progress">
                  <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                  </div>
                </div>

                <div className="progress">
                  <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
                  <div className="progress-bar-wrap">
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>
        
        <section id="stats" className="stats section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Facts</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Workers</p>
                </div>
              </div>

            </div>

          </div>

        </section>

      </main>
      <Footer/>
    </>
   
  )
}

export default About
