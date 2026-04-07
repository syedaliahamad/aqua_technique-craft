import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-aqua-flow/5">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <h1 className="text-2xl font-bold text-primary">Contact Information</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help you with all your water purification needs. 
              Reach out to us through any of the following channels.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Address Card */}
            <Card className="hover:shadow-[var(--shadow-aqua)] transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-medium mb-2">WZ-101/B, Street No.7</p>
                <p className="text-lg font-medium mb-2">Virender Nagar</p>
                <p className="text-lg font-medium text-primary">New Delhi</p>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="hover:shadow-[var(--shadow-aqua)] transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <div>
                  <a 
                    href="tel:+918804486044" 
                    className="text-lg font-medium text-primary hover:underline block"
                  >
                    +91 8804486044
                  </a>
                </div>
                <div>
                  <a 
                    href="tel:+919818485023" 
                    className="text-lg font-medium text-primary hover:underline block"
                  >
                    +91 9818485023
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="hover:shadow-[var(--shadow-aqua)] transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <a 
                  href="mailto:help@aquatechnique.in" 
                  className="text-lg font-medium text-primary hover:underline"
                >
                  help@aquatechnique.in
                </a>
              </CardContent>
            </Card>

            {/* Website Card */}
            <Card className="hover:shadow-[var(--shadow-aqua)] transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Visit Our Website</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <a 
                  href="https://www.aquatechnique.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-primary hover:underline"
                >
                  www.aquatechnique.in
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <a href="tel:+918804486044">
                <Button className="w-full" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
              <a href="mailto:help@aquatechnique.in">
                <Button variant="outline" className="w-full" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;