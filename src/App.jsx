import React, { useState } from 'react';
import './App.css'; // Optional for styling

function App() {
  // State to control collapsible sections
  const [showObjective, setShowObjective] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sai Atchyuth Penumaka's Resume</h1>
        
        {/* Personal Information Section */}
        <h2>About Me</h2>
        <p>3rd CST, B.Tech Student at Sasi Institute of Technology Engineering</p>
        <p>Fullstack Developer Learner (Basic Level)</p>
        
        {/* Collapsible Objective Section */}
        <section className="section objective">
          <h3 onClick={() => setShowObjective(!showObjective)} className="collapsible">
            Objective
          </h3>
          {showObjective && (
            <p>
              Aspiring Fullstack Developer with a passion for coding and problem-solving. 
              Eager to leverage academic knowledge and hands-on experience in web development 
              to contribute to innovative projects and grow in a dynamic professional environment.
            </p>
          )}
        </section>
        
        {/* Collapsible Skills Section */}
        <section className="section">
          <h3 onClick={() => setShowSkills(!showSkills)} className="collapsible">
            Skills
          </h3>
          {showSkills && (
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB, SQL</li>
              <li>Git, GitHub</li>
              <li>REST APIs</li>
            </ul>
          )}
        </section>
        
        {/* Collapsible Education Section */}
        <section className="section education">
          <h3 onClick={() => setShowEducation(!showEducation)} className="collapsible">
            Education
          </h3>
          {showEducation && (
            <p>
              <strong>B.Tech in Computer Science & Technology</strong><br />
              Sasi Institute of Technology and Engineering, 2023 - Present
              <p><strong> Diploma in Mechanical Engineering </strong><br/>
              Sri Venkateswara Institute of Science and Information Technology, 2018-2021
              <p><strong>completed Secondary Eduction with 7.3 cgpa </strong><br/>
              ZPHS Madduru
              </p>
              </p>
            </p>
      
          )}
        </section>
        
        
        
        {/* Collapsible Contact Section */}
        <section className="section">
          <h3 onClick={() => setShowContact(!showContact)} className="collapsible">
            Contact
          </h3>
          {showContact && (
            <ul>
              <li><a href="mailto:saiatchyuth@example.com">Email: saiatchyuth@example.com</a></li>
              <li><a href="https://github.com/saiatchyuth" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/saiatchyuth" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          )}
        </section>
      </header>
    </div>
  );
}

export default App;
