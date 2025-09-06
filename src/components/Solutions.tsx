import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const Solutions = () => {
  const solutions = [
    {
      category: "Process Automation",
      items: [
        "Automated workflow triggers",
        "Custom process builders",
        "Integration capabilities",
        "Approval management"
      ]
    },
    {
      category: "Data Analytics", 
      items: [
        "Real-time dashboards",
        "Predictive analytics",
        "Custom reporting",
        "Performance metrics"
      ]
    },
    {
      category: "Efficiency Optimization",
      items: [
        "Resource allocation",
        "Bottleneck identification", 
        "Process optimization",
        "Productivity insights"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Complete Business{" "}
              <span className="gradient-text">Optimization Suite</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your business operations with our comprehensive suite of optimization tools. 
              From automation to analytics, we've got everything covered.
            </p>

            <div className="space-y-8 mb-8">
              {solutions.map((solution, index) => (
                <div 
                  key={solution.category}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {solution.category}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {solution.items.map((item) => (
                      <div key={item} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Button className="btn-hero text-lg">
              Explore All Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Image */}
          <div className="animate-slide-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
              <img
                src={teamCollaboration}
                alt="Team collaboration and business optimization"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;