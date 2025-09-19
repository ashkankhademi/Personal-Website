import React from 'react';

export const AboutBox: React.FC = () => {
    return (
        <div className="animated-box">
            <h4 style={{ textAlign: 'center' }}>About Me</h4>
            <ul>
                <li>🎓 Recent Computer Science graduate from York University</li>
                <li>🔧 Skilled in Java, JavaScript, React, Node.js, Python, and AI/ML</li>
                <li>🚀 Passionate about building innovative solutions</li>
            </ul>
            <p>
                Through my academic projects and professional experience, I've developed full-stack applications, automated predictive models,
                and AI-based cybersecurity tools. I'm eager to bring my problem-solving skills to a dynamic development team.
            </p>
            <div className="button-group" style={{ textAlign: 'center', marginTop: '1rem' }}>
                <a href="/AshkanKhademi_Resume.pdf" className="btn btn-primary btn-lg">
                    <i className="fas fa-file-alt me-2"></i>View Resume
                </a>
                <a href="/projects.html" className="btn btn-outline-secondary btn-lg">
                    <i className="fas fa-code me-2"></i>My Projects
                </a>
            </div>
        </div>
    );
};




