import ExperimentCard from './ExperimentCard';

import exp1 from '@/assets/experiments/exp-1.png';
import exp2 from '@/assets/experiments/exp-2.png';
import exp3 from '@/assets/experiments/exp-3.png';
import exp4 from '@/assets/experiments/exp-4.png';
import exp5 from '@/assets/experiments/exp-5.png';
import exp6 from '@/assets/experiments/exp-6.png';
import exp7 from '@/assets/experiments/exp-7.png';
import exp8 from '@/assets/experiments/exp-8.png';
import exp9 from '@/assets/experiments/exp-9.png';
import exp10 from '@/assets/experiments/exp-10.png';
import exp11 from '@/assets/experiments/exp-11.png';
import exp12 from '@/assets/experiments/exp-12.png';

const experiments = [
  { image: exp1, alt: 'iOS Widget Concept', span: 'small' as const },
  { image: exp2, alt: '3D Character Illustration', span: 'small' as const },
  { image: exp3, alt: 'Abstract Orb', span: 'small' as const },
  { image: exp4, alt: 'AI Explain Feature', span: 'small' as const },
  { image: exp5, alt: 'Icon Design', span: 'wide' as const },
  { image: exp6, alt: 'Revenue Chart', span: 'large' as const },
  { image: exp7, alt: 'Ethereum Crystal', span: 'small' as const },
  { image: exp10, alt: 'Abstract Sun', span: 'small' as const },
  { image: exp8, alt: 'Profile Card Design', span: 'large' as const },
  { image: exp9, alt: 'Hydration Tracker', span: 'small' as const },
  { image: exp11, alt: 'Neon Portal', span: 'large' as const },
  { image: exp12, alt: 'Mask & Gradient Tutorial', span: 'large' as const },
];

const ExperimentsSection = () => {
  return (
    <section className="portfolio-grid-experiments auto-rows-[200px]">
      {experiments.map((exp, index) => (
        <ExperimentCard
          key={index}
          image={exp.image}
          alt={exp.alt}
          span={exp.span}
        />
      ))}
    </section>
  );
};

export default ExperimentsSection;
