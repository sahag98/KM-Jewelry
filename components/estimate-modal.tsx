"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircleIcon } from "lucide-react";

export default function EstimateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        message: formData.get("message") as string,
      };

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Close modal after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
      // You might want to show an error message to the user here
      alert("Failed to send your request. Please try again.");
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setIsSubmitted(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="px-8 py-6 cursor-pointer font-bold text-base"
        >
          Get Free Estimate
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif font-bold text-foreground">
            Get Your Free Estimate
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us about your jewelry project and we&apos;ll provide you with a
            free estimate.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircleIcon className="h-16 w-16 text-primary mb-4" />
            <h4 className="text-xl font-medium text-foreground mb-2">
              Thank You!
            </h4>
            <p className="text-muted-foreground">
              Your estimate request has been received. We&apos;ll get back to
              you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="estimate-name"
                className="text-sm font-medium text-foreground"
              >
                Full Name *
              </label>
              <Input
                id="estimate-name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="estimate-phone"
                className="text-sm font-medium text-foreground"
              >
                Phone Number *
              </label>
              <Input
                id="estimate-phone"
                name="phone"
                placeholder="(123) 456-7890"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="estimate-email"
                className="text-sm font-medium text-foreground"
              >
                Email Address *
              </label>
              <Input
                id="estimate-email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="estimate-message"
                className="text-sm font-medium text-foreground"
              >
                Tell us about your project *
              </label>
              <Textarea
                id="estimate-message"
                name="message"
                placeholder="Describe your jewelry piece, what needs to be done, and any specific requirements..."
                rows={4}
                required
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Estimate Request"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
