import { FaEye, FaProjectDiagram, FaEnvelope, FaGithub, FaChevronDown } from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            <motion.span className="hello" variants={itemVariants}>Hello World,</motion.span>
            <motion.span className="name" variants={itemVariants}>Je suis Georges BIRANGOU</motion.span>
            <motion.span className="role" variants={itemVariants}>Ingénieur Data & IA</motion.span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Turning complex data into actionable insights using advanced AI & Deep Learning.
          </motion.p>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="/Portfolio/Georges BIRANGOU.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(249, 115, 22, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEye /> Voir mon CV
            </motion.a>
            <motion.button
              className="btn btn-secondary"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaProjectDiagram /> Mes projets
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope /> Me contacter
            </motion.button>
          </motion.div>
          <motion.p className="availability-message" variants={itemVariants}>
            Disponible pour un stage PFE (Janvier 2026)
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        className="scroll-indicator"
        onClick={() => scrollToSection('about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.2 }}
      >
        <FaChevronDown />
      </motion.div>
    </section>
  )
}

export default Home
