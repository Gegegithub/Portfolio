import { useState } from 'react'
import { FaPython, FaRobot, FaBrain, FaTelegram, FaGithub } from 'react-icons/fa'
import { SiDjango, SiPostgresql, SiApachekafka, SiApachespark } from 'react-icons/si'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 10,
      category: 'IA / NLP & RAG',
      date: 'Décembre 2025',
      title: 'Système RAG pour Interrogation Documentaire Avancée',
      shortDescription: 'Solution de dialogue intelligente basée sur RAG (Retrieval-Augmented Generation) permettant d\'interroger et extraire des informations à partir de bases documentaires complexes',
      fullDescription: `Conception d'une solution de dialogue avancée permettant d'interroger et d'extraire des informations à partir de bases documentaires complexes via une architecture RAG (Retrieval-Augmented Generation).

Le défi : Créer un système capable de comprendre des questions en langage naturel et de récupérer les informations pertinentes dans des documents volumineux, tout en générant des réponses contextualisées et précises.`,
      architecture: [
        'Architecture RAG : Retrieval (recherche) + Augmented Generation (génération)',
        'Ingestion et preprocessing de documents complexes (PDF, Word, textes)',
        'Chunking intelligent des documents pour optimiser la récupération',
        'Embedding des chunks avec modèles de langage (sentence transformers)',
        'Base vectorielle pour stockage et recherche sémantique rapide',
        'Retrieval : recherche par similarité cosinus des passages pertinents',
        'Augmentation du contexte : injection des passages dans le prompt LLM',
        'Génération de réponses avec modèle de langage (GPT, LLaMA, etc.)',
        'Interface de dialogue conversationnelle pour interaction utilisateur',
        'Système de citations pour traçabilité des sources'
      ],
      achievements: [
        'Maîtriser l\'architecture RAG (Retrieval-Augmented Generation)',
        'Implémenter un système de chunking intelligent avec preservation du contexte',
        'Utiliser des embeddings vectoriels pour recherche sémantique',
        'Déployer une base vectorielle pour stockage et retrieval rapide',
        'Intégrer un LLM pour génération de réponses contextualisées',
        'Créer un système de traçabilité avec citations de sources',
        'Développer une interface conversationnelle intuitive',
        'Gérer des documents multi-formats (PDF, Word, texte)',
        'Optimiser la pertinence avec techniques de réranking',
        'Concevoir un pipeline NLP end-to-end pour question-answering'
      ],
      technologies: ['Python', 'LangChain', 'OpenAI', 'FAISS', 'Sentence Transformers', 'ChromaDB', 'Streamlit', 'PyPDF2', 'Hugging Face'],
      color: '#8b5cf6'
    },
    {
      id: 1,
      category: 'IA / Machine Learning',
      date: 'Décembre 2025',
      title: 'Architecture de détection de fraude bancaire en temps réel',
      shortDescription: 'Architecture de surveillance financière de bout en bout avec Python,Docker et grafana permettant d\'intercepter des transactions frauduleuses au sein de flux massifs.',
      fullDescription: `Système complet de détection de fraude bancaire en deux phases : entraînement offline d'un modèle ML sur un dataset déséquilibré avec méthodologie train/test rigoureuse, puis déploiement en production avec une architecture de streaming temps réel.

Le défi : Détecter 9 fraudes sur 10 parmi 284,807 transactions (0.17% fraudes) avec seulement 0.3% de fausses alertes - un compromis optimal pour la production bancaire où manquer une fraude coûte bien plus cher que vérifier une transaction suspecte.`,
      architecture: [
        'Phase ML Offline : EDA avec Pandas sur 284,807 transactions (492 fraudes)',
        'Split rigoureux : 80% train (227,845 tx) / 20% test (56,962 tx, 98 fraudes)',
        'Preprocessing : StandardScaler + SMOTE (rééquilibrage 50/50 sur train uniquement)',
        'Modélisation : Random Forest vs XGBoost avec GridSearchCV',
        'Évaluation test set : 89.8% Recall, 99.68% Accuracy, ROC-AUC 0.978, 0.3% fausses alertes',
        'Phase Streaming : Architecture Kafka + PostgreSQL + Docker sur test set (56,962 tx)',
        'Producer : Simulation flux production avec double-write pattern (PostgreSQL + Kafka)',
        'Detector : Consumer Kafka avec inférence temps réel (latence ~10-20ms)',
        'Visualisation : Dashboards Grafana professionnels sans ground truth (auto-refresh 5-10s)'
      ],
      achievements: [
        'Appliquer une méthodologie ML rigoureuse avec split train/test (80/20) sans data leakage',
        'Gérer un dataset fortement déséquilibré avec SMOTE (0.17% fraudes, rééquilibrage train uniquement)',
        'Comparer et optimiser Random Forest vs XGBoost avec GridSearchCV',
        'Atteindre un compromis Precision/Recall optimal pour la production (89.8% Recall, 0.3% fausses alertes)',
        'Évaluer rigoureusement sur test set avec métriques adaptées (ROC-AUC 0.978, Accuracy 99.68%)',
        'Concevoir une architecture de streaming temps réel avec Kafka (Producer-Consumer)',
        'Déployer un modèle ML en production avec inférence temps réel sur 56,962 transactions (~10-20ms/prédiction)',
        'Orchestrer des microservices avec Docker Compose (Kafka, Zookeeper, PostgreSQL, Grafana)',
        'Créer des dashboards Grafana professionnels sans ground truth (simulation production réelle)',
        'Maîtriser un pipeline end-to-end de ML : de l\'EDA rigoureuse au déploiement production validé'
      ],
      technologies: ['Python', 'Pandas', 'XGBoost', 'Kafka', 'PostgreSQL', 'Docker', 'Grafana', 'SMOTE', 'Scikit-learn'],
      color: '#ef4444',
      githubUrl: 'https://github.com/Gegegithub/Bank-fraud-detection.git'
    },
    {
      id: 9,
      category: 'IA / Computer Vision',
      date: 'Décembre 2025',
      title: 'Contrôle Qualité Automatisé de Câbles',
      shortDescription: 'Application de détection automatique de défauts de longueur des câbles électriques en utilisant YOLOv8 et Flask.',
      fullDescription: `Application de détection automatique de défauts de longueur des câbles électriques. Le système analyse des images de câbles, calcule leur longueur en centimètres et détermine s'ils sont conformes (20-40 cm) ou défectueux.

Le défi : Remplacer les mesures manuelles de longueur par un système automatisé précis, capable de traiter plusieurs images en batch et de générer des rapports d'analyse pour le suivi qualité.`,
      architecture: [
        'Pipeline de mesure : Upload → Segmentation YOLOv8 → Squelettisation → Calcul longueur',
        'Backend Flask avec endpoint /upload pour traitement temps réel',
        'Segmentation du câble avec YOLOv8 pour isoler l\'objet',
        'Squelettisation (skimage) pour extraire l\'axe central du câble',
        'Conversion graphe NetworkX pour calculer le chemin le plus long',
        'Calibration pixels → cm avec ratio configurable (config.py)',
        'Stockage JSON avec métadonnées : ID horodaté, longueur, statut',
        'Interface web responsive avec 3 pages : Test, Dashboard, Historique',
        'Visualisations Chart.js : camembert OK/DÉFECTUEUX et évolution temporelle',
        'Filtres analytics : plage de longueur et période (jour/semaine/mois)'
      ],
      achievements: [
        'Déployer YOLOv8 pour la segmentation de câbles dans une application Flask',
        'Implémenter un pipeline de mesure basé sur squelettisation et analyse de graphe',
        'Concevoir un système de calibration pixels/cm pour des mesures précises',
        'Développer une interface web complète avec navigation multi-pages',
        'Créer un dashboard analytics avec Chart.js (graphique camembert + temporel)',
        'Gérer le traitement batch d\'images avec système de slideshow',
        'Implémenter des filtres avancés (longueur min/max, période) avec mise à jour dynamique',
        'Générer des rapports PDF professionnels avec jsPDF et autoTable',
        'Concevoir un système de traçabilité avec IDs horodatés et stockage JSON',
        'Déployer un projet IA end-to-end : du modèle à l\'application web fonctionnelle'
      ],
      technologies: ['Flask', 'YOLOv8','Python', 'NetworkX', 'skimage'],
      color: '#f59e0b',
      githubUrl: 'https://github.com/votre-username/detection-defauts-cables'
    },
    {
      id: 2,
      category: 'IA / NLP',
      date: 'Novembre 2025',
      title: 'Chatbot Personnalisé avec Fine-tuning LLaMA 3',
      shortDescription: 'Fine-tuning de LLaMA 3 avec LoRA sur un dataset personnalisé de mes conversations pour créer un chatbot adoptant mon ton et mon style conversationnel',
      fullDescription: `Projet de personnalisation d'un Large Language Model via fine-tuning : j'ai entraîné LLaMA 3 sur un dataset constitué de mes propres conversations pour que le modèle reproduise fidèlement mon ton, mon style d'expression et ma manière de communiquer.

Le défi : Créer un assistant conversationnel qui ne se contente pas de répondre correctement, mais qui le fait avec ma personnalité - en capturant mes tournures de phrases, mon niveau de langage et mes expressions caractéristiques.`,
      architecture: [
        'Collecte et preprocessing d\'un dataset personnalisé de conversations',
        'Fine-tuning de LLaMA 3 (8B paramètres) avec la technique LoRA (Low-Rank Adaptation)',
        'Entraînement sur Google Colab avec optimisations GPU',
        'Export du modèle fine-tuné vers Hugging Face Hub',
        'Déploiement avec API Hugging Face Inference',
        'Intégration Telegram via n8n pour automatisation conversationnelle'
      ],
      achievements: [
        'Construire un dataset conversationnel personnalisé à partir de mes échanges réels',
        'Maîtriser le fine-tuning de LLM avec LoRA pour réduire les coûts computationnels',
        'Entraîner LLaMA 3 pour reproduire mon ton et style conversationnel personnel',
        'Optimiser l\'entraînement sur Google Colab avec contraintes GPU limitées',
        'Déployer le modèle sur Hugging Face pour inférence accessible',
        'Automatiser l\'intégration avec Telegram via n8n (workflow no-code)',
        'Comprendre les enjeux du fine-tuning : équilibre entre personnalisation et capacités générales'
      ],
      technologies: ['LLaMA 3', 'LoRA', 'Transformers', 'Hugging Face', 'Google Colab', 'n8n', 'Telegram Bot API'],
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
      shortDescription: 'CNN personnalisé vs Transfer Learning (ResNet50) pour la détection automatique de tumeurs sur images IRM du cerveau',
      fullDescription: `Dans le cadre d'un projet d'exploration en Deep Learning, j'ai travaillé sur des images IRM du cerveau pour développer un modèle capable de détecter automatiquement la présence ou non d'une tumeur.

L'objectif : comparer un modèle CNN personnalisé à une approche de Transfer Learning avec ResNet50. J'ai d'abord conçu un réseau de neurones convolutionnel (CNN) entièrement entraîné de zéro, qui a appris seul à reconnaître les motifs caractéristiques des tumeurs. Au début, j'ai un peu galéré à obtenir une accuracy de validation et de test satisfaisante, car le modèle avait tendance à surapprendre les données d'entrainement. En parallèle, j'ai testé ResNet50, un modèle pré-entraîné grâce au Transfer Learning, tirant parti de connaissances déjà acquises sur de grands ensembles d'images comme ImageNet.`,
      architecture: [
        'CNN personnalisé entraîné from scratch',
        'Transfer Learning avec ResNet50 pré-entraîné sur ImageNet',
        'Techniques de régularisation pour limiter le surapprentissage',
        'Augmentation de données pour renforcer la robustesse',
        'Suivi des expériences avec ClearML'
      ],
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
      title: 'Architecture IoT pour la supervision industrielle en temps réel',
      shortDescription: 'Architecture temps réel de collecte des données machine et détection prédictive de pannes pour une raffinerie de pétrole',
      fullDescription: `Dans le cadre d'un projet Académique, j'ai conçu une pipeline complète de traitement de données IoT industrielles en temps réel, en combinant plusieurs technologies que sont : MQTT, Kafka, Spark, MinIO, TimescaleDB et Grafana.

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
