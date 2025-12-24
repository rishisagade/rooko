import { Home, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "About", href: "/about", isRoute: true },
    { label: "Projects", href: isHomePage ? "#projects" : "/#projects", isRoute: false },
    { label: "Skills", href: isHomePage ? "#skills" : "/#skills", isRoute: false },
    { label: "Resume", href: "https://drive.google.com/file/d/1WLmSRFI-0-JCGn0yALMfE422g9cg3QZF/view?usp=sharing", isRoute: false, isExternal: true },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact", isRoute: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
        </Link>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            item.isRoute ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : item.isExternal ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
