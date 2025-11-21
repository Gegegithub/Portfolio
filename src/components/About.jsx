import {
  FaUser,
  FaMapMarkerAlt,
  FaLanguage,
  FaBrain,
  FaDatabase,
  FaMobileAlt,
  FaCode,
  FaTools,
  FaPython,
  FaRobot,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from 'react-icons/fa'
import {
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiTypescript,
} from 'react-icons/si'
import './About.css'

const About = () => {
  const techStacks = {
    ai: [
      { icon: <FaPython />, name: 'Python' },
      { icon: <SiPytorch />, name: 'PyTorch' },
      { icon: <SiTensorflow />, name: 'TensorFlow' },
      { icon: <FaRobot />, name: 'YOLO' },
      { icon: <FaBrain />, name: 'Hugging Face' },
    ],
    data: [
      { icon: <SiPandas />, name: 'Pandas' },
      { icon: <SiNumpy />, name: 'NumPy' },
      { icon: <SiJupyter />, name: 'Jupyter' },
    ],
    database: [
      { icon: <SiPostgresql />, name: 'PostgreSQL' },
      { icon: <SiMysql />, name: 'MySQL' },
      { icon: <FaDatabase />, name: 'Supabase' },
    ],
    mobile: [
      { icon: <FaReact />, name: 'React Native' },
      { icon: <SiTypescript />, name: 'TypeScript' },
    ],
    web: [
      { icon: <FaPython />, name: 'Python' },
      { icon: <SiDjango />, name: 'Django' },
      { icon: <FaHtml5 />, name: 'HTML5' },
      { icon: <FaCss3Alt />, name: 'CSS3' },
      { icon: <FaJs />, name: 'JavaScript' },
      { icon: <FaReact />, name: 'React' },
    ],
    tools: [
      { icon: <FaGitAlt />, name: 'Git' },
      { icon: <FaGithub />, name: 'GitHub' },
      { icon: <FaDocker />, name: 'Docker' },
      { icon: <FaBrain />, name: 'CUDA' },
      { icon: <FaTools />, name: 'n8n' },
      { icon: <FaBrain />, name: 'ClearML' },
    ],
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">À propos</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="photo_cv.jpg" alt="Votre Nom" className="profile-image" />
          </div>
          <div className="about-text">
            <p className="about-description">
              Actuellement en cycle ingénieur à l’EIGSI Casablanca, je me spécialise en Data Science et Intelligence Artificielle. Je m’intéresse particulièrement aux modèles de Machine Learning et Deep Learning, ainsi qu’aux méthodes de traitement de données à grande échelle.
              Au cours de mon parcours, j’ai eu l’occasion de travailler sur plusieurs projets académiques et personnels qui m’ont permis de renforcer mes compétences en Python, PyTorch, Spark, Kafka et dans la mise en place de pipelines de données.
              Actuellement à la recherche d’un stage PFE de 6 mois à partir de janvier 2026, je souhaite rejoindre une équipe où je pourrai continuer à apprendre tout en contribuant à des projets liés à la Data et à l’Intelligence Artificielle.
            </p>
            <div className="about-info">
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>Maroc, Casablanca</span>
              </div>
              <div className="info-item">
                <FaLanguage />
                <span>Français (Avancé), Anglais (Intermédiaire)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compétences */}
        <div className="skills-section">
          <h3 className="skills-title">Compétences</h3>

          <div className="skills-category">
            <h4>
              <FaBrain /> IA / Machine Learning / Deep Learning
            </h4>
            <div className="tech-stack">
              {techStacks.ai.map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
            <p className="skills-details">
              Classification, régression, clustering, Deep Learning (CNN, LSTM, Transformers),
              segmentation d'images, détection d'anomalies, NLP, Fine-tuning (LoRA)
            </p>
          </div>

          <div className="skills-category">
            <h4>
              <FaDatabase /> Data Engineering
            </h4>
            <div className="tech-stack">
              {techStacks.data.map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h4>
              <FaDatabase /> Base de données
            </h4>
            <div className="tech-stack">
              {techStacks.database.map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h4>
              <FaMobileAlt /> Développement Mobile
            </h4>
            <div className="tech-stack">
              {techStacks.mobile.map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h4>
              <FaCode /> Développement Web
            </h4>
            <div className="tech-stack">
              {techStacks.web.map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h4>
              <FaTools /> Outils
            </h4>
            <div className="tech-stack">
              {techStacks.tools.map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
