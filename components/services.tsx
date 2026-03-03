import { DiamondIcon, SparklesIcon, WrenchIcon, PlusIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import EstimateModal from "./estimate-modal";

export default function Services() {
  const services = [
    {
      icon: <DiamondIcon className="h-10 w-10" />,
      title: "Diamond Setting",
      description:
        "Expert precision setting of diamonds and precious stones in various styles including prong, channel, pavé, and bezel settings.",
      badge: "Premium",
    },
    {
      icon: <SparklesIcon className="h-10 w-10" />,
      title: "Polishing & Shining",
      description:
        "Professional polishing services to restore the brilliance and luster of your precious jewelry pieces.",
      badge: "Popular",
    },
    {
      icon: <WrenchIcon className="h-10 w-10" />,
      title: "Maintenance",
      description:
        "Comprehensive jewelry maintenance including cleaning, inspection, and repair to keep your pieces in perfect condition.",
      badge: "Essential",
    },
    {
      icon: <PlusIcon className="h-10 w-10" />,
      title: "Custom Services",
      description:
        "Custom design, resizing, stone replacement, engraving, and other specialized jewelry services tailored to your needs.",
      badge: "Custom",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of jewelry services with the highest
            level of craftsmanship and attention to detail.
          </p>
          <Separator className="w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-serif font-bold text-foreground mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-primary/5">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get a free estimate for your jewelry project. Our expert team
                will review your requirements and provide you with a detailed
                quote.
              </p>
              <EstimateModal />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
