import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-background mb-4">
              KM Jewelry
            </h3>
            <p className="mb-4 max-w-md text-white">
              Expert jewelry and diamond setting for over 40 years. Providing
              exceptional customized service to fulfill your jewelry wishes.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white hover:text-background transition-colors"
              >
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-background transition-colors"
              >
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-background transition-colors"
              >
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-white hover:text-background transition-colors"
              >
                <YoutubeIcon className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-background mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-white hover:text-background transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white hover:text-background transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-white hover:text-background transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white hover:text-background transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[#212121]" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white">
            &copy; {currentYear} KM Jewelry. All rights reserved.
          </p>
          {/* <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              href="#"
              className="text-sm text-white hover:text-background transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-white hover:text-background transition-colors"
            >
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
