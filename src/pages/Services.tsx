import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, Wrench, Settings, CheckCircle, Droplets, Filter, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Installation & Setup",
      description: "Professional installation of all water purification systems with comprehensive testing and commissioning.",
      features: ["Expert technician visit", "Complete system setup", "Water quality testing", "User training"]
    },
    {
      icon: Settings,
      title: "Repair & Maintenance",
      description: "Complete repair services and annual maintenance contracts to ensure optimal performance.",
      features: ["24/7 service support", "Genuine spare parts", "Preventive maintenance", "Emergency repairs"]
    },
    {
      icon: Filter,
      title: "Filter Replacement",
      description: "Timely replacement of filters and membranes to maintain water quality standards.",
      features: ["Filter life monitoring", "Scheduled replacements", "Quality assurance", "Performance optimization"]
    },
    {
      icon: CheckCircle,
      title: "Water Quality Testing",
      description: "Comprehensive water analysis and quality monitoring for residential and commercial applications.",
      features: ["TDS measurement", "pH level testing", "Bacterial analysis", "Quality reports"]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-aqua-flow/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-primary/15 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-aqua-flow/10 rounded-full animate-bounce delay-2000"></div>
        
        {/* Floating water drops */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Droplets className="w-32 h-32 text-primary/5 animate-pulse" />
        </div>
        <div className="absolute top-1/3 left-1/5 transform -translate-x-1/2 -translate-y-1/2">
          <Waves className="w-24 h-24 text-aqua-flow/10 animate-pulse delay-1000" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <Filter className="w-28 h-28 text-primary/8 animate-pulse delay-1500" />
        </div>
        
        {/* Animated maintenance tools */}
        <div className="absolute top-20 right-10">
          <Wrench className="w-16 h-16 text-primary/10 animate-spin" style={{ animationDuration: '8s' }} />
        </div>
        <div className="absolute bottom-32 left-16">
          <Settings className="w-14 h-14 text-aqua-flow/15 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
        </div>
      </div>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="h-6 w-px bg-border"></div>
            <h1 className="text-2xl font-bold text-primary">Our Services</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Professional Water
            <span className="block bg-gradient-to-r from-primary to-aqua-flow bg-clip-text text-transparent">
              Maintenance Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert maintenance and repair services for all types of water purifiers. 
            Ensuring clean, safe water with professional care and genuine parts.
          </p>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-aqua-flow p-8 rounded-2xl text-white mb-12 shadow-[var(--shadow-aqua)]">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Maintenance?</h2>
            <p className="text-xl mb-6 text-white/90">
              Our expert technicians are ready to help you maintain your water purifier
            </p>
            <Button size="lg" variant="glass" className="text-lg px-8 py-4 bg-white/20 hover:bg-white/30 border-white/30">
              <Phone className="mr-2 h-5 w-5" />
              Call Now for Maintenance
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-aqua)] transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/10 to-aqua-flow/10 rounded-full w-fit">
                  <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Our Services */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-[var(--shadow-card)] mb-12">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Why Choose Our Maintenance Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-aqua-flow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Technicians</h3>
              <p className="text-muted-foreground">Trained and certified professionals with 20+ years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-aqua-flow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Genuine Parts</h3>
              <p className="text-muted-foreground">Only authentic spare parts and filters for optimal performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-aqua-flow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock customer support for emergency repairs</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary to-aqua-flow text-white px-8 py-4 rounded-full shadow-[var(--shadow-aqua)]">
            <Phone className="h-6 w-6" />
            <span className="text-lg font-semibold">Emergency Service: +91-XXX-XXX-XXXX</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;