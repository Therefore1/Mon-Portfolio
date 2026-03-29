import React, { useState } from 'react';
import './portfolio.css';
import EnsaGuideImg from '../assets/EnsaGuide.png';
import AnomalyDetectionImg from '../assets/AnomalyDetection.png';
import { useLanguage } from '../LanguageContext';

const Portfolio = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('projects');

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="portfolio-header">
                <h2 className="portfolio-title">{t('portfolio.title')}</h2>
                <p className="portfolio-subtitle">
                    {t('portfolio.subtitle')}
                </p>

                <div className="toggle-wrapper">
                    <div className="toggle-container">
                        <button
                            className={`toggle-btn ${activeTab === 'projects' ? 'active' : ''}`}
                            onClick={() => setActiveTab('projects')}
                        >
                            {t('portfolio.tab.projects')}
                        </button>
                        <button
                            className={`toggle-btn ${activeTab === 'skills' ? 'active' : ''}`}
                            onClick={() => setActiveTab('skills')}
                        >
                            {t('portfolio.tab.skills')}
                        </button>
                    </div>
                </div>
            </div>

            {activeTab === 'projects' && (
                <div className="projects-grid">
                    <div className="project-card">
                        <div className="project-image-container">
                            <img src={EnsaGuideImg} alt="ENSA Guide" className="project-img" />
                        </div>
                        <div className="project-info">
                            <span className="badge badge-academic">{t('portfolio.badge.academic')}</span>
                            <h3 className="project-title">ENSA Guide</h3>
                            <p className="project-desc">
                                {t('portfolio.ensa.desc1')}
                                <br /><br />
                                {t('portfolio.ensa.desc2')}
                                <br />
                                {t('portfolio.ensa.desc3')}
                            </p>

                            <div className="project-tags">
                                <span className="project-tag-chip">Python</span>
                                <span className="project-tag-chip">Flask</span>
                                <span className="project-tag-chip">HTML</span>
                                <span className="project-tag-chip">CSS</span>
                                <span className="project-tag-chip">SQL</span>
                            </div>

                            <a
                                href="https://github.com/elkihelriyad/mini-projet"
                                target="_blank"
                                rel="noreferrer"
                                className="deploy-btn github-btn"
                            >
                                {t('portfolio.btn.github')}
                            </a>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image-container">
                            <img src={AnomalyDetectionImg} alt="Anomaly Detection" className="project-img" />
                        </div>
                        <div className="project-info">
                            <span className="badge badge-personal">{t('portfolio.badge.personal')}</span>
                            <h3 className="project-title">Anomaly Detection</h3>
                            <p className="project-desc">
                                {t('portfolio.anomaly.desc1')}
                                <br /><br />
                                {t('portfolio.anomaly.desc2')}
                                <br />
                                {t('portfolio.anomaly.desc3')}
                            </p>

                            <div className="project-tags">
                                <span className="project-tag-chip">Flask</span>
                                <span className="project-tag-chip">Pandas</span>
                                <span className="project-tag-chip">Scikit-learn</span>
                                <span className="project-tag-chip">Python</span>
                                <span className="project-tag-chip">React.js</span>
                                <span className="project-tag-chip">Vite</span>
                                <span className="project-tag-chip">ESLint</span>
                                <span className="project-tag-chip">Git</span>
                                <span className="project-tag-chip">Postman</span>
                            </div>

                            <a
                                href="https://khalid-othmane-detection-anomaly.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                                className="deploy-btn"
                            >
                                {t('portfolio.btn.deploy')}
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'skills' && (
                <div className="skills-grid">
                    <div className="skill-category-card">
                        <h3 className="skill-category-title">Frontend</h3>
                        <div className="skill-chips">
                            <span className="skill-chip">HTML</span>
                            <span className="skill-chip">CSS</span>
                            <span className="skill-chip">JavaScript</span>
                            <span className="skill-chip">React.js</span>
                        </div>
                    </div>

                    <div className="skill-category-card">
                        <h3 className="skill-category-title">Backend & Programming</h3>
                        <div className="skill-chips">
                            <span className="skill-chip">Python</span>
                            <span className="skill-chip">Java</span>
                            <span className="skill-chip">C</span>
                            <span className="skill-chip">Flask</span>
                        </div>
                    </div>

                    <div className="skill-category-card">
                        <h3 className="skill-category-title">Data & Machine Learning</h3>
                        <div className="skill-chips">
                            <span className="skill-chip">pandas</span>
                            <span className="skill-chip">NumPy</span>
                            <span className="skill-chip">scikit-learn</span>
                        </div>
                    </div>

                    <div className="skill-category-card">
                        <h3 className="skill-category-title">Database</h3>
                        <div className="skill-chips">
                            <span className="skill-chip">MySQL</span>
                        </div>
                    </div>

                    <div className="skill-category-card">
                        <h3 className="skill-category-title">Tools & Environment</h3>
                        <div className="skill-chips">
                            <span className="skill-chip">Git</span>
                            <span className="skill-chip">Postman</span>
                            <span className="skill-chip">Axios</span>
                            <span className="skill-chip">Vite</span>
                            <span className="skill-chip">ESLint</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
