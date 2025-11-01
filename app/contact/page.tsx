import Link from "next/link";
import { Phone, Mail, MapPin, Shield, CheckCircle, Star, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Professional Organizer Fort Smith | Free Consultation",
  description: "Schedule your free consultation with Fort Smith's top professional organizer. Call (479) 555-1234 or fill out our contact form. Same-week availability. Serving Fort Smith and surrounding areas.",
  keywords: ["contact professional organizer fort smith", "free consultation", "fort smith organizer contact", "book organizing service", "fort smith arkansas"],
  openGraph: {
    title: "Contact Us | Professional Organizer Fort Smith | Free Consultation",
    description: "Schedule your free consultation with Fort Smith's top professional organizer. Call (479) 555-1234 or fill out our contact form. Same-week availability.",
    url: "https://professionalorganizerfortsmith.com/contact",
    siteName: "Professional Organizer Fort Smith",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://professionalorganizerfortsmith.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Professional Organizer Fort Smith - Free Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Professional Organizer Fort Smith | Free Consultation",
    description: "Schedule your free consultation with Fort Smith's top professional organizer. Call (479) 555-1234 or fill out our contact form. Same-week availability.",
    images: ["https://professionalorganizerfortsmith.com/og-image.jpg"],
  },
};

export default function ContactPage() {
  const faqQuickLinks = [
    {
      question: "What if I'm embarrassed?",
      answer: "We've seen it all! Our approach is compassionate, confidential, and judgment-free. Everyone needs help sometimes.",
    },
    {
      question: "How long does it last?",
      answer: "With our sustainable systems, most clients maintain organization for years. We create systems that fit your lifestyle.",
    },
    {
      question: "Can you work within my budget?",
      answer: "Absolutely! We offer packages from $650 to $4,500, plus hourly options and payment plans for packages over $1,000.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Transform Your Space Together
            </h1>
            <p className="text-xl md:text-2xl opacity-95">
              Schedule your free consultation or get answers to your questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options (2-column: methods left, form right) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* LEFT COLUMN - Contact Methods */}
            <div className="space-y-6">
              {/* Option 1: Call or Text (Most Prominent) */}
              <div className="bg-white p-8 rounded-xl border-2 border-accent shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-textPrimary mb-2">
                      Call or Text
                    </h3>
                    <p className="text-textPrimary/70 mb-4">
                      Prefer to talk? Call or text us now for immediate assistance.
                    </p>
                    <a
                      href="tel:+14795551234"
                      className="text-3xl font-bold text-accent hover:text-accent/80 transition-colors block mb-3"
                    >
                      (479) 555-1234
                    </a>
                    <p className="text-sm text-textPrimary/60">
                      Monday-Friday 9am-6pm<br />
                      Saturday 10am-4pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Option 2: Email */}
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-textPrimary mb-2">
                      Email Us
                    </h3>
                    <p className="text-textPrimary/70 mb-3">
                      Send us an email and we'll respond within 24 hours.
                    </p>
                    <a
                      href="mailto:hello@professionalorganizerfortsmith.com"
                      className="text-primary hover:text-primary/80 transition-colors font-semibold break-all"
                    >
                      hello@professionalorganizerfortsmith.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Option 3: Service Area */}
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-textPrimary mb-2">
                      Service Area
                    </h3>
                    <p className="text-textPrimary/70 mb-2">
                      Fort Smith, Arkansas and surrounding areas
                    </p>
                    <p className="text-sm text-textPrimary/60">
                      We serve all of Fort Smith and within 30 miles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Contact Form */}
            <div className="bg-background p-8 rounded-xl border border-border">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-textPrimary mb-2">
                  Send a Message
                </h2>
                <p className="text-textPrimary/70">
                  Fill out the form below and we'll respond within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect - 4-Step Timeline */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                What to Expect
              </h2>
              <p className="text-lg text-textPrimary/70">
                Your journey to an organized home in 4 simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting Line (desktop only) */}
              <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-primary/20" style={{ top: '2.5rem' }} />

              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-10">
                  1
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-2">
                  Schedule Consultation
                </h3>
                <p className="text-textPrimary/70">
                  You choose a time that works for you
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-10">
                  2
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-2">
                  We Assess Your Space
                </h3>
                <p className="text-textPrimary/70">
                  30-minute video or in-home visit
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-10">
                  3
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-2">
                  Get Your Custom Plan
                </h3>
                <p className="text-textPrimary/70">
                  Tailored recommendations and pricing
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center relative">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-10">
                  4
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-2">
                  Book Your Transformation
                </h3>
                <p className="text-textPrimary/70">
                  Choose your package and date
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <span className="font-semibold text-textPrimary">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-secondary" />
              </div>
              <span className="font-semibold text-textPrimary">Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-secondary fill-secondary" />
              </div>
              <span className="font-semibold text-textPrimary">500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
                Quick Answers
              </h2>
              <p className="text-lg text-textPrimary/70">
                Common questions we hear from Fort Smith families
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {faqQuickLinks.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white p-6 rounded-xl border border-border shadow-sm"
                >
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-textPrimary/70 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/#faq"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View All FAQs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95">
            Your organized, clutter-free home is just one call away.
          </p>

          {/* Trust Badges Repeated */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full flex items-center gap-2 text-white text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Licensed & Insured</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full flex items-center gap-2 text-white text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full flex items-center gap-2 text-white text-sm font-medium">
              <Star className="w-4 h-4 fill-white" />
              <span>500+ Happy Clients</span>
            </div>
          </div>

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
