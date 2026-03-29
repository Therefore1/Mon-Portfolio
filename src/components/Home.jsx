import './home.css';
import othmane from '../assets/Othmaaane.jpg';
import { useLanguage } from '../LanguageContext';

export function Home() {
    const { t } = useLanguage();
    return (
        <section className="home">
            <div className="home-left">
                <h1 className="home-name">Othmane El messaoudi</h1>
                <p className="home-title">{t('home.title')}</p>
                <p className="home-desc">
                    {t('home.subtitle')}
                </p>

                <div className="home-stats">
                    <div className="stat">
                        <div className="stat-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6c8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </div>
                        <span className="stat-number">2+</span>
                        <span className="stat-label">{t('home.projects')}</span>
                    </div>
                    <div className="stat">
                        <div className="stat-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6c8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                            </svg>
                        </div>
                        <span className="stat-number">10+</span>
                        <span className="stat-label">{t('home.skills')}</span>
                    </div>
                </div>

                <a href="/Othmane El messaoudi.pdf" download="Othmane_El_messaoudi_CV.pdf" className="resume-btn">
                    {t('home.resume')}
                </a>
            </div>

            <div className="home-right">
                <img src={othmane} alt="Othmane" className="hero-photo" />
            </div>
        </section>
    );
}