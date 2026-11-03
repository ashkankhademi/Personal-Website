import React from 'react';

export const AboutBox = () => {
    return (
        <div className="animated-box">
            <h4>About Me</h4>
            <ul className="animated-list">
                <li><span>🧑‍🎓 Completing an M.Eng in Electrical & Computer Engineering (AI Concentration) at Toronto Metropolitan University, building on a BSc in Computer Science from York University</span></li>

                <li><span>🛠️ Skilled in Python, PyTorch, Hugging Face Transformers, FastAPI, Java, JavaScript, React, and Node.js</span></li>
                <li><span>🚀 Driven by building software that puts AI to practical use</span></li>
            </ul>
            <p className="animated-bio">
                I bring hands-on experience from three software internships, building LLM-powered applications at Communications & Power Industries (CPI) and TranQuility and data-driven forecasting models at ReliablyME, as well as from graduate research in the Trustworthy AI Lab at TMU on making AI toxicity detection more reliable. I’m always eager to learn, take on new challenges, and connect with people working on interesting problems. Please feel free to reach out!
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



