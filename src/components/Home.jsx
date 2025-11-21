import { FaEye, FaProjectDiagram, FaEnvelope, FaGithub, FaChevronDown } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hello">Hello World,</span>
            <span className="name">Je suis Georges BIRANGOU</span>
          </h1>
          <p className="hero-subtitle">Ingénieur en IA et BIG DATA</p>
          <div className="hero-buttons">
            <a href="/Portfolio/Georges BIRANGOU.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaEye /> Voir mon CV
            </a>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('projects')}
            >
              <FaProjectDiagram /> Mes projets
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              <FaEnvelope /> Me contacter
            </button>
          </div>
          <p className="availability-message">Disponible pour un stage PFE (Janvier 2026)</p>
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <FaChevronDown />
      </div>
    </section>
  )
}

export default Home
