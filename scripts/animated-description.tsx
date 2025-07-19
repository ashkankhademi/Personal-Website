import React from 'react';

export const AboutBox = () => {
    return (
        <div className="animated-box">
            <h4>About Me</h4>
            <ul className="animated-list">
                <li><span>🎓 Recent Computer Science graduate from York University</span></li>
                <li><span>💼 Internship experience at ReliablyME</span></li>
                <li><span>🛠️ Skilled in Java, JavaScript, React, Node.js, Python, and AI/ML</span></li>
                <li><span>🚀 Passionate about building innovative solutions</span></li>
            </ul>
            <p className="animated-bio">
                Through my academic projects and professional experience, I’ve developed full-stack applications,
                automated predictive models, and AI-based cybersecurity tools.
                I’m eager to bring my problem-solving skills to a dynamic development team.
            </p>
            <div className="button-group animated-buttons">
                <a
                    href="/Personal-Website/AshkanKhademi_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    📘 View Resume
                </a>
                <a href="/Personal-Website/projects.html" className="btn btn-outline-secondary">
                    💻 My Projects
                </a>
            </div>
        </div>
    );
};



