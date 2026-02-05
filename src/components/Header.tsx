const Header = () => {
  return (
    <header className="flex justify-between items-start pt-16 pb-8">
      <div className="max-w-md">
        <h1 className="font-display text-5xl font-bold tracking-tight mb-4">
          Maria Kul
        </h1>
        <p className="font-body text-base leading-relaxed text-muted-foreground">
          Product designer creating human-centered interfaces that make
          complex systems clear, usable, and visually engaging. Product
          designer creating human-centered interfaces
        </p>
      </div>
      <nav className="flex items-center gap-8 pt-2">
        <a href="https://linkedin.com" className="nav-link" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
        <a href="https://telegram.org" className="nav-link" target="_blank" rel="noopener noreferrer">
          Telegram
        </a>
        <a href="#" className="nav-link">
          CV
        </a>
      </nav>
    </header>
  );
};

export default Header;
