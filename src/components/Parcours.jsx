import { FaGraduationCap, FaBriefcase, FaCertificate, FaMapMarkerAlt, FaCalendar, FaCheckCircle, FaMobileAlt, FaLaptopCode } from 'react-icons/fa'
import './Parcours.css'

const Parcours = () => {
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
      periode: 'Été 2025',
      titre: 'Stage Développement Mobile & Analytics',
      entreprise: 'Chambre de Commerce de Casablanca-Settat',
      lieu: 'Casablanca, Maroc',
      description: 'Réalisation d\'une application mobile pour la gestion documentaire de l\'institution'
    },
    {
      id: 2,
      periode: 'Été 2024',
      titre: 'Stage Développement Web',
      entreprise: 'Texefa SARL',
      lieu: 'Télétravail',
      description: 'Réalisation d\'un site web d\'organisation de conférences internationales'
    }
  ]

  const certifications = [
    {
      id: 1,
      titre: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      annee: '2025'
    },
    {
      id: 2,
      titre: 'Oracle Cloud Infrastructure Data Science Professional',
      annee: '2025'
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

                  {exp.realisations && (
                    <div className="experience-tasks">
                      {exp.realisations.map((real, idx) => (
                        <div key={idx} className="task-item">
                          <FaCheckCircle />
                          <span>{real}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="timeline-dot">
                  {exp.id === 1 ? <FaMobileAlt /> : <FaLaptopCode />}
                </div>
              </div>
            ))}
          </div>
        </div>

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
