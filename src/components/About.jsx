import './about.css';
import othmane from '../assets/Othmaaane.jpg';
import { useLanguage } from '../LanguageContext';

export function About() {
    const { t } = useLanguage();
    return (
        <section className="about" id="about">
            <div className="about-left">
                <div className="about-photo-container">
                    <img src={othmane} alt="Othmane El messaoudi" className="about-photo" />
                </div>
            </div>

            <div className="about-right">
                <div className="about-me-label">{t('about.label')}</div>
                <div className="about-subtitle">{t('about.subtitle')}</div>
                <h2 className="about-title">
                    Othmane El messaoudi
                </h2>
                <div className="about-desc">
                    <p>{t('about.desc1')}</p>
                    <p>{t('about.desc2')}</p>
                    <p>{t('about.desc3')}</p>
                </div>

                <div className="about-focus">
                    <h3>{t('about.focus')}</h3>
                    <div className="focus-tags">
                        <span className="focus-tag">{t('about.focus.web')}</span>
                        <span className="focus-tag">{t('about.focus.ml')}</span>
                        <span className="focus-tag">{t('about.focus.ds')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
