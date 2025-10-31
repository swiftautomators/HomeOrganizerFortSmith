import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Professional Organizer Fort Smith",
  description: "Transparent pricing for professional organizing services in Fort Smith. Hourly rates and packages available for home, office, and specialized organizing.",
};

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Starter Session",
      price: "$225",
      duration: "3 hours",
      description: "Perfect for getting started or tackling a single space",
      features: [
        "One organizing session",
        "Assessment and planning",
        "Hands-on organization",
        "Basic organizing supplies included",
        "Follow-up tips and recommendations",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Standard Package",
      price: "$750",
      duration: "10 hours",
      description: "Most popular choice for comprehensive organization",
      features: [
        "Multiple organizing sessions",
        "Comprehensive space planning",
        "Product recommendations",
        "Shopping assistance available",
        "Follow-up check-in included",
        "Save $100 vs hourly rate",
      ],
      cta: "Most Popular",
      popular: true,
    },
    {
      name: "Premium Package",
      price: "$1,800",
      duration: "25 hours",
      description: "Complete transformation for whole-home projects",
      features: [
        "Comprehensive home organization",
        "Multiple rooms or full home",
        "Product shopping service",
        "Detailed organizational plan",
        "Two follow-up sessions",
        "Priority scheduling",
        "Save $300 vs hourly rate",
      ],
      cta: "Transform Your Space",
      popular: false,
    },
  ];

  const hourlyRates = [
    {
      service: "Home Organization",
      rate: "$75/hour",
      minimum: "3-hour minimum",
    },
    {
      service: "Office Organization",
      rate: "$85/hour",
      minimum: "3-hour minimum",
    },
    {
      service: "Decluttering Services",
      rate: "$75/hour",
      minimum: "4-hour minimum",
    },
    {
      service: "Moving Assistance",
      rate: "$80/hour",
      minimum: "Packages available",
    },
    {
      service: "Senior Downsizing",
      rate: "$75/hour",
      minimum: "Packages available",
    },
    {
      service: "Time Management Systems",
      rate: "$85/hour",
      minimum: "Packages available",
    },
  ];

  const addOns = [
    {
      name: "Product Shopping Service",
      price: "$50/hour",
      description: "We shop for organizing products on your behalf",
    },
    {
      name: "Virtual Consultation",
      price: "$100/session",
      description: "60-minute video consultation for guidance and planning",
    },
    {
      name: "Maintenance Visit",
      price: "$150",
      description: "2-hour follow-up to refresh and maintain systems",
    },
    {
      name: "Photo Documentation",
      price: "$75",
      description: "Before and after photos of your organized space",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-textPrimary/80">
              Flexible options to fit your needs and budget. All packages include a free initial consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
              Service Packages
            </h2>
            <p className="text-lg text-textPrimary/70 max-w-2xl mx-auto">
              Save money with our bundled packages designed for different project sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white rounded-xl shadow-lg p-8 border-2 ${
                  tier.popular ? "border-accent scale-105" : "border-border"
                } relative`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-textPrimary mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary">
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-textPrimary/60">{tier.duration}</p>
                </div>

                <p className="text-textPrimary/70 mb-6 text-center">
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-textPrimary/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                    tier.popular
                      ? "bg-accent hover:bg-accent/90 text-white"
                      : "bg-primary hover:bg-primary/90 text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hourly Rates */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                Hourly Rates
              </h2>
              <p className="text-lg text-textPrimary/70">
                Prefer hourly billing? We offer flexible hourly rates for all services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hourlyRates.map((item) => (
                <div
                  key={item.service}
                  className="flex justify-between items-center p-6 bg-background rounded-lg border border-border"
                >
                  <div>
                    <h3 className="font-semibold text-textPrimary mb-1">
                      {item.service}
                    </h3>
                    <p className="text-sm text-textPrimary/60">{item.minimum}</p>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {item.rate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                Add-On Services
              </h2>
              <p className="text-lg text-textPrimary/70">
                Enhance your organizing experience with these additional services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="p-6 bg-white rounded-lg border border-border"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-textPrimary">
                      {addon.name}
                    </h3>
                    <span className="text-xl font-bold text-primary">
                      {addon.price}
                    </span>
                  </div>
                  <p className="text-textPrimary/70 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-textPrimary mb-8 text-center">
              Pricing FAQs
            </h2>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  Is the initial consultation really free?
                </h3>
                <p className="text-textPrimary/70">
                  Yes! We offer a complimentary 30-minute consultation to discuss your needs, assess your space, and provide a customized quote.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-textPrimary/70">
                  We accept cash, checks, and all major credit cards. Payment is due at the end of each session or upon package purchase.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  Do I need to purchase organizing products separately?
                </h3>
                <p className="text-textPrimary/70">
                  Basic supplies are included in our rates. For specialized storage solutions, we provide recommendations and can shop on your behalf (additional fee applies).
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  What's your cancellation policy?
                </h3>
                <p className="text-textPrimary/70">
                  We require 48 hours notice for cancellations or rescheduling. Cancellations with less than 48 hours notice may incur a 50% fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Organized?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule your free consultation to discuss your project and get a personalized quote
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
          >
            Book Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
