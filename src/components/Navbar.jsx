import { useState } from 'react'
import './Navbar.css'

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">GB</div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('home')
              }}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="#parcours"
              className={`nav-link ${activeSection === 'parcours' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('parcours')
              }}
            >
              Parcours
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
