import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer light-background">
        <div className="container">
          <div className="copyright text-center ">
          </div>
          <div className="social-links d-flex justify-content-center">
            <a href=""><FaLinkedin /></a>
            <a href=""><SiLeetcode /></a>
            <a href=""><FaSquareInstagram /></a>
            <a href=""><RiWhatsappFill /></a>
          </div>
        </div>

      </footer>    
    </div>
  )
}

export default Footer
