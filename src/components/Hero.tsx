import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-800" />
      
      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Optimize Your Business{" "}
              <span className="gradient-text">Operations</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Streamline workflows, boost efficiency, and make data-driven decisions with our 
              comprehensive business optimization platform. Transform your operations today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-hero text-lg px-10 py-7">
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="animate-slide-left lg:order-last">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 blur-2xl" />
              <img
                src={dashboardMockup}
                alt="Openlayer Dashboard Interface"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;