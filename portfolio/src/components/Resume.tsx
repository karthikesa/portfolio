import Footer from './Footer'
import Header from './Header'

import resumePDF from '../assets/resume/Resume.pdf'

const Resume = () => {
  return (
    <>
      <Header/>
      <div className="main">
   
        <section id="resume" className="resume section">
        <div className=' d-flex justify-content-end me-3'>
          <a href={resumePDF} download="Karthik_E_Resume.pdf" className="btn btn-primary rounded-pill">
            Download Resume
          </a>
        </div>

          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>Software Engineering Graduate with a strong foundation in web development, problem-solving, and full-stack application development. Experienced in working with Laravel, Ruby on Rails, and front-end technologies to build scalable and efficient solutions.</p>
          </div>

          <div className="container">

            <div className="row">

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Summary</h3>

                <div className="resume-item pb-0">
                  <p><em>Passionate Software Engineer with experience in Laravel and Ruby on Rails, specializing in web application development, database management, and system optimization. Proven ability to collaborate with teams, write clean and efficient code, and continuously learn emerging technologies.</em></p>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Bachelor of Technology in Information Technology</h4>
                  <h5>2020 - 2024</h5>
                  <p><em>Rathinam Technical Campus | Anna University</em></p>
                  <p>Graduated with an 8.41 CGPA.</p>
                </div>

                <div className="resume-item">
                  <h4>Higher Secondary Education</h4>
                  <h5>2018 - 2020</h5>
                  <p><em>Bishop Ubagaraswamy Hr. Sec. School | Tirupur</em></p>
                  <p>Completed Higher Secondary with a specialization in Computer Science, securing 75.8%.</p>
                </div>

                <div className="resume-item">
                  <h4>Secondary School Leaving Certificate</h4>
                  <h5>2016 - 2018</h5>
                  <p><em>Perumanallur Govt. Hr. Sec. School | Tirupur</em></p>
                  <p>Completed SSLC with 81.6%.</p>
                </div>

                <h3 className="resume-title">Technical Skills</h3>
                <div className="resume-item">
                  <ul>
                    <li><strong>Languages:</strong> JavaScript, PHP, Ruby, Java</li>
                    <li><strong>Frontend Technologies:</strong> HTML, CSS, React, Bootstrap, Tailwind CSS</li>
                    <li><strong>Backend Frameworks:</strong> Laravel, Ruby on Rails</li>
                    <li><strong>Databases:</strong> MySQL, PostgreSQL</li>
                    <li><strong>Version Control:</strong> Git, GitHub</li>
                    <li><strong>Development Tools:</strong> Docker, Postman</li>
                    <li><strong>Soft Skills:</strong> Problem-solving, Teamwork, Communication, Leadership</li>
                  </ul>
                </div>

                <h3 className="resume-title">Certifications</h3>
                <div className="resume-item">
                  <ul>
                    <li>AR / VR – Naan Mudhalvan</li>
                    <li>Web Development Certification – Udemy</li>
                    <li>Database Management System Paper Presentation</li>
                    <li>State and National Gold Medalist in Taekwondo</li>
                  </ul>
                </div>

              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <h3 className="resume-title">Professional Experience</h3>

                <div className="resume-item">
                  <h4>Associate Software Engineer</h4>
                  <h5>2024 - 2025 Present</h5>
                  <p><em>Hash Agile Technology, Coimbatore</em></p>
                  <ul>
                    <li>Developing and maintaining web applications using Ruby on Rails.</li>
                    <li>Collaborating with cross-functional teams for feature development.</li>
                    <li>Performing unit testing and optimizing database queries.</li>
                    <li>Contributing to Agile workflows and code reviews.</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Laravel Developer</h4>
                  <h5>2023 - 2024</h5>
                  <p><em>Cheran Software, Tiruppur</em></p>
                  <ul>
                    <li>Developed ERP software using Laravel for business process automation.</li>
                    <li>Implemented robust features and optimized system performance.</li>
                    <li>Ensured seamless user experience through UI/UX enhancements.</li>
                    <li>Worked with cross-functional teams to meet project deadlines.</li>
                  </ul>
                </div>

                <h3 className="resume-title">Projects</h3>

                <div className="resume-item">
                  <h4>Advanced Blogging System</h4>
                  <p><em>Laravel, PHP, MySQL, HTML, CSS</em></p>
                  <ul>
                    <li>Developed a feature-rich blogging platform with user authentication, post management, and comment system.</li>
                    <li>Implemented an admin dashboard for user and content moderation.</li>
                    <li>Designed a category and tagging system for organized content filtering.</li>
                    <li>Integrated a media upload feature to allow users to include images in their posts.</li>
                    <li>Ensured high performance using database indexing and caching mechanisms.</li>
                    <li>Enhanced security with CSRF protection, authentication, and role-based access control.</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Car Rental System</h4>
                  <p><em>Laravel, PHP, MySQL</em></p>
                  <ul>
                    <li>Developed a dynamic car rental web application with booking and payment functionality.</li>
                    <li>Implemented a real-time availability checker to prevent double bookings.</li>
                    <li>Designed an admin dashboard for managing cars, bookings, and customer transactions.</li>
                    <li>Integrated third-party payment gateways (PayPal, Stripe) for secure transactions.</li>
                    <li>Implemented automated invoice generation and email notifications for customers.</li>
                    <li>Used Google Maps API for location-based car pickup and drop-off points.</li>
                  </ul>
                </div>

              </div>

            </div>

          </div>

        </section>
      </div>
      <Footer/>
    </>
  )
}

export default Resume
