import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About CloudNotebook</h1>
        
        <div className="about-section">
          <h2>What is CloudNotebook?</h2>
          <p>
            CloudNotebook is a secure, cloud-based note-taking application that allows you to 
            create, manage, and organize your notes from anywhere. Built with modern web 
            technologies, it provides a seamless experience for all your note-taking needs.
          </p>
        </div>

        <div className="about-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🔐 Secure Authentication</h3>
              <p>Create your account and login securely to access your personal workspace.</p>
            </div>
            <div className="feature-card">
              <h3>📝 Create & Edit Notes</h3>
              <p>Write and edit your notes with ease using our intuitive interface.</p>
            </div>
            <div className="feature-card">
              <h3>🗑️ Manage Notes</h3>
              <p>Organize your thoughts by editing or deleting notes whenever needed.</p>
            </div>
            <div className="feature-card">
              <h3>☁️ Cloud Storage</h3>
              <p>Your notes are safely stored in the cloud and accessible from any device.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <span className="step-number">1</span>
              <div className="step-content">
                <h4>Sign Up</h4>
                <p>Create your free CloudNotebook account</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <div className="step-content">
                <h4>Login</h4>
                <p>Access your personal dashboard securely</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <div className="step-content">
                <h4>Create Notes</h4>
                <p>Start writing and organizing your thoughts</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <div className="step-content">
                <h4>Manage</h4>
                <p>Edit, delete, and organize your notes as needed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Built With</h2>
          <div className="tech-stack">
            <span className="tech-item">React.js</span>
            <span className="tech-item">Express.js</span>
            <span className="tech-item">Node.js</span>
            <span className="tech-item">Secure Authentication</span>
          </div>
        </div>

        <div className="about-section">
          <h2>Why Choose CloudNotebook?</h2>
          <p>
            CloudNotebook combines simplicity with security, giving you a reliable platform 
            to store your thoughts, ideas, and important information. Whether you're a student, 
            professional, or anyone who likes to stay organized, CloudNotebook provides the 
            tools you need to keep your notes safe and accessible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;