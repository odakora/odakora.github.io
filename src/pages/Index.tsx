import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TabNav from '@/components/TabNav';
import WorksSection from '@/components/WorksSection';
import ExperimentsSection from '@/components/ExperimentsSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'works' | 'experiments'>('works');

  return (
    <div className="min-h-screen bg-background">
      <main className="portfolio-container">
        <Header />
        <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === 'works' ? (
          <WorksSection />
        ) : (
          <ExperimentsSection />
        )}
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
