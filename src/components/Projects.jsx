import { useState } from 'react'
import { FaPython, FaRobot, FaBrain, FaTelegram, FaGithub } from 'react-icons/fa'
import { SiDjango, SiPostgresql, SiApachekafka, SiApachespark } from 'react-icons/si'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      category: 'IA / Machine Learning',
      date: 'Novembre 2025',
      title: 'Détection de Fraude Bancaire avec ML',
      shortDescription: 'Modèle de Machine Learning pour détecter les transactions frauduleuses avec un dataset déséquilibré',
      fullDescription: `Projet de Machine Learning visant à détecter automatiquement les fraudes bancaires à partir d'un dataset de transactions. Le défi principal : gérer un dataset fortement déséquilibré où les fraudes représentent moins de 1% des transactions.

L'objectif : développer un modèle capable de distinguer les transactions légitimes des transactions frauduleuses en maximisant la détection des fraudes (Recall) tout en limitant les faux positifs.`,
      architecture: [
        'Analyse exploratoire des données (EDA) avec Pandas',
        'Gestion du déséquilibre avec SMOTE',
        'Feature engineering : variables temporelles et agrégations',
        'Comparaison de modèles : Random Forest vs XGBoost',
        'Optimisation des hyperparamètres avec GridSearchCV',
        'Évaluation avec métriques adaptées (Precision, Recall, F1-Score, AUC-ROC)'
      ],
      aiIntegration: `Approche Machine Learning supervisée pour la classification binaire :

- **Dataset déséquilibré** : ~0.17% de fraudes → nécessite SMOTE pour rééquilibrer
- **Feature engineering** : création de variables dérivées (montants moyens, fréquence de transactions, ratios)
- **Comparaison de modèles** : Random Forest et XGBoost
- **Optimisation** : GridSearchCV pour trouver les meilleurs hyperparamètres
- **Métriques** : Focus sur le Recall (détecter le maximum de fraudes) et l'AUC-ROC

Le modèle final atteint un bon compromis entre détection des fraudes et limitation des faux positifs.`,
      achievements: [
        'Analyser un dataset déséquilibré de transactions bancaires',
        'Appliquer SMOTE pour gérer le déséquilibre des classes',
        'Créer des features pertinentes avec Pandas',
        'Comparer Random Forest et XGBoost',
        'Optimiser les hyperparamètres avec GridSearchCV',
        'Évaluer les performances avec Precision, Recall, F1-Score et AUC-ROC',
        'Interpréter la matrice de confusion et courbe ROC'
      ],
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'SMOTE'],
      color: '#ef4444'
    },
    {
      id: 2,
      category: 'IA / NLP',
      date: 'Novembre 2025',
      title: 'Chatbot Personnalisé avec Fine-tuning',
      shortDescription: 'Chatbot intelligent développé avec fine-tuning LoRA sur des modèles de langage et déployé via Hugging Face avec intégration Telegram',
      fullDescription: 'Chatbot intelligent développé avec fine-tuning LoRA sur des modèles de langage, entraîné sur Google Colab et déployé via Hugging Face avec intégration Telegram.',
      achievements: [
        'Fine-tuning réussi avec LoRA sur dataset conversationnel',
        'Entraînement optimisé sur Google Colab',
        'Export et déploiement sur Hugging Face',
        'Intégration automatisée avec Telegram via n8n'
      ],
      technologies: ['Transformers', 'LoRA', 'Hugging Face', 'n8n', 'Telegram'],
      color: '#ec4899'
    },
    {
      id: 3,
      category: 'IA / Deep Learning',
      date: 'Novembre 2025',
      title: 'Segmentation d\'Images de Cuir',
      shortDescription: 'Détection et segmentation automatique de défauts sur des images de cuir en utilisant un modèle U-Net entraîné sur un dataset d\'images de cuir défectueux',
      fullDescription: `Projet de segmentation sémantique visant à détecter automatiquement les défauts sur des images de cuir. Le dataset contenait des images de cuir avec des défauts (rayures, trous, décolorations) et d'autres sans défaut. L'objectif était d'entraîner un modèle capable de segmenter précisément les zones défectueuses sur les cuirs défectueux.

J'ai utilisé l'architecture U-Net, particulièrement adaptée pour la segmentation d'images, qui permet de capturer à la fois les détails fins et le contexte global grâce à sa structure en encodeur-décodeur avec des connexions résiduelles.`,
      achievements: [
        'Entraînement d\'un modèle U-Net pour la segmentation de défauts',
        'Prétraitement et annotation du dataset d\'images de cuir',
        'Visualisation des masques de vérité terrain et des prédictions',
        'Calcul des métriques IoU (Intersection over Union) et Dice Score',
        'Évaluation de la performance du modèle sur différents types de défauts'
      ],
      technologies: ['Python', 'U-Net', 'Deep Learning', 'Computer Vision', 'PyTorch'],
      githubUrl: 'https://github.com/Gegegithub/U-Net-Segmentation',
      color: '#8b5cf6'
    },
    {
      id: 4,
      category: 'IA / Deep Learning',
      date: 'Octobre 2025',
      title: 'Détection de Tumeurs Cérébrales par Deep Learning',
      shortDescription: 'Comparaison CNN personnalisé vs Transfer Learning (ResNet50) pour la détection automatique de tumeurs sur images IRM du cerveau',
      fullDescription: `Dans le cadre d'un projet d'exploration en Deep Learning, j'ai travaillé sur des images IRM du cerveau pour développer un modèle capable de détecter automatiquement la présence ou non d'une tumeur.

L'objectif : comparer un modèle CNN personnalisé à une approche de Transfer Learning avec ResNet50. J'ai d'abord conçu un réseau de neurones convolutionnel (CNN) entièrement entraîné de zéro, qui a appris seul à reconnaître les motifs caractéristiques des tumeurs. Au début, j'ai un peu galéré à obtenir une accuracy de validation et de test satisfaisante, car le modèle avait tendance à surapprendre les données d'entrainement. En parallèle, j'ai testé ResNet50, un modèle pré-entraîné grâce au Transfer Learning, tirant parti de connaissances déjà acquises sur de grands ensembles d'images comme ImageNet.`,
      architecture: [
        'CNN personnalisé entraîné from scratch',
        'Transfer Learning avec ResNet50 pré-entraîné sur ImageNet',
        'Techniques de régularisation pour limiter le surapprentissage',
        'Augmentation de données pour renforcer la robustesse',
        'Suivi des expériences avec ClearML'
      ],
      aiIntegration: `Résultat : le modèle pré-entraîné a bien évidemment convergé plus vite et démontré une meilleure capacité de généralisation. Malgré la supériorité évidente du ResNet50, concevoir un CNN personnalisé à partir de données limitées m'a permis de plonger au cœur du fonctionnement d'un réseau de neurones. J'ai ainsi pu expérimenter concrètement l'impact des hyperparamètres, comprendre le rôle essentiel de la régularisation et mesurer l'efficacité de l'augmentation de données pour renforcer la robustesse et la performance du modèle.

Pour le suivi et la sauvegarde des expériences, j'ai utilisé ClearML, un superbe outil open source d'expérimentation et de traçabilité des modèles IA. Il m'a permis de suivre en temps réel les métriques, visualiser les courbes d'apprentissage, et comparer facilement plusieurs versions de modèles.`,
      achievements: [
        'Concevoir et entraîner un CNN from scratch pour la détection de tumeurs',
        'Implémenter le Transfer Learning avec ResNet50',
        'Maîtriser les techniques de régularisation et d\'augmentation de données',
        'Utiliser ClearML pour le tracking et la comparaison des expériences',
        'Comprendre les enjeux du Deep Learning en imagerie médicale'
      ],
      technologies: ['Python', 'CNN', 'ResNet50', 'Transfer Learning', 'ClearML'],
      githubUrl: 'https://github.com/Gegegithub/tumor_detection',
      color: '#8b5cf6'
    },
    {
      id: 5,
      category: 'Big Data',
      date: 'Juin 2025',
      title: 'Pipeline de Maintenance Prédictive',
      shortDescription: 'Pipeline temps réel de collecte des données machine et détection prédictive de pannes pour une raffinerie de pétrole',
      fullDescription: `Dans le cadre d'un projet d'école, j'ai conçu une pipeline complète de traitement de données IoT industrielles en temps réel, en combinant plusieurs technologies que sont : MQTT, Kafka, Spark, MinIO, TimescaleDB et Grafana.

L'objectif : construire un système capable de collecter, traiter, stocker et visualiser en continu des données de capteurs simulés (température & vibration), tout en explorant l'intégration d'une composante IA.`,
      architecture: [
        'Simulateurs de capteurs (température, vibration)',
        'MQTT pour la transmission des mesures',
        'Kafka pour l\'ingestion et la diffusion distribuée des données',
        'Spark pour le filtrage, le calcul de KPI et l\'envoi des résultats',
        'MinIO (S3 compatible) pour l\'archivage des données brutes',
        'TimescaleDB pour les données nettoyées et agrégées',
        'Grafana pour la visualisation temps réel'
      ],
      aiIntegration: `À partir des données historisées sur MinIO, j'ai entraîné un modèle de classification binaire (RandomForest) capable de détecter les tendances haussières de température annonçant un risque de dépassement du seuil critique de 150 °C.
Le modèle s'appuie sur une fenêtre glissante de 10 valeurs pour prédire les 10 secondes suivantes.
Les prédictions sont visibles dans Grafana pour aider un opérateur humain à anticiper et réagir avant une situation critique.`,
      achievements: [
        'Déployer une architecture IoT temps réel complète',
        'Comprendre les interactions entre messagerie, stream processing et bases temporelles',
        'Travailler sur l\'intégration d\'une IA dans une chaîne temps réel',
        'Valoriser mes compétences en Python, machine learning, et systèmes distribués'
      ],
      technologies: ['Kafka', 'Spark', 'Python', 'MQTT', 'TimescaleDB', 'MinIO', 'Grafana'],
      githubUrl: 'https://github.com/Gegegithub/Raffinerie-iot',
      color: '#0ea5e9'
    },
    {
      id: 6,
      category: 'IA / Computer Vision',
      date: 'Mai 2024',
      title: 'Gestion d\'Objets avec IA',
      shortDescription: 'Application web Django de gestion d\'inventaire intelligente avec détection d\'objets par IA utilisant YOLOv8',
      fullDescription: `Application web complète de gestion d'inventaire qui combine Django et l'intelligence artificielle pour faciliter le catalogage et l'analyse d'objets. Le système permet non seulement de gérer un inventaire classique, mais intègre également la détection d'objets par IA grâce à YOLOv8.`,
      achievements: [
        'Catalogage d\'objets avec leur état (défectueux/OK)',
        'Description détaillée et ajout d\'images',
        'Système de corbeille et de restauration',
        'Détection d\'objets avec YOLOv8',
        'Visualisation des objets détectés avec scores de confiance',
        'Historique des analyses',
        'Système d\'authentification et gestion des permissions',
        'Protection des routes',
        'Journal détaillé des modifications',
        'Traçabilité complète des actions'
      ],
      technologies: ['Django', 'YOLOv8', 'Python', 'Computer Vision', 'PostgreSQL'],
      githubUrl: 'https://github.com/Gegegithub/gestion_objets',
      color: '#f59e0b'
    },
    {
      id: 7,
      category: 'Développement Web',
      date: 'Mars 2024',
      title: 'Site Web Django - Plateforme E-commerce',
      shortDescription: 'Plateforme e-commerce développée avec Django incluant CI/CD avec GitHub Actions pour le déploiement automatique',
      fullDescription: `Un projet e-commerce simple et élégant développé avec Django, présentant des produits électroniques avec un système de catégories. Ce projet m'a permis d'explorer de nouvelles pratiques de développement, notamment la mise en place d'un pipeline CI/CD avec GitHub Actions pour automatiser les tests et le déploiement.`,
      achievements: [
        'Liste et détail des produits avec navigation intuitive',
        'Système de catégories pour organiser les produits',
        'Interface moderne et responsive avec Bootstrap 5',
        'Gestion des images de produits avec Pillow',
        'Interface d\'administration Django complète',
        'Système de gestion de stock',
        'Pipeline CI/CD avec GitHub Actions pour le déploiement automatique'
      ],
      technologies: ['Django', 'Python', 'Bootstrap 5', 'GitHub Actions', 'CI/CD', 'SQLite'],
      githubUrl: 'https://github.com/Gegegithub/E-commerce',
      color: '#10b981'
    },
    {
      id: 8,
      category: 'Développement Web',
      date: 'Janvier 2024',
      title: 'Site Web Django - Gestion de Bibliothèque',
      shortDescription: 'Application web complète de gestion de bibliothèque développée avec Django, incluant authentification, CRUD complet et gestion de base de données',
      fullDescription: 'Application web complète de gestion de bibliothèque développée avec Django, incluant authentification, CRUD complet et gestion de base de données.',
      achievements: [
        'CRUD complet pour la gestion des ouvrages',
        'Système d\'authentification et permissions multi-rôles',
        'Base de données relationnelle optimisée avec PostgreSQL',
        'API REST pour l\'intégration mobile',
        'Déploiement local réussi'
      ],
      technologies: ['Django', 'PostgreSQL', 'REST API', 'Python'],
      githubUrl: 'https://github.com/Gegegithub/gestion_biblio',
      color: '#10b981'
    },
  ]

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projets
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card-modern"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="project-card-body">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-date">{project.date}</span>
                  {project.status && (
                    <span className="project-status-badge">{project.status}</span>
                  )}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-short-description">{project.shortDescription}</p>
                <div className="project-tech-tags">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="tech-badge"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.button
                  className="btn-details"
                  onClick={() => openModal(project)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir les détails
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.button
                className="modal-close"
                onClick={closeModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                &times;
              </motion.button>
              <div className="modal-header" style={{ background: selectedProject.color }}>
                <h2>{selectedProject.title}</h2>
                <div className="modal-meta">
                  <span>{selectedProject.category}</span>
                  <span>{selectedProject.date}</span>
                </div>
              </div>
              <div className="modal-body">
                <p className="modal-description">{selectedProject.fullDescription}</p>

                {selectedProject.architecture && (
                  <div className="modal-section">
                    <h3>Architecture mise en œuvre</h3>
                    <ul>
                      {selectedProject.architecture.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.aiIntegration && (
                  <div className="modal-section">
                    <h3>Intégration IA — prédiction intelligente</h3>
                    <p>{selectedProject.aiIntegration}</p>
                  </div>
                )}

                <div className="modal-section">
                  <h3>Ce projet m'a permis de</h3>
                  <ul>
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-technologies">
                  <h3>Technologies utilisées</h3>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge-large">{tech}</span>
                    ))}
                  </div>
                </div>

                {selectedProject.githubUrl && (
                  <div className="modal-github">
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub /> Voir un aperçu sur GitHub
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
