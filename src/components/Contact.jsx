import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <a href="mailto:Ge.birangou.26@eigsica.ma">Ge.birangou.26@eigsica.ma</a>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone />
              <div>
                <h4>Téléphone</h4>
                <a href="tel:+212709274190">+212 709 274 190</a>
              </div>
            </div>
            <div className="contact-item">
              <FaLinkedin />
              <div>
                <h4>LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/gegegithub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Georges Birangou
                </a>
              </div>
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/gegegithub"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/georges-birangou"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
