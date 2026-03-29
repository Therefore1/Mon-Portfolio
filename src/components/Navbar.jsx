import { useState, useEffect } from 'react';
import './navbar.css';
import githubIcon from '../assets/github-ico.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import mailIcon from '../assets/email-svgrepo-com.svg';

export function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isLightNavbar, setIsLightNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            const portfolioSection = document.getElementById('portfolio');
            const contactSection = document.getElementById('contact');
            let currentSection = 'home';
            let lightNav = false;

            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2) {
                    currentSection = 'about';
                }
            }
            if (portfolioSection) {
                const rect = portfolioSection.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2) {
                    currentSection = 'portfolio';
                }
                // The navbar should only be light when it physically overlaps the portfolio section
                if (rect.top <= 80 && rect.bottom >= 60) {
                    lightNav = true;
                }
            }
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2) {
                    currentSection = 'contact';
                }
            }
            
            // Check if user has scrolled to the absolute bottom of the page
            if (window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 50) {
                 currentSection = 'contact';
            }
            setActiveSection(currentSection);
            setIsLightNavbar(lightNav);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isLightNavbar ? 'navbar-light' : ''}`}>
            <span className="navbar-left">Othmane<span>.</span></span>

            <ul className="navbar-links">
                <li className={activeSection === 'home' ? 'active' : ''}><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></li>
                <li className={activeSection === 'about' ? 'active' : ''}><a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a></li>
                <li className={activeSection === 'portfolio' ? 'active' : ''}><a href="#portfolio" style={{ color: 'inherit', textDecoration: 'none' }}>Portfolio</a></li>
            </ul>

            <div className="navbar-right">
                <div className="navbar-icons">
                    <a href="https://github.com/Therefore1" target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/othmane-el-messaoudi/" target="_blank" rel="noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href="mailto:otmaneelmessaoudi12@gmail.com">
                        <img src={mailIcon} alt="Mail" />
                    </a>
                </div>

                <span 
                    className="contact-btn" 
                    onClick={() => {
                        const contactEl = document.getElementById('contact');
                        if (contactEl) {
                            contactEl.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    Contact me
                </span>
            </div>
        </nav>
    );
}