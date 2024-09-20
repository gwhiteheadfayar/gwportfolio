import React from 'react';
import './App.css';

function About() {
  const handleEmailClick = () => {
    navigator.clipboard.writeText('glwhiteh@uark.edu'); // Copy email to clipboard
  };

  return (
    <div className='about-properties'>
      <h1>Garrett Whitehead</h1>
      <p >This my site. Please look around!</p>
      <p onClick={handleEmailClick}>Email - glwhiteh@uark.edu</p>

      <div className="social-icons">
        <a href="https://instagram.com/garrettlwhitehead/" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/240px-Instagram_icon.png" alt="Instagram" />
        </a>
        <a href="https://github.com/gwhiteheadfayar/" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/240px-Octicons-mark-github.svg.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/garrett-whitehead/" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png" alt="LinkedIn" />
        </a>
        <a href="https://open.spotify.com/user/garrettwspotify/" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/232px-Spotify_icon.svg.png" alt="Spotify" />
        </a>
        <a href="https://letterboxd.com/webapi/" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Letterboxd_2023_logo.png/240px-Letterboxd_2023_logo.png" alt="Letterboxd" />
        </a>
      </div>
    </div>

    
  );
}

export default About;
