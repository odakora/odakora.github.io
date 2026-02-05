import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import heroMockup from '@/assets/case/hero-mockup.png';
import placeholder1 from '@/assets/case/placeholder-1.png';
import placeholder2 from '@/assets/case/placeholder-2.png';
import placeholder4 from '@/assets/case/placeholder-4.png';

const caseStudies = {
  '1': {
    title: 'User Profile for Affiliate Program',
    description: 'Designed a new service that increases PAB metrics by 40% and retention — x2. Designed responsive tables with open-source design system that saved 1.5 times more resources for business',
    seeProduct: 'See Product',
    heroImage: heroMockup,
    problem: {
      title: 'Problem',
      description: 'Designed a monitoring tool for web and mobile apps. Available for Android and iOS'
    },
    solution: {
      title: 'Solution',
      items: [
        'Designed a monitoring tool for web and mobile apps. Available for Android and iOS',
        'Designed a new service that increases PAB metrics by 40% and retention — x2.',
        'Designed responsive tables with open-source design system that saved 1.5 times more resources for business',
        'Designed a new service that increases PAB metrics by 40% and retention — x2.'
      ]
    },
    results: {
      title: 'Results',
      items: [
        { metric: '112%', label: 'retention growth' },
        { metric: 'x2', label: 'reduced time to task' },
        { metric: '37%', label: 'user loyalty increase' }
      ]
    }
  },
  '2': {
    title: 'Dashboard Design for Crypto Mining Pool',
    description: 'Designed a new service that increases PAB metrics by 40% and retention — x2. Designed responsive tables with open-source design system that saved 1.5 times more resources for business',
    seeProduct: 'See Product',
    heroImage: heroMockup,
    problem: {
      title: 'Problem',
      description: 'Designed a monitoring tool for web and mobile apps. Available for Android and iOS'
    },
    solution: {
      title: 'Solution',
      items: [
        'Designed a monitoring tool for web and mobile apps. Available for Android and iOS',
        'Designed a new service that increases PAB metrics by 40% and retention — x2.',
        'Designed responsive tables with open-source design system that saved 1.5 times more resources for business',
        'Designed a new service that increases PAB metrics by 40% and retention — x2.'
      ]
    },
    results: {
      title: 'Results',
      items: [
        { metric: '112%', label: 'retention growth' },
        { metric: 'x2', label: 'reduced time to task' },
        { metric: '37%', label: 'user loyalty increase' }
      ]
    }
  },
  '3': {
    title: 'Mobile Banking App Redesign',
    description: 'Designed a new service that increases PAB metrics by 40% and retention — x2. Designed responsive tables with open-source design system that saved 1.5 times more resources for business',
    seeProduct: 'See Product',
    heroImage: heroMockup,
    problem: {
      title: 'Problem',
      description: 'Designed a monitoring tool for web and mobile apps. Available for Android and iOS'
    },
    solution: {
      title: 'Solution',
      items: [
        'Designed a monitoring tool for web and mobile apps. Available for Android and iOS',
        'Designed a new service that increases PAB metrics by 40% and retention — x2.',
        'Designed responsive tables with open-source design system that saved 1.5 times more resources for business',
        'Designed a new service that increases PAB metrics by 40% and retention — x2.'
      ]
    },
    results: {
      title: 'Results',
      items: [
        { metric: '112%', label: 'retention growth' },
        { metric: 'x2', label: 'reduced time to task' },
        { metric: '37%', label: 'user loyalty increase' }
      ]
    }
  }
};

const CaseStudy = () => {
  const { id } = useParams();
  const caseData = caseStudies[id as keyof typeof caseStudies] || caseStudies['1'];

  return (
    <div className="min-h-screen bg-background">
      <main className="portfolio-container py-12">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-body text-foreground/80 hover:text-foreground transition-colors mb-12 border border-border rounded-full px-4 py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>

        {/* Hero Section */}
        <section className="portfolio-grid mb-24">
          <div className="flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              {caseData.title}
            </h1>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              {caseData.description}
            </p>
            <a href="#" className="font-body text-sm font-medium text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors">
              {caseData.seeProduct}
            </a>
          </div>
          <div className="project-card">
            <img 
              src={caseData.heroImage} 
              alt={caseData.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Problem Section */}
        <section className="portfolio-grid mb-24">
          <div>
            <h2 className="font-display text-xl font-bold mb-3">{caseData.problem.title}</h2>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              {caseData.problem.description}
            </p>
          </div>
          <div className="project-card aspect-[4/3]">
            <img 
              src={placeholder1} 
              alt="Problem visualization"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Large Image */}
        <section className="mb-24">
          <div className="project-card aspect-[16/9]">
            <img 
              src={placeholder2} 
              alt="Case study detail"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Solution Section */}
        <section className="portfolio-grid mb-24">
          <div>
            <h2 className="font-display text-xl font-bold mb-4">{caseData.solution.title}</h2>
            <ul className="space-y-3">
              {caseData.solution.items.map((item, index) => (
                <li key={index} className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="project-card aspect-[4/5]">
            <img 
              src={placeholder2} 
              alt="Solution visualization"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 2-Column Grid */}
        <section className="portfolio-grid mb-8">
          <div className="project-card aspect-[4/3]">
            <img 
              src={placeholder1} 
              alt="Design detail 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="project-card aspect-[4/3]">
            <img 
              src={placeholder1} 
              alt="Design detail 2"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 4-Column Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24" style={{ gap: 'calc(var(--portfolio-gutter) / 2)' }}>
          <div className="project-card aspect-[3/4]">
            <img 
              src={placeholder4} 
              alt="Detail 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="project-card aspect-[3/4]">
            <img 
              src={placeholder4} 
              alt="Detail 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="project-card aspect-[3/4]">
            <img 
              src={placeholder4} 
              alt="Detail 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="project-card aspect-[3/4]">
            <img 
              src={placeholder4} 
              alt="Detail 4"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Results Section */}
        <section className="portfolio-grid mb-24">
          <div className="project-card aspect-[3/4]">
            <img 
              src={placeholder2} 
              alt="Final result"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-xl font-bold mb-6">{caseData.results.title}</h2>
            <ul className="space-y-2">
              {caseData.results.items.map((result, index) => (
                <li key={index} className="font-body text-sm text-muted-foreground flex items-baseline gap-2">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0 mt-1.5"></span>
                  <span>
                    <strong className="text-foreground font-semibold">{result.metric}</strong> {result.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-body text-foreground/80 hover:text-foreground transition-colors border border-border rounded-full px-4 py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </main>
    </div>
  );
};

export default CaseStudy;
