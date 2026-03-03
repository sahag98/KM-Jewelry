import { GemIcon, AwardIcon, HeartIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Story
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            About KM Jewelry
          </h2>
          <Separator className="w-24 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              KM Jewelry is owned by Kevork Arzoumanian, an expert and
              detail-oriented professional at jewelry and diamond setting for
              over 40 years! Highly Experienced in a combination of American,
              European and Mediterranean jewelry approach.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Providing services on all kinds of jewelry related products such
              as rings, bracelets, necklaces, and more! KM Jewelry is dedicated
              to provide exceptional customized service to its clients and
              fulfill their jewelry wishes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <GemIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">
                    Expertise
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    40+ years of experience
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <AwardIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Finest craftsmanship
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <HeartIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">
                    Dedication
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Personalized service
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-[400px]">
                <img
                  src="/placeholder.svg?height=800&width=600"
                  alt="Kevork Arzoumanian at work"
                  className="object-cover w-full h-full"
                />
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
}
