import logo from "@/assets/miss-platinum-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-darker-bg border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <img 
              src={logo} 
              alt="Miss Platinum" 
              className="w-20 h-20 object-contain mb-4 mx-auto md:mx-0"
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              Where strength meets lifestyle. Transform your body, elevate your mind.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2024 Miss Platinum. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Sabah Al Salem, Kuwait
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
