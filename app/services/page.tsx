import Link from "next/link";
import { ArrowRight, Home, Briefcase, Sparkles, Truck, Users, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Organizing Services | Fort Smith, Arkansas",
  description: "Comprehensive home and office organizing services in Fort Smith. Decluttering, space planning, moving assistance, and more.",
};

export default function ServicesPage() {
  const services = [
    {
      slug: "home-organization",
      title: "Home Organization",
      icon: <Home className="w-12 h-12 text-primary" />,
      description: "Transform your living spaces into organized, functional areas that bring peace and joy to your daily life.",
      features: [
        "Kitchen and pantry organization",
        "Closet and wardrobe systems",
        "Bedroom and bathroom organization",
        "Garage and storage solutions",
        "Living space optimization",
      ],
    },
    {
      slug: "office-organization",
      title: "Office Organization",
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      description: "Boost productivity with organized workspaces designed for efficiency and professional success.",
      features: [
        "Desk and filing systems",
        "Digital organization strategies",
        "Supply inventory management",
        "Workflow optimization",
        "Professional space planning",
      ],
    },
    {
      slug: "decluttering",
      title: "Decluttering Services",
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      description: "Let go of what no longer serves you with compassionate guidance through the decluttering process.",
      features: [
        "Room-by-room decluttering",
        "Decision-making support",
        "Donation coordination",
        "Sustainable disposal methods",
        "Emotional support throughout",
      ],
    },
    {
      slug: "moving-assistance",
      title: "Moving Assistance",
      icon: <Truck className="w-12 h-12 text-primary" />,
      description: "Make your move stress-free with expert packing, unpacking, and organization services.",
      features: [
        "Pre-move decluttering",
        "Packing and labeling systems",
        "Unpacking and setup",
        "New space organization",
        "Moving timeline planning",
      ],
    },
    {
      slug: "senior-downsizing",
      title: "Senior Downsizing",
      icon: <Users className="w-12 h-12 text-primary" />,
      description: "Compassionate support for seniors transitioning to smaller living spaces with dignity and ease.",
      features: [
        "Sensitive decluttering guidance",
        "Memory preservation planning",
        "Estate coordination",
        "Family mediation support",
        "Moving and setup assistance",
      ],
    },
    {
      slug: "time-management",
      title: "Time Management Systems",
      icon: <Clock className="w-12 h-12 text-primary" />,
      description: "Develop personalized systems to manage your time effectively and accomplish your goals.",
      features: [
        "Daily routine optimization",
        "Priority setting strategies",
        "Productivity tools setup",
        "Habit formation guidance",
        "Goal tracking systems",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
              Professional Organizing Services
            </h1>
            <p className="text-xl text-textPrimary/80">
              Comprehensive solutions tailored to transform your space and simplify your life in Fort Smith, Arkansas
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border"
              >
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-textPrimary mb-4">
                  {service.title}
                </h2>
                <p className="text-textPrimary/70 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-textPrimary mb-3">What's Included:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-textPrimary/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-textPrimary/70 max-w-2xl mx-auto">
              A simple, proven approach to transforming your space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Free initial meeting to discuss your needs and goals",
              },
              {
                step: "02",
                title: "Assessment",
                description: "Detailed evaluation of your space and organization challenges",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Hands-on organizing with personalized systems",
              },
              {
                step: "04",
                title: "Follow-up",
                description: "Continued support to ensure lasting success",
              },
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  {process.title}
                </h3>
                <p className="text-textPrimary/70">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your free consultation and discover how we can transform your space
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
