import './about.css';
import othmane from '../assets/Othmaaane.jpg';

export function About() {
    return (
        <section className="about" id="about">
            <div className="about-left">
                <div className="about-photo-container">
                    <img src={othmane} alt="Othmane El messaoudi" className="about-photo" />
                </div>
            </div>

            <div className="about-right">
                <div className="about-me-label">About me</div>
                <div className="about-subtitle">Computer Science & AI Engineering Student</div>
                <h2 className="about-title">
                    Othmane <span>El messaoudi</span>
                </h2>
                <div className="about-desc">
                    <p>
                        I'm Othmane El messaoudi, a Computer Science & AI engineering student passionate about turning data into actionable insights. I enjoy collaborating, learning as I contribute, and bringing curiosity, discipline, and reliability to every project. From building predictive models and dashboards to developing real-time AI applications, I focus on creating work that addresses real-world challenges.
                    </p>
                    <p>
                        I'm currently seeking summer internships or collaborative projects where I can grow, apply my skills, and make a tangible impact.
                    </p>
                </div>

                <div className="about-focus">
                    <h3>What I Focus On:</h3>
                    <div className="focus-tags">
                        <span className="focus-tag">Web Development</span>
                        <span className="focus-tag">Machine Learning</span>
                        <span className="focus-tag">Data Science</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
