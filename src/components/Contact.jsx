import { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
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
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <div className="contact-layout">
          {/* Colonne gauche - Boutons de contact */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-section-title">Informations de contact</h3>
            <motion.div
              className="contact-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ x: 10 }}
            >
              <FaMapMarkerAlt />
              <div>
                <h4>Localisation</h4>
                <span>Maroc, Casablanca</span>
              </div>
            </motion.div>
            <motion.div
              className="contact-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ x: 10 }}
            >
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
            </motion.div>
            <motion.div
              className="contact-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ x: 10 }}
            >
              <FaPhone />
              <div>
                <h4>Téléphone</h4>
                <a href="tel:+212709274190">+212 709 274 190</a>
              </div>
            </motion.div>

            <h3 className="contact-section-title" style={{ marginTop: '2rem' }}>Mes liens</h3>
            <motion.div
              className="social-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/georges-birangou-09ab50356"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/gegegithub"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
            </motion.div>

            <motion.div
              className="qr-code-section"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="qr-label">Partagez mon portfolio</p>
              <img src="qrcodefolio.png" alt="QR Code Portfolio" className="qr-code" />
            </motion.div>
          </motion.div>

          {/* Colonne droite - Formulaire */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="form-hint">N'hésitez pas à m'écrire ici</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
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
              </motion.div>
              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
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
              </motion.div>
              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
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
              </motion.div>

              {status === 'success' && (
                <motion.div
                  className="form-status success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  ✓ Message envoyé ! Je vous répondrai rapidement !
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  className="form-status error"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  ✗ Erreur lors de l'envoi. Veuillez réessayer.
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="btn-submit"
                disabled={sending}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <FaEnvelope /> {sending ? 'Envoi en cours...' : 'Envoyer'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
