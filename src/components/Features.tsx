import { 
  Workflow, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  Target 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline complex business processes with intelligent workflow builders."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into your business performance with comprehensive analytics and real-time reporting."
    },
    {
      icon: Zap,
      title: "Performance Tracking",
      description: "Monitor KPIs and track performance metrics in real-time to make informed business decisions."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, compliance management, and secure data handling."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enable seamless collaboration across teams with shared workspaces and communication tools."
    },
    {
      icon: Target,
      title: "Goal Management",
      description: "Set, track, and achieve business objectives with our comprehensive goal management system."
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for{" "}
            <span className="gradient-text">Modern Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to optimize your business operations and drive growth. 
            Built for teams that want to work smarter, not harder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;