// โค้ด ProjectCard.jsx ที่แก้ไขแล้ว
import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        
        <div className="project-links">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <ExternalLink size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;