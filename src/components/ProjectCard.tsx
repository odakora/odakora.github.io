import { Link } from 'react-router-dom';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  id: string;
}

const ProjectCard = ({ image, title, description, id }: ProjectCardProps) => {
  return (
    <Link to={`/case/${id}`}>
      <article className="group cursor-pointer">
        <div className="project-card mb-6">
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <h3 className="font-body font-semibold text-lg mb-2 group-hover:text-foreground/80 transition-colors">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </article>
    </Link>
  );
};

export default ProjectCard;
