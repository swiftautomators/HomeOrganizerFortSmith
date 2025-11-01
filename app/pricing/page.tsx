import Link from "next/link";
import { CheckCircle, ArrowRight, DollarSign, Phone, CreditCard, Calendar, Lightbulb } from "lucide-react";
import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pricing | Professional Organizer Fort Smith",
  description: "Transparent pricing for professional organizing services in Fort Smith. Packages from $650 to $4,500 with no hidden fees. Payment plans available.",
};

export default function PricingPage() {
  const packages = [
    {
      name: "Executive Package",
      price: "$4,500",
      hours: "60 hours",
      savings: "Save $1,200 (21%)",
      features: [
        "60 hours of professional organizing",
        "Everything included - whole-home transformation",
        "Priority scheduling - book same-week",
        "Dedicated project manager",
        "Product procurement service included",
        "Custom storage solutions designed for you",
        "Free consultation ($75 value)",
        "Two follow-up maintenance visits",
      ],
      popular: false,
      border: "border-primary",
      tier: 1,
    },
    {
      name: "Complete Home Transformation",
      price: "$2,400",
      hours: "40 hours",
      savings: "Save $600 (20%)",
      features: [
        "40 hours of professional organizing",
        "Perfect for whole-home projects",
        "Custom organizational systems",
        "Product recommendations & shopping list",
        "Before & after photo documentation",
        "Free consultation ($75 value)",
        "One follow-up maintenance visit",
      ],
      popular: false,
      border: "border-border",
      tier: 2,
    },
    {
      name: "Home Refresh Package",
      price: "$1,250",
      hours: "20 hours",
      savings: "Save $250 (17%)",
      features: [
        "20 hours of professional organizing",
        "Perfect for multiple rooms or areas",
        "Sustainable organizational systems",
        "Detailed maintenance guide",
        "Product recommendations",
        "Free consultation ($75 value)",
      ],
      popular: true,
      border: "border-accent",
      tier: 3,
    },
    {
      name: "Starter Package",
      price: "$650",
      hours: "10 hours",
      savings: "Save $100 (13%)",
      features: [
        "10 hours of professional organizing",
        "Perfect for single room or small project",
        "Great for beginners",
        "Organization basics & systems",
        "Follow-up tips & recommendations",
        "Free consultation ($75 value)",
      ],
      popular: false,
      border: "border-border",
      tier: 4,
    },
  ];

  const hourlyRates = [
    {
      level: "Essential Organization",
      rate: "$60/hour",
      minimum: "3-hour minimum",
      description: "Basic home organization services",
    },
    {
      level: "Complete Home Organization",
      rate: "$75/hour",
      minimum: "4-hour minimum",
      description: "Comprehensive organizing with systems",
    },
    {
      level: "Premium Organization & Design",
      rate: "$95/hour",
      minimum: "6-hour minimum",
      description: "Full-service with custom design solutions",
    },
  ];

  const specialtyServices = [
    {
      name: "Move Management",
      rate: "$85-110/hour",
      description: "Professional packing, unpacking, and setup for moves of any size",
    },
    {
      name: "Estate & Downsizing",
      rate: "$90/hour",
      description: "Compassionate support for seniors and families during transitions",
    },
    {
      name: "Digital Organization",
      rate: "$80/hour",
      description: "Organize files, photos, and digital systems for efficiency",
    },
    {
      name: "Hoarding & Chronic Disorganization",
      rate: "$120-150/hour",
      description: "Specialized support with sensitivity and professional expertise",
    },
  ];

  const addOns = [
    {
      name: "Product Procurement Service",
      price: "Trade discount + 30% markup",
      description: "We shop for and deliver organizing products using our trade discounts",
    },
    {
      name: "Monthly Maintenance Plans",
      price: "$150-500/month",
      description: "Keep your space organized with regular maintenance visits",
    },
    {
      name: "Virtual Organizing",
      price: "$65/hour",
      description: "Remote organizing sessions via video call from anywhere",
    },
    {
      name: "Gift Certificates",
      price: "Any amount",
      description: "Give the gift of organization - perfect for any occasion",
    },
  ];

  const paymentOptions = [
    {
      title: "Full Payment",
      description: "Pay in full and receive the full package discount",
      icon: <DollarSign className="w-8 h-8 text-secondary" />,
    },
    {
      title: "Payment Plans",
      description: "3-month installments available for packages over $1,000",
      icon: <Calendar className="w-8 h-8 text-secondary" />,
    },
    {
      title: "We Accept",
      description: "All major credit cards, debit cards, cash, and checks",
      icon: <CreditCard className="w-8 h-8 text-secondary" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing for Fort Smith Families
            </h1>
            <p className="text-xl md:text-2xl opacity-95">
              No hidden fees, no surprises—just honest pricing for professional organization
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-textPrimary/80 leading-relaxed">
              Unlike competitors who hide pricing, we believe you deserve to know exactly what you'll pay before you book. Our transparent pricing means no surprises, no pressure, and no games—just honest service from a Fort Smith business you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
              Package Pricing
            </h2>
            <p className="text-lg text-textPrimary/70 max-w-2xl mx-auto">
              Save money with our bundled packages—better value for bigger projects
            </p>
          </div>

          {/* Desktop: Show expensive first, Mobile: Show Most Popular first */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Mobile: Most Popular first */}
            <div className="md:hidden">
              {packages
                .sort((a, b) => (a.popular ? -1 : b.popular ? 1 : 0))
                .map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`bg-white rounded-lg overflow-hidden flex flex-col h-full mb-6 ${
                      pkg.popular
                        ? "border-2 border-accent shadow-xl relative"
                        : `border-2 ${pkg.border} shadow-md`
                    }`}
                  >
                    {pkg.popular && (
                      <div className="bg-accent text-white text-center py-2 px-4 font-bold text-sm">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-textPrimary mb-2">
                        {pkg.name}
                      </h3>
                      <div className="mb-4">
                        <div className="text-4xl font-bold text-primary mb-1">
                          {pkg.price}
                        </div>
                        <div className="text-sm text-textPrimary/60 mb-2">
                          {pkg.hours} of organizing
                        </div>
                        <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                          {pkg.savings}
                        </div>
                      </div>
                      <ul className="space-y-2 mb-6 flex-grow">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-textPrimary/80 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className={`w-full py-3 rounded-lg font-bold text-center transition-colors ${
                          pkg.popular
                            ? "bg-accent hover:bg-accent/90 text-white"
                            : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                ))}
            </div>

            {/* Desktop: Expensive first (price anchoring) */}
            <div className="hidden md:contents">
              {packages
                .sort((a, b) => a.tier - b.tier)
                .map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`bg-white rounded-lg overflow-hidden flex flex-col h-full ${
                      pkg.popular
                        ? "border-2 border-accent shadow-xl lg:-translate-y-5 relative"
                        : `border-2 ${pkg.border} shadow-md`
                    }`}
                  >
                    {pkg.popular && (
                      <div className="bg-accent text-white text-center py-2 px-4 font-bold text-sm">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-textPrimary mb-2">
                        {pkg.name}
                      </h3>
                      <div className="mb-4">
                        <div className="text-4xl font-bold text-primary mb-1">
                          {pkg.price}
                        </div>
                        <div className="text-sm text-textPrimary/60 mb-2">
                          {pkg.hours} of organizing
                        </div>
                        <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                          {pkg.savings}
                        </div>
                      </div>
                      <ul className="space-y-2 mb-6 flex-grow">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-textPrimary/80 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className={`w-full py-3 rounded-lg font-bold text-center transition-colors ${
                          pkg.popular
                            ? "bg-accent hover:bg-accent/90 text-white"
                            : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-textPrimary/70 flex items-center justify-center gap-2">
              <Lightbulb className="w-5 h-5 text-accent" />
              <span className="font-semibold">Packages offer better value—save up to 21%!</span>
            </p>
          </div>
        </div>
      </section>

      {/* Hourly Rates */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                Hourly Rates
              </h2>
              <p className="text-lg text-textPrimary/70">
                Prefer hourly billing? Choose the service level that fits your needs
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left font-bold">Service Level</th>
                    <th className="p-4 text-left font-bold">Rate</th>
                    <th className="p-4 text-left font-bold">Minimum</th>
                  </tr>
                </thead>
                <tbody>
                  {hourlyRates.map((item, index) => (
                    <tr
                      key={item.level}
                      className={index % 2 === 0 ? "bg-white" : "bg-background"}
                    >
                      <td className="p-4">
                        <div className="font-semibold text-textPrimary">{item.level}</div>
                        <div className="text-sm text-textPrimary/60">{item.description}</div>
                      </td>
                      <td className="p-4 text-2xl font-bold text-primary">{item.rate}</td>
                      <td className="p-4 text-textPrimary/70">{item.minimum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                Specialty Services
              </h2>
              <p className="text-lg text-textPrimary/70">
                Specialized organizing for unique situations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialtyServices.map((service) => (
                <div
                  key={service.name}
                  className="bg-white p-6 rounded-lg border border-border shadow-sm"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-textPrimary">
                      {service.name}
                    </h3>
                    <span className="text-xl font-bold text-primary whitespace-nowrap ml-4">
                      {service.rate}
                    </span>
                  </div>
                  <p className="text-textPrimary/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons & Extras */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                Add-Ons & Extras
              </h2>
              <p className="text-lg text-textPrimary/70">
                Enhance your organizing experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="p-6 bg-background rounded-lg border border-border"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-textPrimary text-lg">
                      {addon.name}
                    </h3>
                    <span className="text-lg font-bold text-primary whitespace-nowrap ml-4">
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

      {/* Payment Options */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                Flexible Payment Options
              </h2>
              <p className="text-lg text-textPrimary/70">
                We make it easy to get organized on your budget
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {paymentOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-white p-8 rounded-lg border border-border text-center shadow-sm"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-textPrimary mb-3">
                    {option.title}
                  </h3>
                  <p className="text-textPrimary/70">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                Pricing Questions Answered
              </h2>
              <p className="text-lg text-textPrimary/70">
                Everything you need to know about our pricing
              </p>
            </div>

            <Accordion
              type="multiple"
              defaultValue={["item-0", "item-1"]}
              className="space-y-4"
            >
              <AccordionItem value="item-0">
                <AccordionTrigger>
                  What if I can't afford a full package?
                </AccordionTrigger>
                <AccordionContent>
                  We offer hourly rates starting at just $60/hour with a 3-hour minimum. You can also start with our Starter Package at $650 and upgrade later if needed. We want organization to be accessible to everyone in Fort Smith!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Do you offer payment plans?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! For any package over $1,000, we offer 3-month interest-free payment plans. Simply pay one-third down to book your project, then two more monthly payments. No credit check required.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What's included in the free consultation?
                </AccordionTrigger>
                <AccordionContent>
                  Your free 45-minute consultation includes a walkthrough of your space, assessment of your organizing needs, discussion of your goals and lifestyle, and a customized recommendation for the best package or hourly approach for your situation. There's absolutely no obligation to book—it's truly free advice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Are there any hidden fees?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely not. The price you see is the price you pay. The only additional costs would be organizing products (bins, shelves, etc.) if you choose to purchase them, and we always get your approval first. There are no travel fees, setup fees, or surprise charges—ever.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I upgrade my package later?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Many clients start with a smaller package and upgrade once they see the results. We'll credit your initial package cost toward a larger package at any time. You'll still get the package discount on the upgraded package—no penalty for starting small.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Organized?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95">
            Schedule your free consultation and we'll recommend the best package for your needs and budget.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center gap-2 w-full md:w-auto"
            >
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:+14795551234"
              className="border-2 border-white hover:bg-white hover:text-primary text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call: (479) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
