import ProjectCard from './ProjectCard';

import project1 from '@/assets/works/project-1.png';
import project2 from '@/assets/works/project-2.png';
import project3 from '@/assets/works/project-3.png';

const projects = [
  {
    image: project1,
    title: 'Dashboard Design for a Crypto Mining Pool',
    description: 'Designed a monitoring tool for web and mobile apps. Available at Play Market and App Store',
  },
  {
    image: project2,
    title: 'Dashboard Design for a Crypto Mining Pool',
    description: 'Designed a monitoring tool for web and mobile apps. Available at Play Market and App Store',
  },
  {
    image: project3,
    title: 'Dashboard Design for a Crypto Mining Pool',
    description: 'Designed a monitoring tool for web and mobile apps. Available at Play Market and App Store',
  },
];

const WorksSection = () => {
  return (
    <section className="portfolio-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
        />
      ))}
    </section>
  );
};

export default WorksSection;
