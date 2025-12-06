import {
  FaLanguage,
  FaBrain,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaTools,
  FaChartBar,
} from 'react-icons/fa'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiSupabase,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiSqlite,
  SiApachekafka,
  SiApachespark,
  SiDjango,
  SiReact,
  SiHtml5,
  SiBootstrap,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiAmazonaws,
  SiOracle,
  SiGit,
  SiDocker,
  SiLinux,
  SiVmware,
  SiPowerbi,
  SiGrafana,
} from 'react-icons/si'
import { TbChartHistogram, TbBrain } from 'react-icons/tb'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const techStacks = {
    aiMlDl: [
      { icon: <SiPytorch />, name: 'PyTorch', color: '#EE4C2C' },
      { icon: <SiTensorflow />, name: 'TensorFlow', color: '#FF6F00' },
      { icon: <TbBrain />, name: 'Hugging Face', color: '#FFD21E' },
    ],
    dataScience: [
      { icon: <SiPandas />, name: 'Pandas', color: '#150458' },
      { icon: <SiNumpy />, name: 'NumPy', color: '#013243' },
      { icon: <SiScikitlearn />, name: 'Scikit-learn', color: '#F7931E' },
      { icon: <TbChartHistogram />, name: 'Matplotlib', color: '#11557c' },
    ],
    languages: [
      { icon: <SiPython />, name: 'Python', color: '#3776AB' },
      { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
      { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
      { icon: <SiMysql />, name: 'SQL', color: '#4479A1' },
    ],
    databases: [
      { icon: <SiSupabase />, name: 'Supabase', color: '#3ECF8E' },
      { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
      { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#4169E1' },
      { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
      { icon: <SiSqlite />, name: 'SQLite', color: '#003B57' },
      { icon: <SiFirebase />, name: 'Firebase', color: '#FFCA28' },
    ],
    bigData: [
      { icon: <SiApachekafka />, name: 'Apache Kafka', color: '#231F20' },
      { icon: <SiApachespark />, name: 'Apache Spark', color: '#E25A1C' },
    ],
    webMobile: [
      { icon: <SiDjango />, name: 'Django', color: '#092E20' },
      { icon: <SiReact />, name: 'React.js', color: '#61DAFB' },
      { icon: <SiReact />, name: 'React Native', color: '#61DAFB' },
      { icon: <SiHtml5 />, name: 'HTML, CSS', color: '#E34F26' },
      { icon: <SiBootstrap />, name: 'Bootstrap', color: '#7952B3' },
    ],
    cloud: [
      { icon: <SiAmazonaws />, name: 'AWS', color: '#FF9900' },
      { icon: <SiOracle />, name: 'Oracle Cloud (OCI)', color: '#F80000' },
    ],
    toolsDevOps: [
      { icon: <SiGit />, name: 'Git, GitHub', color: '#F05032' },
      { icon: <SiDocker />, name: 'Docker', color: '#2496ED' },
      { icon: <FaTools />, name: 'n8n', color: '#EA4B71' },
      { icon: <FaTools />, name: 'ClearML', color: '#009EDB' },
    ],
    systemsVirtualization: [
      { icon: <SiLinux />, name: 'Linux (Ubuntu)', color: '#FCC624' },
      { icon: <SiVmware />, name: 'VMware', color: '#607078' },
    ],
    dataVisualization: [
      { icon: <SiPowerbi />, name: 'Power BI', color: '#F2C811' },
      { icon: <SiGrafana />, name: 'Grafana', color: '#F46800' },
      { icon: <FaChartBar />, name: 'Superset', color: '#20A6C9' },
    ],
  }

  return (
    <section id="about" className="about">
      <div className="wavy-line-left"></div>
      <div className="wavy-line-right"></div>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          À propos
        </motion.h2>
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src="photo_cv.jpg" alt="Georges BIRANGOU" className="profile-image" />
          </motion.div>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="about-description">
              Actuellement en cycle ingénieur à l'EIGSI Casablanca, je me spécialise en Data Science et Intelligence Artificielle. Je m'intéresse particulièrement aux modèles de Machine Learning et Deep Learning, ainsi qu'aux méthodes de traitement de données à grande échelle.
              Au cours de mon parcours, j'ai eu l'occasion de travailler sur plusieurs projets académiques et personnels qui m'ont permis de renforcer mes compétences.
              Actuellement à la recherche d'un stage PFE de 6 mois à partir de janvier 2026, je souhaite rejoindre une équipe où je pourrai continuer à apprendre tout en contribuant à des projets liés à la Data et à l'Intelligence Artificielle.
            </p>
            <div className="about-info">
              <div className="info-item">
                <FaLanguage />
                <span>Français (Avancé), Anglais (Intermédiaire)</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stack Technologique */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h3
            className="skills-main-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Stack Technologique
          </motion.h3>
          <motion.p
            className="skills-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technologies que j'utilise quotidiennement
          </motion.p>

          <div className="tech-grid">
            <div className="tech-category-card">
              <div className="category-header">
                <FaBrain className="category-icon" />
                <h4>IA / Machine Learning / Deep Learning</h4>
              </div>
              <div className="tech-stack-modern">
                {techStacks.aiMlDl.map((tech, index) => (
                  <div key={index} className="tech-badge" style={{ '--tech-color': tech.color }}>
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category-card">
              <div className="category-header">
                <FaDatabase className="category-icon" />
                <h4>Data Science</h4>
              </div>
              <div className="tech-stack-modern">
                {techStacks.dataScience.map((tech, index) => (
                  <div key={index} className="tech-badge" style={{ '--tech-color': tech.color }}>
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category-card">
              <div className="category-header">
                <FaTools className="category-icon" />
                <h4>Langages</h4>
              </div>
              <div className="tech-stack-modern">
                {techStacks.languages.map((tech, index) => (
                  <div key={index} className="tech-badge" style={{ '--tech-color': tech.color }}>
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category-card">
              <div className="category-header">
                <FaDatabase className="category-icon" />
                <h4>Big Data</h4>
              </div>
              <div className="tech-stack-modern">
                {techStacks.bigData.map((tech, index) => (
                  <div key={index} className="tech-badge" style={{ '--tech-color': tech.color }}>
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category-card">
              <div className="category-header">
                <FaDatabase className="category-icon" />
                <h4>Bases de données</h4>
              </div>
              <div className="tech-stack-modern">
                {techStacks.databases.map((tech, index) => (
                  <div key={index} className="tech-badge" style={{ '--tech-color': tech.color }}>
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category-card">
              <div className="category-header">
                <FaMobileAlt className="category-icon" />
                <h4>Web & Mobile</h4>
              </div>
              <div className="tech-stack-modern">
                {techStacks.webMobile.map((tech, index) => (
                  <div key={index} className="tech-badge" style={{ '--tech-color': tech.color }}>
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category-card">
              <div className="category-header">
                <FaCloud className="category-icon" />
                <h4>Cloud</h4>
              </div>
              <div className="tech-stack-modern">
                {techStacks.cloud.map((tech, index) => (
                  <div key={index} className="tech-badge" style={{ '--tech-color': tech.color }}>
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category-card">
              <div className="category-header">
                <FaTools className="category-icon" />
                <h4>Outils / DevOps</h4>
              </div>
              <div className="tech-stack-modern">
                {techStacks.toolsDevOps.map((tech, index) => (
                  <div key={index} className="tech-badge" style={{ '--tech-color': tech.color }}>
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category-card">
              <div className="category-header">
                <FaTools className="category-icon" />
                <h4>Systèmes & Virtualisation</h4>
              </div>
              <div className="tech-stack-modern">
                {techStacks.systemsVirtualization.map((tech, index) => (
                  <div key={index} className="tech-badge" style={{ '--tech-color': tech.color }}>
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-category-card">
              <div className="category-header">
                <FaChartBar className="category-icon" />
                <h4>Visualisation de données</h4>
              </div>
              <div className="tech-stack-modern">
                {techStacks.dataVisualization.map((tech, index) => (
                  <div
                    key={index}
                    className="tech-badge"
                    style={{ '--tech-color': tech.color }}
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
