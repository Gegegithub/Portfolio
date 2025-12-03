import { useState } from 'react'
import { FaGraduationCap, FaBriefcase, FaCertificate, FaMapMarkerAlt, FaCalendar, FaCheckCircle, FaMobileAlt, FaLaptopCode, FaTimes, FaExternalLinkAlt } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import './Parcours.css'

const Parcours = () => {
  const [selectedExperience, setSelectedExperience] = useState(null)

  const formations = [
    {
      id: 1,
      periodeDetail: 'Septembre 2021 - Présent',
      titre: 'Diplôme d\'Ingénieur en Data Science, Big Data et IA',
      etablissement: 'EIGSI Casablanca',
      lieu: 'Casablanca, Maroc',
      description: 'Formation d\'ingénieur en Data Science, Big Data et Intelligence Artificielle, couvrant les aspects théoriques et pratiques des technologies avancées.',
      modules: [
        'Machine Learning & Deep Learning',
        'Big Data & Cloud Computing',
        'Intelligence Artificielle & Traitement du Langage Naturel',
        'Computer Vision & Image/Video Processing'
      ],
      statut: 'En cours'
    },
    {
      id: 2,
      periodeDetail: 'Octobre 2020 - Juin 2021',
      titre: 'Baccalauréat Scientifique - Série D (Math & SVT)',
      etablissement: 'Lycée Calasanz',
      lieu: 'Libreville, Gabon',
      description: 'Baccalauréat scientifique option Mathématiques et Sciences de la Vie et de la Terre.'
    }
  ]

  const experiences = [
    {
      id: 1,
      periode: '23 Juin - 12 septembre 2025',
      titre: 'Stage Développement Mobile & Analytics',
      entreprise: 'Chambre de Commerce de Casablanca-Settat',
      lieu: 'Casablanca, Maroc',
      description: 'Réalisation d\'une application mobile pour la gestion documentaire de l\'institution',
      descriptionComplete: 'Durant ce stage à la Chambre de Commerce de Casablanca-Settat, j\'ai développé une application mobile complète de gestion documentaire permettant aux employés d\'accéder et de gérer efficacement les documents de l\'institution.',
      realisations: [
        'Développement d\'une application mobile cross-platform avec React Native',
        'Mise en place d\'un système d\'authentification sécurisé',
        'Implémentation d\'un système de gestion et de visualisation de documents',
        'Intégration avec une base de données backend pour la synchronisation',
        'Design d\'une interface utilisateur intuitive et responsive'
      ],
      technologies: ['React Native', 'Supabase', 'TypeScript', 'API REST'],
      images: [
        '/Portfolio/cciscs/image.png',
        '/Portfolio/cciscs/IMG_0295.JPG',
        '/Portfolio/cciscs/IMG_0306.JPG',
        '/Portfolio/cciscs/IMG_0338.JPG'
      ]
    },
    {
      id: 2,
      periode: '1 aout - 5 septembre 2024',
      titre: 'Stage Développement Web',
      entreprise: 'Texefa SARL',
      lieu: 'Télétravail',
      description: 'Réalisation d\'un site web d\'organisation de conférences internationales',
      descriptionComplete: 'Pendant ce stage en télétravail chez Texefa SARL, j\'ai conçu et développé un site web complet pour l\'organisation de conférences internationales, permettant la gestion des inscriptions, des programmes et de la communication avec les participants.',
      realisations: [
        'Développement d\'un site web responsive avec Django',
        'Création d\'un système d\'inscription et de gestion des participants',
        'Mise en place d\'un espace d\'administration pour les organisateurs',
        'Intégration d\'un système de paiement en ligne',
        'Design moderne et professionnel adapté aux événements internationaux'
      ],
      technologies: ['Django', 'Python', 'PostgreSQL', 'HTML/CSS', 'Bootstrap'],
      images: [
        '/Portfolio/texefa/Image1.png',
        '/Portfolio/texefa/Image2.png',
        '/Portfolio/texefa/Image3.png'
      ]
    }
  ]

  const openModal = (experience) => {
    setSelectedExperience(experience)
  }

  const closeModal = () => {
    setSelectedExperience(null)
  }

  const certifications = [
    {
      id: 1,
      titre: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      annee: '2025',
      lien: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=B4B229857066E30AB9CE0FD3B085663CE2E43F15490D7D5303F00256C178A9F7'
    },
    {
      id: 2,
      titre: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
      annee: '2025',
      lien: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=8AC1757450096840202B44FF742EB543DB532953AFE7F8B626B2A09D62878A80'
    }
  ]

  return (
    <section id="parcours" className="parcours">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Parcours
        </motion.h2>

        {/* FORMATIONS */}
        <div className="parcours-category">
          <motion.div
            className="category-title-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaGraduationCap className="category-icon" />
            <h3 className="category-title">Mon Parcours Académique</h3>
          </motion.div>

          <div className="academic-timeline">
            {formations.map((formation, index) => (
              <motion.div
                key={formation.id}
                className="academic-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="academic-date">
                  <div className="date-circle">
                    <FaCalendar />
                  </div>
                  <div className="date-text">
                    <span className="date-main">{formation.periodeDetail}</span>
                  </div>
                </div>

                <div className="academic-content">
                  <div className="academic-header">
                    <h4 className="academic-title">{formation.titre}</h4>
                    {formation.statut && (
                      <span className="status-badge">{formation.statut}</span>
                    )}
                  </div>

                  <div className="academic-school">
                    <FaGraduationCap />
                    <span>{formation.etablissement}</span>
                  </div>

                  <div className="academic-location">
                    <FaMapMarkerAlt />
                    <span>{formation.lieu}</span>
                  </div>

                  <p className="academic-description">{formation.description}</p>

                  {formation.modules && (
                    <div className="academic-modules">
                      {formation.modules.map((module, idx) => (
                        <div key={idx} className="module-item">
                          <FaCheckCircle />
                          <span>{module}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EXPÉRIENCES PROFESSIONNELLES */}
        <div className="parcours-category">
          <motion.div
            className="category-title-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaBriefcase className="category-icon" />
            <h3 className="category-title">Expériences Professionnelles</h3>
          </motion.div>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <motion.div
                  className="experience-content"
                  whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}
                >
                  <div className="experience-year">{exp.periode}</div>
                  <h4 className="experience-title">{exp.titre}</h4>

                  <div className="experience-company">
                    <FaBriefcase />
                    <span>{exp.entreprise}</span>
                  </div>

                  <div className="experience-location">
                    <FaMapMarkerAlt />
                    <span>{exp.lieu}</span>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <motion.button
                    className="btn-details-experience"
                    onClick={() => openModal(exp)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Voir les détails
                  </motion.button>
                </motion.div>

                <div className="timeline-dot">
                  {exp.id === 1 ? <FaMobileAlt /> : <FaLaptopCode />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MODALE DÉTAILS EXPÉRIENCE */}
        <AnimatePresence>
          {selectedExperience && (
            <motion.div
              className="experience-modal-overlay"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="experience-modal-content"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <motion.button
                  className="experience-modal-close"
                  onClick={closeModal}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </motion.button>

              <div className="experience-modal-header">
                <h2>{selectedExperience.titre}</h2>
                <div className="experience-modal-meta">
                  <span className="modal-periode">{selectedExperience.periode}</span>
                  <span className="modal-entreprise">{selectedExperience.entreprise}</span>
                  <span className="modal-lieu">{selectedExperience.lieu}</span>
                </div>
              </div>

              <div className="experience-modal-body">
                <p className="modal-description-complete">{selectedExperience.descriptionComplete}</p>

                {selectedExperience.images && selectedExperience.images.length > 0 && (
                  <div className="modal-images-section">
                    <h3>Aperçu du projet</h3>
                    <div className="modal-images-grid">
                      {selectedExperience.images.map((image, idx) => (
                        <img
                          key={idx}
                          src={image}
                          alt={`${selectedExperience.titre} - ${idx + 1}`}
                          className="modal-image"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {selectedExperience.realisations && (
                  <div className="modal-realisations-section">
                    <h3>Réalisations</h3>
                    <ul className="modal-realisations-list">
                      {selectedExperience.realisations.map((real, idx) => (
                        <li key={idx}>
                          <FaCheckCircle />
                          <span>{real}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedExperience.technologies && (
                  <div className="modal-technologies-section">
                    <h3>Technologies utilisées</h3>
                    <div className="modal-tech-tags">
                      {selectedExperience.technologies.map((tech, idx) => (
                        <span key={idx} className="modal-tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>

        {/* CERTIFICATIONS */}
        <div className="certifications-section">
          <motion.div
            className="category-title-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaCertificate className="category-icon" />
            <h3 className="category-title">Certifications</h3>
          </motion.div>
          <div className="certifications-grid">
            {certifications.map((certification, index) => (
              <motion.div
                key={certification.id}
                className="certification-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="certification-icon">
                  <FaCertificate />
                </div>
                <div className="certification-content">
                  <h4>{certification.titre}</h4>
                  <span className="certification-annee">{certification.annee}</span>
                  <motion.a
                    href={certification.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-certification"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Voir la certification
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parcours
