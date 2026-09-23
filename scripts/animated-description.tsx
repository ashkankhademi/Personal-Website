import React from 'react';

export const AboutBox = () => {
    return (
        <div className="animated-box">
            <h4>About Me</h4>
            <ul className="animated-list">
                <li><span>🧑‍🎓 Computer Science graduate from York University, currently pursuing an M.Eng in Electrical & Computer Engineering (AI Concentration) at TMU</span></li>

                <li><span>🛠️ Skilled in Java, JavaScript, React, Node.js, Python, and AI/ML</span></li>
                <li><span>🚀 Passionate about building innovative, real-world solutions</span></li>
            </ul>
            <p className="animated-bio">
                With hands-on experience from academic projects and professional work, I’ve built full-stack apps, predictive models, and AI-powered cybersecurity tools. I’m always excited to bring creative problem-solving to dynamic development teams.
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



