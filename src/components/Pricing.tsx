import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "25",
      period: "month",
      description: "Perfect for getting started",
      features: [
        "Access to gym floor",
        "Basic equipment use",
        "Locker room access",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "45",
      period: "month",
      description: "Most popular choice",
      features: [
        "Everything in Starter",
        "Unlimited group classes",
        "Personal training sessions (2/month)",
        "Nutrition consultation",
        "Priority booking"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "75",
      period: "month",
      description: "Ultimate transformation",
      features: [
        "Everything in Pro",
        "Unlimited personal training",
        "Custom meal planning",
        "Recovery & massage therapy",
        "Exclusive member events",
        "Guest passes (5/month)"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-dark-bg to-darker-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            MEMBERSHIP <span className="text-primary">PLANS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your fitness journey. All memberships include 24/7 access.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.popular 
                  ? 'border-primary shadow-2xl shadow-primary/20 scale-105 bg-card' 
                  : 'border-border bg-card hover:border-primary/50'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  POPULAR
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-black mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {plan.description}
                </CardDescription>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-black text-primary">{plan.price}</span>
                  <span className="text-xl text-muted-foreground mb-2">KD/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button 
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need a custom plan? <span className="text-primary font-semibold cursor-pointer hover:underline">Contact us</span> for enterprise and family packages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
