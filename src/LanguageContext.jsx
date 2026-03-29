import React, { createContext, useState, useContext } from 'react';

const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.portfolio': 'Portfolio',
    'nav.contact_btn': 'Me contacter',
    
    'home.title': 'Étudiant en Informatique et Ingénierie en Intelligence Artificielle',
    'home.subtitle': 'Transformer les données en informations exploitables et concevoir des solutions d’IA à impact.',
    'home.projects': 'Projets',
    'home.skills': 'Compétences',
    'home.resume': 'Voir le CV',
    
    'about.label': 'À propos',
    'about.subtitle': 'Étudiant en Informatique et Ingénierie en Intelligence Artificielle',
    'about.desc1': 'Je suis Othmane El Messaoudi, étudiant en informatique et en ingénierie de l’intelligence artificielle, passionné par l’exploitation des données pour en extraire des insights concrets.',
    'about.desc2': 'J’apprécie travailler en équipe, apprendre en contribuant, et apporter curiosité, rigueur et sérieux dans chaque projet. De la création de modèles prédictifs et de tableaux de bord au développement d’applications d’IA en temps réel, je m’efforce de concevoir des solutions répondant à des problématiques réelles.',
    'about.desc3': 'Je suis actuellement à la recherche de stages d’été ou de projets collaboratifs où je peux progresser, mettre en pratique mes compétences et avoir un impact concret.',
    'about.focus': 'Ce sur quoi je me concentre :',
    'about.focus.web': 'Développement Web',
    'about.focus.ml': 'Machine Learning',
    'about.focus.ds': 'Data Science',
    
    'portfolio.title': 'Mon Portfolio',
    'portfolio.subtitle': 'À l’intersection du développement web, de la data science et de l’intelligence artificielle.',
    'portfolio.tab.projects': 'Projets',
    'portfolio.tab.skills': 'Compétences',
    
    'portfolio.ensa.desc1': 'ENSA Guide est une application web conçue pour aider les étudiants de l’ENSA à découvrir les différentes filières d’ingénierie disponibles.',
    'portfolio.ensa.desc2': 'Elle fournit des informations détaillées sur chaque filière, notamment les modules, l’organisation des semestres et les opportunités de carrière.',
    'portfolio.ensa.desc3': 'La plateforme propose également un test d’orientation permettant de suggérer la filière la plus adaptée en fonction des réponses de l’utilisateur.',
    
    'portfolio.anomaly.desc1': 'Anomaly Detection est une application web de machine learning permettant de détecter des anomalies dans les données à l’aide de l’algorithme Isolation Forest.',
    'portfolio.anomaly.desc2': 'Le système est développé avec un backend en Flask et utilise pandas ainsi que scikit-learn pour le traitement des données et les prédictions.',
    'portfolio.anomaly.desc3': 'Ce projet a été réalisé en binôme et déployé en ligne.',
    
    'portfolio.badge.academic': 'PROJET ACADÉMIQUE',
    'portfolio.badge.personal': 'PROJET PERSONNEL (BINÔME)',
    
    'portfolio.btn.github': 'Voir sur GitHub',
    'portfolio.btn.deploy': 'Voir le déploiement',
    
    'contact.title': 'Me contacter',
    'contact.subtitle': 'À la recherche d’opportunités de stage en développement web, data science et intelligence artificielle.',
    'contact.direct': 'Contact direct',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success': 'Message envoyé avec succès !',
    'contact.form.error': 'Erreur. Veuillez réessayer.',
    
    'footer.rights': 'Tous droits réservés.'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.contact_btn': 'Contact me',
    
    'home.title': 'Computer Science & AI Engineering Student',
    'home.subtitle': 'Turning data into insights. Building AI solutions that make an impact.',
    'home.projects': 'Projects',
    'home.skills': 'Skills',
    'home.resume': 'View Resume',
    
    'about.label': 'About me',
    'about.subtitle': 'Computer Science & AI Engineering Student',
    'about.desc1': 'I\'m Othmane El messaoudi, a Computer Science & AI engineering student passionate about turning data into actionable insights.',
    'about.desc2': 'I enjoy collaborating, learning as I contribute, and bringing curiosity, discipline, and reliability to every project. From building predictive models and dashboards to developing real-time AI applications, I focus on creating work that addresses real-world challenges.',
    'about.desc3': 'I\'m currently seeking summer internships or collaborative projects where I can grow, apply my skills, and make a tangible impact.',
    'about.focus': 'What I Focus On:',
    'about.focus.web': 'Web Development',
    'about.focus.ml': 'Machine Learning',
    'about.focus.ds': 'Data Science',
    
    'portfolio.title': 'My Portfolio',
    'portfolio.subtitle': 'Exploring the intersection of web development, data science, and AI.',
    'portfolio.tab.projects': 'Projects',
    'portfolio.tab.skills': 'Skills',
    
    'portfolio.ensa.desc1': 'ENSA Guide is a web application designed to help ENSA students explore available engineering fields.',
    'portfolio.ensa.desc2': 'It provides detailed insights into each program, including modules, semester structure, and career opportunities.',
    'portfolio.ensa.desc3': 'The platform also features an orientation test that suggests the most suitable field based on user responses.',
    
    'portfolio.anomaly.desc1': 'Anomaly Detection is a machine learning web application that identifies unusual patterns in data using the Isolation Forest algorithm.',
    'portfolio.anomaly.desc2': 'The system is built with a Flask backend and leverages pandas and scikit-learn for data processing and model prediction.',
    'portfolio.anomaly.desc3': 'This project was developed in a team and deployed online.',
    
    'portfolio.badge.academic': 'ACADEMIC PROJECT',
    'portfolio.badge.personal': 'PERSONAL PROJECT (TEAM)',
    
    'portfolio.btn.github': 'View on GitHub',
    'portfolio.btn.deploy': 'View Deployment',
    
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Seeking internship opportunities in web development, data science, and AI.',
    'contact.direct': 'Direct contact',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Error. Please try again.',
    
    'footer.rights': 'All rights reserved.'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
