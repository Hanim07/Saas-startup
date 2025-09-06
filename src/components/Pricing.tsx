import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses and startups getting started with optimization.",
      features: [
        "Up to 5 team members",
        "Basic workflow automation", 
        "Standard analytics dashboard",
        "Email support",
        "5GB storage",
        "Basic integrations"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional", 
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses that need advanced features and better insights.",
      features: [
        "Up to 25 team members",
        "Advanced workflow automation",
        "Advanced analytics & reporting", 
        "Priority support",
        "50GB storage",
        "All integrations",
        "Custom dashboards",
        "API access"
      ],
      cta: "Start Free Trial", 
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399", 
      period: "/month",
      description: "For large organizations that need maximum control, security, and customization.",
      features: [
        "Unlimited team members",
        "Enterprise workflow automation",
        "Advanced analytics & AI insights",
        "24/7 dedicated support",
        "Unlimited storage", 
        "Custom integrations",
        "White-label options",
        "SSO & advanced security",
        "Custom training"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`pricing-card animate-fade-up ${plan.popular ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <Button 
                  className={plan.popular ? "btn-hero w-full" : "btn-secondary w-full"}
                >
                  {plan.cta}
                  {plan.popular && <Zap className="ml-2 h-4 w-4" />}
                </Button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We offer tailored packages for enterprises.
          </p>
          <Button variant="outline" className="border-2">
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;