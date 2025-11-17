import { Dumbbell, Users, Award, Clock } from "lucide-react";
import trainingSession from "@/assets/training-session.jpg";

const About = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Premium Equipment",
      description: "State-of-the-art machines and free weights from top brands"
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Certified professionals dedicated to your success"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Customized programs that deliver real transformations"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "24/7 access to fit your lifestyle and schedule"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-darker-bg to-dark-bg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/0 rounded-lg blur-lg group-hover:blur-xl transition-all duration-500" />
            <img 
              src={trainingSession} 
              alt="Training Session" 
              className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              WHERE <span className="text-primary">STRENGTH</span>
              <br />
              MEETS LIFESTYLE
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Miss Platinum, we're more than just a gym — we're a community built on dedication, motivation, and transformation. Our state-of-the-art facility in Sabah Al Salem is designed for everyone, whether you're taking your first steps into fitness or pushing for peak performance.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
