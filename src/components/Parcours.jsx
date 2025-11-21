import { FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa'
import './Parcours.css'

const Parcours = () => {
  const formations = [
    {
      id: 1,
      periode: '2021 - 2026',
      statut: 'En cours',
      titre: 'Ingénieur en Big Data et IA',
      etablissement: 'EIGSI - École d\'Ingénieurs en Génie des Systèmes Industriels',
      lieu: 'Casablanca, Maroc'
    },
    {
      id: 2,
      periode: '2020 - 2021',
      titre: 'Baccalauréat Scientifique - Série D - Math & SVT',
      etablissement: 'Lycée',
      lieu: 'Libreville, Gabon'
    }
  ]

  const experiences = [
    {
      id: 1,
      periode: '23/06/2025 - 12/09/2025',
      titre: 'STAGE DEVELOPPEMENT MOBILE & ANALYTICS',
      entreprise: 'Chambre de Commerce de Casablanca-Settat',
      description: 'Mission : Développement d\'une application mobile de gestion et suivi des livres avec tableau de bord interactif pour la bibliothèque de la Chambre.'
    },
    {
      id: 2,
      periode: '01/07/2024 - 05/08/2024',
      titre: 'STAGE DEVELOPPEMENT WEB',
      entreprise: 'Texefa SARL',
      description: 'Mission : Réalisation d\'un site web d\'organisation de conférences internationales en télétravail.'
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

        {/* Formation */}
        <div className="parcours-section">
          <div className="parcours-header">
            <FaGraduationCap className="parcours-icon" />
            <h3>Formation</h3>
          </div>
          <div className="timeline">
            {formations.map((formation) => (
              <div key={formation.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-periode">{formation.periode}</span>
                    {formation.statut && (
                      <span className="timeline-statut">{formation.statut}</span>
                    )}
                  </div>
                  <h4 className="timeline-titre">{formation.titre}</h4>
                  <p className="timeline-etablissement">{formation.etablissement}</p>
                  <p className="timeline-lieu">{formation.lieu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expériences */}
        <div className="parcours-section">
          <div className="parcours-header">
            <FaBriefcase className="parcours-icon" />
            <h3>Expériences</h3>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <div key={experience.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-periode">{experience.periode}</span>
                  </div>
                  <h4 className="timeline-titre">{experience.titre}</h4>
                  <p className="timeline-etablissement">{experience.entreprise}</p>
                  <p className="timeline-description">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="parcours-section">
          <div className="parcours-header">
            <FaCertificate className="parcours-icon" />
            <h3>Certifications</h3>
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
