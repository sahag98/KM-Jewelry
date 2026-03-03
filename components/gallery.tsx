import Image from "next/image";
import ImageGallery from "./image-gallery";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Gallery() {
  // Sample gallery items - in a real implementation, these would come from a CMS or database

  const videos = [
    {
      id: 1,
      name: "Diamond Ring",
      video: "/videos/1.mp4",
    },
    {
      id: 2,
      name: "Diamond Ring",
      video: "/videos/2.mp4",
    },
    {
      id: 3,
      name: "Diamond Ring",
      video: "/videos/3.mp4",
    },
    {
      id: 4,
      name: "Diamond Ring",
      video: "/videos/4.mp4",
    },
    {
      id: 5,
      name: "Diamond Ring",
      video: "/videos/5.mp4",
    },
    {
      id: 6,
      name: "Diamond Ring",
      video: "/videos/6.mp4",
    },
    {
      id: 7,
      name: "Diamond Ring",
      video: "/videos/7.mp4",
    },
    {
      id: 8,
      name: "Diamond Ring",
      video: "/videos/8.mp4",
    },
    {
      id: 9,
      name: "Diamond Ring",
      video: "/videos/9.mp4",
    },
    {
      id: 10,
      name: "Diamond Ring",
      video: "/videos/10.mp4",
    },
    {
      id: 11,
      name: "Diamond Ring",
      video: "/videos/11.mp4",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of beautifully crafted jewelry pieces and
            restoration work.
          </p>
          <Separator className="w-24 mx-auto mt-6" />
        </div>

        <ImageGallery videos={videos} />
      </div>
    </section>
  );
}
