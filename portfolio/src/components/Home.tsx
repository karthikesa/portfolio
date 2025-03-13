import '../assets/css/main.css'
import Header from './Header'
import heroImage from '../assets/img/hero-bg.png';
import { Link } from 'react-router-dom'; 
const Home = () => {
  return (
    <>
    <Header/>
      <div className="main">
        <div id="hero" className="hero section">
        <img src={heroImage} alt="Hero background image" data-aos="fade-in" />


            <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2>Karthik Eswaran</h2>
                  <p style={{ color: ''}}>I'm a Full Stack Developer, passionate about building scalable applications.</p>
                  <Link to="/about" className="btn-get-started">About Me</Link> 
                  </div>
              </div>
            </div>
        </div>
      </div>
      <footer id="footer" className="footer light-background">

        <div className="container">
          <div className="copyright text-center ">
          </div>
          <div className="social-links d-flex justify-content-center">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
          <div className="credits">
         
          </div>
        </div>

      </footer>
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </>
  )
}

export default Home
