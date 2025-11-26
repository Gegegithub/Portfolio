import { useState } from 'react'
import { FaGraduationCap, FaBriefcase, FaCertificate, FaMapMarkerAlt, FaCalendar, FaCheckCircle, FaMobileAlt, FaLaptopCode, FaTimes, FaExternalLinkAlt } from 'react-icons/fa'
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
        <h2 className="section-title">Parcours</h2>

        {/* FORMATIONS */}
        <div className="parcours-category">
          <div className="category-title-wrapper">
            <FaGraduationCap className="category-icon" />
            <h3 className="category-title">Mon Parcours Académique</h3>
          </div>

          <div className="academic-timeline">
            {formations.map((formation, index) => (
              <div key={formation.id} className="academic-item">
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
              </div>
            ))}
          </div>
        </div>

        {/* EXPÉRIENCES PROFESSIONNELLES */}
        <div className="parcours-category">
          <div className="category-title-wrapper">
            <FaBriefcase className="category-icon" />
            <h3 className="category-title">Expériences Professionnelles</h3>
          </div>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="experience-content">
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

                  <button
                    className="btn-details-experience"
                    onClick={() => openModal(exp)}
                  >
                    Voir les détails
                  </button>
                </div>

                <div className="timeline-dot">
                  {exp.id === 1 ? <FaMobileAlt /> : <FaLaptopCode />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MODALE DÉTAILS EXPÉRIENCE */}
        {selectedExperience && (
          <div className="experience-modal-overlay" onClick={closeModal}>
            <div className="experience-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="experience-modal-close" onClick={closeModal}>
                <FaTimes />
              </button>

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
            </div>
          </div>
        )}

        {/* CERTIFICATIONS */}
        <div className="certifications-section">
          <div className="category-title-wrapper">
            <FaCertificate className="category-icon" />
            <h3 className="category-title">Certifications</h3>
          </div>
          <div className="certifications-grid">
            {certifications.map((certification) => (
              <div key={certification.id} className="certification-card">
                <div className="certification-icon">
                  <FaCertificate />
                </div>
                <div className="certification-content">
                  <h4>{certification.titre}</h4>
                  <span className="certification-annee">{certification.annee}</span>
                  <a
                    href={certification.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-certification"
                  >
                    <FaExternalLinkAlt /> Voir la certification
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parcours
