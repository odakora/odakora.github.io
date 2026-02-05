const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="flex justify-between items-center py-12 mt-16 border-t border-border">
      <p className="font-body text-sm text-muted-foreground">
        © {currentYear} Maria Kul
      </p>
      <nav className="flex items-center gap-8">
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
    </footer>
  );
};

export default Footer;
