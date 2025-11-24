import { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus('')

    try {
      const serviceId = 'service_xlqzp6k'
      const templateId = 'template_c9kjphm'
      const publicKey = 'GRb6W-xzpn57DuJmj'

      const templateParams = {
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setStatus('success')
      setFormData({ email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setStatus('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-layout">
          {/* Colonne gauche - Boutons de contact */}
          <div className="contact-info">
            <h3 className="contact-section-title">Informations de contact</h3>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <div>
                <h4>Localisation</h4>
                <span>Maroc, Casablanca</span>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=Ge.birangou.26@eigsica.ma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ge.birangou.26@eigsica.ma
                </a>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone />
              <div>
                <h4>Téléphone</h4>
                <a href="tel:+212709274190">+212 709 274 190</a>
              </div>
            </div>

            <h3 className="contact-section-title" style={{ marginTop: '2rem' }}>Mes liens</h3>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/georges-birangou-09ab50356"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/gegegithub"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
            </div>

            <div className="qr-code-section">
              <p className="qr-label">Partagez mon portfolio</p>
              <img src="qrcodefolio.png" alt="QR Code Portfolio" className="qr-code" />
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <div className="contact-form-wrapper">
            <p className="form-hint">N'hésitez pas à m'écrire ici</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Votre Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Objet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Sujet de votre message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="form-status success">
                  ✓ Message envoyé ! Je vous répondrai rapidement !
                </div>
              )}

              {status === 'error' && (
                <div className="form-status error">
                  ✗ Erreur lors de l'envoi. Veuillez réessayer.
                </div>
              )}

              <button type="submit" className="btn-submit" disabled={sending}>
                <FaEnvelope /> {sending ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
