import { Target, Heart, TrendingUp, Flame, Users2, CalendarDays } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific goals and fitness level"
    },
    {
      icon: Users2,
      title: "Group Classes",
      description: "High-energy sessions including HIIT, Yoga, Spinning, and Functional Training"
    },
    {
      icon: TrendingUp,
      title: "Strength Training",
      description: "Build muscle and power with our comprehensive strength programs"
    },
    {
      icon: Flame,
      title: "Cardio Zone",
      description: "State-of-the-art cardio equipment to boost endurance and burn calories"
    },
    {
      icon: Heart,
      title: "Nutrition Guidance",
      description: "Personalized meal plans and nutritional coaching to fuel your results"
    },
    {
      icon: CalendarDays,
      title: "Flexible Scheduling",
      description: "24/7 access with sessions that fit your busy lifestyle"
    }
  ];

  return (
    <section id="services" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            OUR <span className="text-primary">PROGRAMS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From strength training and cardio to functional workouts and group classes, we offer a complete fitness ecosystem
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
