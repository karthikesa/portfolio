import { useState } from "react";
import Header from "./Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    error: '',
    success: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: '' });

    // Simulating form submission
    setTimeout(() => {
      // Normally, here you would make an API call to submit the form data
      setStatus({ loading: false, error: '', success: 'Your message has been sent. Thank you!' });
    }, 2000);
  };
  return (
    <>
      <Header/>
      <div className="main">

        <div id="contact" className="contact section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">

              <div className="col-lg-5">

                <div className="info-wrap">
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3>Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>

                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>

                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-lg-7">
                <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <label htmlFor="name-field" className="pb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name-field"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email-field" className="pb-2">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email-field"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="subject-field" className="pb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        id="subject-field"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="message-field" className="pb-2">Message</label>
                      <textarea
                        name="message"
                        id="message-field"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      {status.loading && <div className="loading">Loading</div>}
                      {status.error && <div className="error-message">{status.error}</div>}
                      {status.success && <div className="sent-message">{status.success}</div>}

                      <button type="submit" disabled={status.loading}>Send Message</button>
                    </div>
                  </div>
                </form>
              </div>

            </div>

          </div>

        </div>

      </div>

    </>

  )
}

export default Contact
