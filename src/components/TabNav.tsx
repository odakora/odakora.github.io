interface TabNavProps {
  activeTab: 'works' | 'experiments';
  onTabChange: (tab: 'works' | 'experiments') => void;
}

const TabNav = ({ activeTab, onTabChange }: TabNavProps) => {
  return (
    <div className="flex items-center gap-2 mb-12">
      <button
        onClick={() => onTabChange('works')}
        className={`tab-pill ${activeTab === 'works' ? 'tab-pill-active' : 'tab-pill-inactive'}`}
      >
        Works
      </button>
      <button
        onClick={() => onTabChange('experiments')}
        className={`tab-pill ${activeTab === 'experiments' ? 'tab-pill-active' : 'tab-pill-inactive'}`}
      >
        Experiments
      </button>
    </div>
  );
};

export default TabNav;
