import Link from "next/link";
import { ArrowRight, Award, Heart, Users, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Professional Organizer Fort Smith",
  description: "Meet the team behind Professional Organizer Fort Smith. Certified professionals dedicated to transforming homes and offices across Arkansas.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Compassion",
      description: "We approach every project with empathy, understanding, and non-judgmental support.",
    },
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality organizing solutions and service.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Collaboration",
      description: "We work alongside you, respecting your vision and incorporating your input.",
    },
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: "Results",
      description: "Focused on creating lasting, sustainable systems that truly transform your life.",
    },
  ];

  const certifications = [
    "Certified Professional Organizer (CPO)",
    "NAPO Member (National Association of Productivity and Organizing Professionals)",
    "Specialist in Residential Organizing",
    "Certified in Senior Move Management",
    "Trained in Chronic Disorganization",
  ];

  const timeline = [
    {
      year: "2009",
      title: "Founded",
      description: "Started helping Fort Smith families organize their homes",
    },
    {
      year: "2012",
      title: "Expanded Services",
      description: "Added office organization and business services",
    },
    {
      year: "2015",
      title: "Team Growth",
      description: "Grew to a team of 5 professional organizers",
    },
    {
      year: "2018",
      title: "Recognition",
      description: "Named Best Organizing Service in Fort Smith",
    },
    {
      year: "2024",
      title: "Today",
      description: "Serving 100+ clients annually with excellence",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
              About Us
            </h1>
            <p className="text-xl text-textPrimary/80">
              Transforming Fort Smith homes and offices, one space at a time, since 2009
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-textPrimary/80 leading-relaxed">
                  <p>
                    Professional Organizer Fort Smith was founded with a simple mission: to help people reclaim their spaces and their peace of mind. What started as a one-person operation has grown into Fort Smith's most trusted organizing service.
                  </p>
                  <p>
                    We've spent over 15 years perfecting our craft, helping hundreds of families and businesses create organized, functional spaces that support their goals and lifestyle. Our approach combines practical expertise with genuine care for our clients' wellbeing.
                  </p>
                  <p>
                    Every project is unique, and we take pride in creating customized solutions that work for real life—not just for show. We believe everyone deserves an organized space, and we're here to make that happen.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-96 rounded-xl flex items-center justify-center">
                <span className="text-8xl">👥</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-textPrimary/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  {value.title}
                </h3>
                <p className="text-textPrimary/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-8 text-center">
              Certifications & Memberships
            </h2>

            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-border">
              <ul className="space-y-4">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-textPrimary">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-12 text-center">
              Our Journey
            </h2>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/30 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-textPrimary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-textPrimary/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-6">
              Serving Fort Smith & Beyond
            </h2>
            <p className="text-lg text-textPrimary/80 mb-8 leading-relaxed">
              We're proud to serve the Fort Smith community and surrounding areas. As a locally-owned business, we understand the unique needs of our neighbors and are committed to making our community more organized, one home at a time.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Fort Smith", "Van Buren", "Barling", "Greenwood"].map((city) => (
                <div
                  key={city}
                  className="bg-white p-4 rounded-lg border border-border"
                >
                  <p className="font-semibold text-textPrimary">{city}</p>
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
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We'd love to hear about your organizing goals and how we can help you achieve them.
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
