import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    service: slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Professional Organizer Fort Smith`,
    description: service.description,
    keywords: [`${service.title.toLowerCase()} fort smith`, "professional organizer", "fort smith arkansas", service.title.toLowerCase()],
    openGraph: {
      title: `${service.title} | Professional Organizer Fort Smith`,
      description: service.description,
      url: `https://professionalorganizerfortsmith.com/services/${slug}`,
      siteName: "Professional Organizer Fort Smith",
      locale: "en_US",
      type: "website",
    },
  };
}

// Helper function to extract price from pricing string
function extractPrice(pricingString: string): string {
  const match = pricingString.match(/\$(\d+)/);
  return match ? match[1] : "75";
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const basePrice = extractPrice(service.pricing);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-textPrimary/80 mb-6">
              {service.description}
            </p>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-textPrimary mb-6">
              Overview
            </h2>
            <p className="text-lg text-textPrimary/80 leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-textPrimary mb-8">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-textPrimary/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-textPrimary mb-8">
              Our Process
            </h2>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-lg text-textPrimary/80">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-textPrimary mb-6">
              Pricing
            </h2>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <p className="text-xl text-textPrimary font-semibold mb-4">
                {service.pricing}
              </p>
              <p className="text-textPrimary/70 mb-4">
                Package rates and discounts available for larger projects. Contact us for a custom quote.
              </p>
              <Link
                href="/pricing"
                className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2"
              >
                View Full Pricing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-textPrimary mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="bg-white p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold text-textPrimary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-textPrimary/70">{faq.answer}</p>
                </div>
              ))}
            </div>
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
            Book your free consultation today and take the first step toward a more organized life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": service.title,
            "description": service.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Professional Organizer Fort Smith",
              "telephone": "+14795551234",
              "email": "hello@professionalorganizerfortsmith.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Fort Smith",
                "addressRegion": "AR",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Fort Smith",
              "state": "AR"
            },
            "offers": {
              "@type": "Offer",
              "price": basePrice,
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": basePrice,
                "priceCurrency": "USD",
                "unitText": "hour"
              }
            }
          })
        }}
      />

      {/* FAQPage Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": service.faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </>
  );
}
