interface ExperimentCardProps {
  image: string;
  alt: string;
  span?: 'small' | 'medium' | 'large' | 'wide';
}

const ExperimentCard = ({ image, alt, span = 'small' }: ExperimentCardProps) => {
  const spanClasses = {
    small: 'col-span-1',
    medium: 'col-span-1 row-span-1',
    large: 'col-span-1 row-span-2',
    wide: 'col-span-2 row-span-1',
  };

  return (
    <article className={`group cursor-pointer ${spanClasses[span]}`}>
      <div className="project-card h-full overflow-hidden">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </article>
  );
};

export default ExperimentCard;
