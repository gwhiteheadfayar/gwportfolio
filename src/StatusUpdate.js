import React from 'react';
import LastFmScrobbles from './LastFmScrobbles';

function StatusUpdate() {
  return (
    <div className="status-update">
      <h1 className="title-style">About me</h1>
      <div className="scrobbles-card" style={{pointerEvents: 'None'}}>
        <p style={{textAlign: 'left'}}>My name is Garrett Whitehead. I'm a graduate from the University of Arkansas with a Bachelor's of Science in Computer Science. I like movies, music, games, architecture, design, and programming.</p>
      </div>
      <h1 className="title-style">Experience</h1>
      <div className="scrobbles-card" style={{pointerEvents: 'None'}}>
        <p style={{textAlign: 'left'}}>I have more than 2 years of industry experience in software engineering at J.B. Hunt. <br></br><br></br>Proficient in React, React Native, Angular, Firebase, Python, C++, Java, and more.<br></br><br></br></p>
        <a target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" />
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="React Native" />
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Firebase_icon.svg" alt="Firebase" />
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="Angular" />
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++" />
        </a>
        <a target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/it/2/2e/Java_Logo.svg" alt="Java" />
        </a>
      </div>
      <LastFmScrobbles />
    </div>
  );
}

export default StatusUpdate;