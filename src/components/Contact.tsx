import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Sabah Al Salem", "Kuwait City, Kuwait"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+965 XXXX XXXX"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@missplatinum.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Access", "Staff: 6 AM - 10 PM"]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              GET IN <span className="text-primary">TOUCH</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your transformation? Visit us today for a free tour and consultation.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-2xl p-12 text-center border border-primary/20">
            <h3 className="text-3xl font-black mb-4">
              READY TO <span className="text-primary">TRANSFORM?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Miss Platinum today and become part of a community dedicated to excellence, strength, and transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="hero" className="px-8">
                Book Free Tour
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Join Now
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
