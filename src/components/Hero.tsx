import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import heroGym from "@/assets/hero-gym.jpg";
import logo from "@/assets/miss-platinum-logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroGym})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-darker-bg/95 via-dark-bg/90 to-darker-bg/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <img 
            src={logo} 
            alt="Miss Platinum" 
            className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(139,195,74,0.3)]"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <span className="text-foreground">UNLEASH YOUR</span>
          <br />
          <span className="text-primary drop-shadow-[0_0_20px_rgba(139,195,74,0.5)]">
            POWER
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Premium fitness experience in Sabah Al Salem. Transform your body, elevate your mind, and unlock your potential.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg px-8 py-6 group"
          >
            <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Start Your Journey
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View Memberships
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">500+</div>
            <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">50+</div>
            <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">Programs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">24/7</div>
            <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">Access</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
