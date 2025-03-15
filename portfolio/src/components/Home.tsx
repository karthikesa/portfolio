import '../assets/css/main.css'
import Header from './Header'
import heroImage from '../assets/img/hero-bg.png';
import { Link } from 'react-router-dom'; 
import Footer from './Footer';
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
      <Footer/>
     
    </>
  )
}

export default Home
