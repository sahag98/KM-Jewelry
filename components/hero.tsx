import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import EstimateModal from "./estimate-modal";

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-0 h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.webp"
          alt="Elegant jewelry craftsmanship"
          fill
          priority
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="container flex items-center text-center justify-center mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm"
          >
            Since 1983
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            Exquisite Jewelry{" "}
            <span className="text-primary">Crafted with Passion</span>
          </h1>
          <p className="text-lg md:text-xl mb-8  max-w-2xl mx-auto">
            Over 40 years of expertise in fixing and restoring timeless pieces
            that celebrate life's precious moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <EstimateModal />
            {/* <Link href="#gallery">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base border-white/30 text-white hover:bg-white hover:text-foreground"
              >
                View Our Collection
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
