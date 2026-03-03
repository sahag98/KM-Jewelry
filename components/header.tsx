"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import EstimateModal from "./estimate-modal";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 shadow-lg backdrop-blur-sm border-b"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              "text-2xl font-serif font-bold transition-colors",
              isScrolled ? "text-foreground" : "text-white",
            )}
          >
            <Image src="/KM.png" alt="KM Jewelry" width={100} height={100} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                isScrolled ? "text-foreground" : "text-white",
              )}
            >
              About
            </Link>
            <Link
              href="#services"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                isScrolled ? "text-foreground" : "text-white",
              )}
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                isScrolled ? "text-foreground" : "text-white",
              )}
            >
              Gallery
            </Link>
            <EstimateModal />
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "md:hidden",
              isScrolled ? "text-foreground" : "text-white",
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <div className="pt-2">
              <EstimateModal />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
