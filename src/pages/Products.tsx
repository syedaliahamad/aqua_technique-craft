import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Products = () => {
  const { addToCart, getTotalItems } = useCart();
  const domesticFilters = [
    {
      name: "Amber/Amber+",
      image: "/lovable-uploads/ae06eb75-b79c-4754-889b-e1d14e60c67b.png",
      type: "RO + Alkaline + UF / RO + UV",
      price: "₹13,990",
      specs: [
        "Wall mounted / Table top",
        "Weight: 6.9kg",
        "Water Output: 25 L/hr",
        "Tank Capacity: 12 L",
        "Input Voltage: 220-240V",
        "Dimensions: 22x40x55 cm"
      ]
    },
    {
      name: "Onyx/Onyx+",
      image: "/lovable-uploads/bfc11bd1-c877-4e4e-94b5-e29093e58a92.png",
      type: "RO + Alkaline + UF / RO + UV",
      price: "₹13,990",
      specs: [
        "Wall mounted / Table top",
        "Weight: 6.9kg",
        "Water Output: 25 L/hr",
        "Tank Capacity: 12 L",
        "Input Voltage: 220-240V",
        "Dimensions: 22x40x55 cm"
      ]
    },
    {
      name: "Quartz/Quartz Lite",
      image: "/lovable-uploads/451efa81-d702-4616-9b8b-197cf0891af8.png",
      type: "UV + Filtration / RO + Alkaline + UF",
      price: "₹12,990",
      specs: [
        "Advanced filtration technology",
        "Compact design",
        "Energy efficient",
        "Easy maintenance"
      ]
    },
    {
      name: "Under Sink Filter",
      image: "/lovable-uploads/9b600d70-9636-46ba-b946-a11f4458b8e4.png",
      type: "As per Demand",
      price: "₹18,990",
      specs: [
        "Weight: 6kg (Tank not included)",
        "Water Output: 25 L/hr",
        "Tank Capacity: 7.5 L",
        "Input Voltage: 220-240V",
        "Dimensions: 21x38x32 cm"
      ]
    },
    {
      name: "Mineralising Jar",
      image: "/lovable-uploads/2311381e-9357-4df1-b5fa-20b02f9ee343.png",
      type: "Mineral Enhancement",
      price: "₹3,500",
      specs: [
        "Water Jug Life: 500 Fills",
        "Jar Capacity: 3.5 L",
        "Induces 72 trace & 16 essential minerals",
        "Makes water alkaline"
      ]
    }
  ];

  const spareParts = [
    {
      name: "Carbon Block",
      image: "/lovable-uploads/59161096-788b-4a13-9b7e-5e489267c02e.png",
      variants: ["T1", "T2", "T3"],
      price: "₹299",
      description: "Activated carbon removes chemicals and improves taste"
    },
    {
      name: "Sediment Filter",
      image: "/lovable-uploads/5385f9b6-4f4d-4910-8b4b-0b65bf93ae12.png",
      variants: ["T1", "T2", "T3", "T4"],
      price: "₹199",
      description: "Removes suspended physical impurities from water"
    },
    {
      name: "RO Membrane",
      image: "/lovable-uploads/bf05a72d-2ccd-4da9-97a1-b5ae41e61135.png",
      variants: ["T1", "T2", "T3", "T4"],
      price: "₹899",
      description: "Removes harmful chemicals, bacteria, virus"
    },
    {
      name: "UF Membrane",
      image: "/lovable-uploads/4e069513-5c75-42cd-ab7b-fa1266140527.png",
      variants: ["T1", "T2", "T3", "T4"],
      price: "₹599",
      description: "Removes larger particles like pathogens"
    },
    {
      name: "UV Lamp",
      image: "/lovable-uploads/e7af2206-8959-44eb-99a5-92d3cb97f41c.png",
      variants: ["T1", "T2", "T3", "T4"],
      price: "₹799",
      description: "Sanitizing UV Replacement unit as a germicidal sterilization"
    },
    {
      name: "Water Pump",
      image: "/lovable-uploads/e9492163-7660-4fe3-b4a1-46fcf40f07e6.png",
      variants: ["T1", "T2", "T3", "T4"],
      price: "₹1,299",
      description: "High-pressure water pump for optimal flow"
    },
    {
      name: "Power Supply",
      image: "/lovable-uploads/8493973e-1d31-466a-be2b-bc52f97f0f28.png",
      variants: ["T1", "T2", "T3", "T4"],
      price: "₹899",
      description: "SMPS power supply unit for consistent performance"
    }
  ];

  const commercialFilters = [
    {
      name: "25 Litres Commercial Filter",
      image: "/lovable-uploads/0ed01825-2ee5-497d-8b13-357c9aa42409.png",
      capacity: "25 L/hr",
      price: "₹25,990",
      description: "Perfect for small offices and cafes"
    },
    {
      name: "50 Litres Commercial Filter",
      image: "/lovable-uploads/50b96295-20d8-4b64-b41c-a295687f354c.png",
      capacity: "50 L/hr",
      price: "₹35,990",
      description: "Ideal for medium-sized establishments"
    },
    {
      name: "100-250 Litres Commercial Filter",
      image: "/lovable-uploads/ea1e06bb-0045-4090-8f60-e58761a25636.png",
      capacity: "100-250 L/hr",
      price: "₹45,990",
      description: "High-capacity solution for large businesses"
    },
    {
      name: "500-4000 Litres Commercial Filter",
      image: "/lovable-uploads/47d07ad2-a274-40ad-835b-ad505f34cef6.png",
      capacity: "500-4000 L/hr",
      price: "₹85,990",
      description: "Industrial-grade water purification system"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-aqua-flow/5">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary-hover transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <h1 className="text-2xl font-bold text-primary">All Products</h1>
            </div>
            <Link to="/cart">
              <Button variant="outline" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart ({getTotalItems()})
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Domestic Home Filters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Domestic Home Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domesticFilters.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-aqua)] transition-all duration-300 group">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary text-white">
                      {product.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary mb-3">
                    {product.price}
                  </CardDescription>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-end">
                  <Button 
                    className="w-full"
                    onClick={() => addToCart({
                      id: `domestic-${index}`,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      type: product.type
                    })}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Spare Parts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Spare Parts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spareParts.map((part, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-aqua)] transition-all duration-300 group">
                {part.image && (
                  <CardHeader className="p-0">
                    <div className="relative h-32 overflow-hidden bg-gray-50">
                      <img 
                        src={part.image} 
                        alt={part.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                )}
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{part.name}</CardTitle>
                  <CardDescription className="text-xl font-bold text-primary mb-2">
                    {part.price}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mb-3">{part.description}</p>
                  {part.variants && (
                    <div className="flex flex-wrap gap-1">
                      {part.variants.map((variant, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {variant}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-end">
                  <Button 
                    className="w-full"
                    onClick={() => addToCart({
                      id: `spare-${index}`,
                      name: part.name,
                      price: part.price,
                      image: part.image
                    })}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Commercial Filters */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Commercial Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commercialFilters.map((filter, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-aqua)] transition-all duration-300">
                {filter.image && (
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden bg-gray-50">
                      <img 
                        src={filter.image} 
                        alt={filter.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                )}
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{filter.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary mb-3">
                    {filter.price}
                  </CardDescription>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Capacity:</span> {filter.capacity}
                    </p>
                    <p className="text-sm text-muted-foreground">{filter.description}</p>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex items-end">
                  <Button 
                    className="w-full"
                    onClick={() => addToCart({
                      id: `commercial-${index}`,
                      name: filter.name,
                      price: filter.price,
                      image: filter.image
                    })}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;