import { FaEye, FaProjectDiagram, FaChevronDown } from 'react-icons/fa'
import { useEffect, useRef, Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Html } from '@react-three/drei'
import './Home.css'

// Loader 3D pendant le chargement
const Loader3D = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + 10
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const circumference = 2 * Math.PI * 45 // rayon = 45
  const offset = circumference - (progress / 100) * circumference

  return (
    <Html center>
      <div className="loader-3d">
        <svg className="circular-progress" width="120" height="120">
          <circle
            className="progress-background"
            cx="60"
            cy="60"
            r="45"
          />
          <circle
            className="progress-bar"
            cx="60"
            cy="60"
            r="45"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="loader-percentage">{progress}%</div>
      </div>
    </Html>
  )
}

// Composant pour charger le modèle 3D
const GamingPC = () => {
  const { scene } = useGLTF('/Portfolio/3dmodel/personal_computer.glb')
  const modelRef = useRef()

  // Rotation automatique lente
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002 // Vitesse de rotation (plus petit = plus lent)
    }
  })

  // scale: contrôle la taille (plus petit = plus petit modèle)
  // position: [gauche/droite (X), haut/bas (Y), avant/arrière (Z)]
  // rotation initiale: [0°, -110°, 0°] convertie en radians
  const rotationInRadians = [0, -110, 0].map(deg => (deg * Math.PI) / 180)
  return <primitive ref={modelRef} object={scene} scale={6} position={[5, -11, -3]} rotation={rotationInRadians} />
}

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
      {/* Lignes ondulées */}
      <div className="wavy-line-left"></div>
      <div className="wavy-line-right"></div>

      {/* Modèle 3D en arrière-plan */}
      <div className="hero-3d-container">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Suspense fallback={<Loader3D />}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1} />
            <pointLight position={[-8, 3, -5]} intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.6} />
            <GamingPC />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              target={[5, -8.5, -3]}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Contenu texte en arrière-plan (à gauche) */}
      <div className="hero-text-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            <motion.span className="hello" variants={itemVariants}>Hello World,</motion.span>
            <motion.span className="name" variants={itemVariants}>Je suis Georges BIRANGOU</motion.span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Je transforme des données complexes en informations exploitables grâce au Machine Learning et au Deep Learning.
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
