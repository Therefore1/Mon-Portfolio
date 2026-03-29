import React, { useState } from 'react';
import './contact.css';
import githubIcon from '../assets/github-ico.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import mailIcon from '../assets/email-svgrepo-com.svg';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const form = e.target;
        
        try {
            const response = await fetch("https://formsubmit.co/ajax/otmaneelmessaoudi12@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name.value,
                    email: form.email.value,
                    message: form.message.value
                })
            });
            
            const data = await response.json();
            
            if (data.success) {
                form.reset();
                alert(t('contact.form.success'));
            } else {
                alert(t('contact.form.error'));
            }
        } catch (error) {
            alert(t('contact.form.error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section id="contact" className="contact-section">
                <div className="contact-container">
                    <div className="contact-header">
                        <h2 className="contact-title">{t('contact.title')}</h2>
                        <p className="contact-subtitle">
                            {t('contact.subtitle')}
                        </p>
                    </div>

                    <div className="contact-content">
                        {/* Direct Contact Info */}
                        <div className="contact-info">
                            <h3>{t('contact.direct')}</h3>
                            <div className="contact-cards">
                                <a href="mailto:otmaneelmessaoudi12@gmail.com" className="contact-card">
                                    <img src={mailIcon} alt="Email" className="contact-icon" />
                                    <div>
                                        <h4>Email</h4>
                                        <p>otmaneelmessaoudi12@gmail.com</p>
                                    </div>
                                </a>
                                <a href="https://github.com/Therefore1" target="_blank" rel="noreferrer" className="contact-card">
                                    <img src={githubIcon} alt="GitHub" className="contact-icon" />
                                    <div>
                                        <h4>GitHub</h4>
                                        <p>github.com/Therefore1</p>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/othmane-el-messaoudi/" target="_blank" rel="noreferrer" className="contact-card">
                                    <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
                                    <div>
                                        <h4>LinkedIn</h4>
                                        <p>linkedin.com/in/othmane-el-messaoudi</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">{t('contact.form.name')}</label>
                                    <input type="text" id="name" name="name" placeholder="" required disabled={isSubmitting} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">{t('contact.form.email')}</label>
                                    <input type="email" id="email" name="email" placeholder="" required disabled={isSubmitting} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">{t('contact.form.message')}</label>
                                    <textarea id="message" name="message" rows="5" placeholder="..." required disabled={isSubmitting}></textarea>
                                </div>
                                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Othmane El messaoudi. {t('footer.rights')}</p>
                </div>
            </footer>
        </>
    );
};

export default Contact;
