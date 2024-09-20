// src/components/ProjectCard.js
import React from 'react';

function ProjectCard({ project, onClick }) {
  return (
    <div
      className="project-card"
      onClick={() => onClick(project)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'; // for hover effect
        e.currentTarget.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)'; // for hover effect
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'; // for hover effect
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // for hover effect
      }}
    >
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;