// scripts/animated-description.tsx
import React from "react";

export const AnimatedDescription: React.FC = () => {
    return (
        <div className="animated-box fade-in">
            <h4>🧠 About Me</h4>
            <ul>
                <li>🎓 Recent Computer Science graduate from York University</li>
                <li>💼 Internship experience at ReliablyME</li>
                <li>🔧 Skilled in Java, JavaScript, React, Node.js, Python, and AI/ML</li>
                <li>🚀 Passionate about building innovative solutions</li>
            </ul>
            <p>
                Through my academic projects and professional experience, I've developed full-stack applications, automated predictive models, and AI-based cybersecurity tools. I'm eager to bring my problem-solving skills to a dynamic development team.
            </p>
        </div>
    );
};

