import { ArrowRight, CheckCircle, Droplets, Filter, Phone, Mail, MapPin, Star, Users, Award, Zap, Shield, Wrench, Beaker, Waves, Factory, Building2, Hospital, ChefHat, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import heroImage from "@/assets/hero-water.jpg";
import productAmber from "@/assets/product-amber.jpg";
import productUndersink from "@/assets/product-undersink.jpg";
import purificationProcessClean from "@/assets/purification-process-clean.jpg";
import commercialPlant from "@/assets/commercial-plant.jpg";
import AchievementsSection from "@/components/AchievementsSection";

const Index = () => {
  const { addToCart, getTotalItems } = useCart();
  const products = [
    {
      name: "Amber/Amber+",
      type: "RO + Alkaline + UF / RO + UV",
      image: "/lovable-uploads/ae06eb75-b79c-4754-889b-e1d14e60c67b.png",
      details: [
        "Wall mounted / Table top",
        "Weight: 6.9kg",
        "Water Output: 25 L/hr",
        "Tank Capacity: 12 L",
        "Input Voltage: 220-240V",
        "Dimensions: 22x40x55 cm"
      ],
      price: "₹13,990"
    },
    {
      name: "Onyx/Onyx+",
      type: "RO + Alkaline + UF / RO + UV",
      image: "/lovable-uploads/bfc11bd1-c877-4e4e-94b5-e29093e58a92.png",
      details: [
        "Wall mounted / Table top",
        "Weight: 6.9kg",
        "Water Output: 25 L/hr",
        "Tank Capacity: 12 L",
        "Input Voltage: 220-240V",
        "Dimensions: 22x40x55 cm"
      ],
      price: "₹13,990"
    },
    {
      name: "Mineralising Jar",
      type: "Mineral Enhancement",
      image: "/lovable-uploads/2311381e-9357-4df1-b5fa-20b02f9ee343.png",
      details: [
        "Water Jug Life: 500 Fills",
        "Jar Capacity: 3.5 L",
        "Induces 72 trace & 16 essential minerals in regular water",
        "Makes water alkaline"
      ],
      price: "₹3,500"
    },
    {
      name: "Commercial Filter (100-250L)",
      type: "Industrial Grade",
      image: commercialPlant,
      details: [
        "High Capacity: 100-250 L/hr",
        "Continuous Operation",
        "Auto Flush System",
        "Commercial Grade Components"
      ],
      price: "₹45,990"
    }
  ];

  const services = [
    { icon: Wrench, title: "Installation & Setup", desc: "Professional installation of all water purification systems" },
    { icon: Shield, title: "Repair & Maintenance", desc: "Complete repair services and annual maintenance contracts" },
    { icon: Beaker, title: "Water Testing", desc: "Comprehensive water quality analysis and reporting" },
    { icon: Factory, title: "Commercial Solutions", desc: "Large-scale RO plants for industries and institutions" }
  ];

  const features = [
    { icon: Award, title: "Supreme Quality Parts", desc: "Using only the highest grade components for durability" },
    { icon: Zap, title: "Real-Time Monitoring", desc: "Accurate water quality monitoring with digital displays" },
    { icon: Users, title: "Customer Updates", desc: "Regular maintenance reminders and service notifications" },
    { icon: Star, title: "Training Programs", desc: "Skill development for underprivileged youth in our community" }
  ];

  const commercialProjects = [
    { name: "Anandpur Trust", location: "Madhya Pradesh", capacity: "4000 L/hr", type: "Educational Institution" },
    { name: "IIC Delhi", location: "New Delhi", capacity: "100 L/hr", type: "Government Office" },
    { name: "Metro Hospital", location: "Gurugram", capacity: "2000 L/hr", type: "Healthcare" },
    { name: "Hotel Paradise", location: "Rajasthan", capacity: "1500 L/hr", type: "Hospitality" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-[var(--shadow-soft)]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-aqua-flow bg-clip-text text-transparent">
              Aqua Technique
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Link to="/cart">
              <Button variant="outline" size="sm" className="mr-2">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart ({getTotalItems()})
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-aqua-flow/60" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting Every Drop
            <span className="block bg-gradient-to-r from-white to-aqua-light bg-clip-text text-transparent">
              With Perfection
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Providing clean, safe, and mineral-rich drinking water for over two decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Aqua Technique
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Established in 2001 by Vikas Soni with the mission to deliver clean drinking water to every household and business across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-aqua)] transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">1.5 Lakh+</CardTitle>
                <CardDescription>Satisfied Customers</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-aqua)] transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">20+ Years</CardTitle>
                <CardDescription>Industry Experience</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-aqua)] transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Make In India</CardTitle>
                <CardDescription>Supporting Local Manufacturing</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)]">
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              Our team of young professionals is committed to promoting <strong>"Make In India"</strong> by sourcing and selling Indian-manufactured RO parts, ensuring quality while supporting local industry. We believe in empowering communities through clean water access and skill development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Top Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium water purification systems designed for Indian water conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-aqua)] transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{product.type}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1 mb-3">
                    {product.details.map((detail, i) => (
                      <div key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {detail}
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-lg font-bold text-primary">{product.price}</div>
                  </div>
                  <Button 
                    className="w-full mt-4"
                    onClick={() => addToCart({
                      id: `home-product-${index}`,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      type: product.type
                    })}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive water purification services for residential and commercial needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-aqua)] transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-2xl font-bold text-center mb-8">Commercial Consultation</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <ChefHat className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-medium">Restaurants</div>
              </div>
              <div className="text-center">
                <Hospital className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-medium">Hospitals</div>
              </div>
              <div className="text-center">
                <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-medium">Hotels</div>
              </div>
              <div className="text-center">
                <Waves className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-medium">Swimming Pools</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with our commitment to quality and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-aqua)] transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Advanced Purification Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-stage filtration process ensuring the purest water quality
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] mb-12">
            <img 
              src={purificationProcessClean} 
              alt="Water Purification Process"
              className="w-full rounded-lg mb-8"
            />
            
            <div className="grid md:grid-cols-7 gap-4 text-center">
              <div className="space-y-2">
                <Filter className="h-8 w-8 text-primary mx-auto" />
                <div className="font-medium text-sm">Pre-filter</div>
              </div>
              <div className="space-y-2">
                <Filter className="h-8 w-8 text-primary mx-auto" />
                <div className="font-medium text-sm">Sediment</div>
              </div>
              <div className="space-y-2">
                <Filter className="h-8 w-8 text-primary mx-auto" />
                <div className="font-medium text-sm">Carbon</div>
              </div>
              <div className="space-y-2">
                <Filter className="h-8 w-8 text-primary mx-auto" />
                <div className="font-medium text-sm">RO Membrane</div>
              </div>
              <div className="space-y-2">
                <Zap className="h-8 w-8 text-primary mx-auto" />
                <div className="font-medium text-sm">TDS Control</div>
              </div>
              <div className="space-y-2">
                <Shield className="h-8 w-8 text-primary mx-auto" />
                <div className="font-medium text-sm">UV/UF</div>
              </div>
              <div className="space-y-2">
                <Droplets className="h-8 w-8 text-primary mx-auto" />
                <div className="font-medium text-sm">Alkaline</div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-primary to-aqua-flow text-white shadow-[var(--shadow-aqua)]">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Volcanic Mineral Cartridge</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Adds 72 essential trace minerals and improves pH balance for optimal health benefits
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Commercial Projects Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Commercial Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading institutions across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              {commercialProjects.map((project, index) => (
                <Card key={index} className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-aqua)] transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {project.location}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{project.capacity}</div>
                        <div className="text-sm text-muted-foreground">{project.type}</div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src={commercialPlant} 
                alt="Commercial RO Plant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-accent/20 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to experience pure water? Contact us for a free consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="shadow-[var(--shadow-card)] text-center">
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Phone</CardTitle>
                <CardDescription>
                  <a href="tel:+918804486044" className="hover:text-primary transition-colors">+91 8804486044</a><br />
                  <a href="tel:+919818485023" className="hover:text-primary transition-colors">+91 9818485023</a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-[var(--shadow-card)] text-center">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  <a href="mailto:help@aquatechnique.in" className="hover:text-primary transition-colors">
                    help@aquatechnique.in
                  </a><br />
                  <a href="https://www.aquatechnique.in" className="hover:text-primary transition-colors">
                    www.aquatechnique.in
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-[var(--shadow-card)] text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Address</CardTitle>
                <CardDescription>
                  WZ-101/B, Street No.7<br />
                  Virender Nagar, Janakpuri<br />
                  New Delhi
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Droplets className="h-8 w-8" />
              <span className="text-2xl font-bold">Aqua Technique</span>
            </div>
            <p className="text-white/80 mb-6">
              Crafting every drop with perfection since 2001
            </p>
            <div className="flex justify-center space-x-6 text-white/60">
              <span>© 2024 Aqua Technique. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
