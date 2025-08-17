import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/portfolioData';
import './Projects.css';

function Projects() {
  // ไม่ต้องใช้ useState และส่วนของการกรอง (filter) แล้ว
  
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>

        {/* นำส่วนของ project-filters ออก */}
        
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="no-projects">
            <p>No projects found.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;