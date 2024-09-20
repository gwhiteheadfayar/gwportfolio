import React from 'react';
import ProjectCard from './ProjectCard';
import './App.css';

const projects = [
  {
    name: 'My Resume',
    description: 'Click here to find my formal resume!',
    url: './Garrett_Whitehead_Resume.pdf',
    openResume: true,
  },
  {
    name: 'Leave me a message!',
    description: 'Send me a doodle to let me know you\'ve been here!',
    url: 'https://doodlewall.netlify.app/',
    openResume: false,
  },
  {
    name: 'Custom-size NYT Connections Game',
    description: 'My take on the NYT game \'connections\', where users can make a custom size game board and share it with friends.',
    url: 'https://customsizeconnections.netlify.app/',
    openResume: false,
  },
  {
    name: 'Cover Collections',
    description: 'A site where you can view collections of book cover styles I found interesting.',
    url: 'https://github.com/gwhiteheadfayar/cover_collections',
    openResume: false,
  },
  {
    name: 'Chess.com Elo Protection Extension',
    description: 'A simple chrome extension that prevents you from quickly re-queueing a game on chess.com after a loss.',
    url: 'https://github.com/gwhiteheadfayar/extension-antiragequeue',
    openResume: false,
  },
  {
    name: 'Tsuro Board Game in Browser',
    description: 'Repository for my work in progress implementation of the game \'Tsuro\' as a react web app.',
    url: 'https://github.com/gwhiteheadfayar/orust',
    openResume: false,
  },
  {
    name: '2023 Uark Hackathon Project - SpoilScanner',
    description: 'My group\'s project for the 2023 Uark Hackathon. Managed fridge contents to notify users when spoilage was happening.',
    url: 'https://github.com/gwhiteheadfayar/SpoilScanner',
    openResume: false,
  },
  // Add more projects here
];

function Projects() {
  const handleProjectClick = (project) => {
    if (project.openResume) {
      window.open(`${process.env.PUBLIC_URL}/Garrett_Whitehead_Resume.pdf`, '_blank');
    } else {
      window.open(project.url, '_blank');
    }
  };

  return (
    <div>
      <h1 className="title-style">Projects / Experiments</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={handleProjectClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;