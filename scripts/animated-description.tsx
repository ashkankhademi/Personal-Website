import React from 'react';

export const AboutBox = () => {
    return (
        <div className="animated-box">
            <h4>About Me</h4>
            <ul className="animated-list">
                <li>
                    <i className="fas fa-graduation-cap" aria-hidden="true"></i>
                    <span>Completing an M.Eng in Electrical & Computer Engineering (AI Concentration) at Toronto Metropolitan University, building on a BSc in Computer Science from York University</span>
                </li>
                <li>
                    <i className="fas fa-code" aria-hidden="true"></i>
                    <span>Skilled in Python, PyTorch, Hugging Face Transformers, FastAPI, Java, JavaScript, React, and Node.js</span>
                </li>
                <li>
                    <i className="fas fa-rocket" aria-hidden="true"></i>
                    <span>Driven by building software that puts AI to practical use</span>
                </li>
            </ul>
            <p className="animated-bio">
                Through my internships, I’ve gained hands-on experience building LLM-powered applications and data-driven forecasting models, complemented by graduate research in the Trustworthy AI Lab at TMU on making AI toxicity detection more reliable. I’m always eager to learn, take on new challenges, and connect with people working on interesting problems. Please feel free to reach out!
            </p>
            <div className="button-group animated-buttons">
                <a
                    href="/Personal-Website/AshkanKhademi_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    <i className="fas fa-file-alt me-2" aria-hidden="true"></i>View Resume
                </a>
                <a href="/Personal-Website/projects.html" className="btn btn-outline-secondary">
                    <i className="fas fa-laptop-code me-2" aria-hidden="true"></i>My Projects
                </a>
            </div>
        </div>
    );
};
