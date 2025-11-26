import { FaEye, FaProjectDiagram, FaEnvelope, FaGithub, FaChevronDown } from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import './Home.css'

const Home = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { left, top } = hero.getBoundingClientRect()
      const x = clientX - left
      const y = clientY - top

      hero.style.setProperty('--mouse-x', `${x}px`)
      hero.style.setProperty('--mouse-y', `${y}px`)
    }

    hero.addEventListener('mousemove', handleMouseMove)

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hello">Hello World,</span>
            <span className="name">Je suis Georges BIRANGOU</span>
            <span className="role">Ingénieur Data & IA</span>
          </h1>
          <p className="hero-subtitle">Turning complex data into actionable insights using advanced AI & Deep Learning.</p>
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
