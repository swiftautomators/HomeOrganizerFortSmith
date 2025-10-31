import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Professional Organizer Fort Smith",
  description: "Get in touch for a free consultation. Professional organizing services in Fort Smith, Arkansas. Call (479) 555-1234 or fill out our contact form.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      content: "(479) 555-1234",
      link: "tel:+14795551234",
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      content: "info@professionalorganizerfortsmith.com",
      link: "mailto:info@professionalorganizerfortsmith.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Service Area",
      content: "Fort Smith, AR & Surrounding Areas",
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Business Hours",
      content: "Mon-Fri: 8am-6pm, Sat: 9am-3pm",
      link: null,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-textPrimary/80">
              Ready to transform your space? Contact us today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-white p-6 rounded-xl shadow-md border border-border text-center"
              >
                <div className="flex justify-center mb-3">{info.icon}</div>
                <h3 className="font-semibold text-textPrimary mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-textPrimary/70 hover:text-primary transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-textPrimary/70">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Info */}
              <div>
                <h2 className="text-3xl font-bold text-textPrimary mb-6">
                  Book Your Free Consultation
                </h2>
                <p className="text-textPrimary/80 mb-6 leading-relaxed">
                  Fill out the form and we'll get back to you within 24 hours to schedule your complimentary consultation. During this call, we'll discuss your organizing needs and how we can help.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-textPrimary mb-1">
                        Tell Us About Your Project
                      </h3>
                      <p className="text-textPrimary/70 text-sm">
                        Share details about what you'd like to organize
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-textPrimary mb-1">
                        Free Consultation
                      </h3>
                      <p className="text-textPrimary/70 text-sm">
                        We'll schedule a call to discuss your needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-textPrimary mb-1">
                        Custom Quote
                      </h3>
                      <p className="text-textPrimary/70 text-sm">
                        Receive a personalized plan and pricing
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <p className="text-textPrimary/80 font-medium mb-2">
                    Prefer to call?
                  </p>
                  <a
                    href="tel:+14795551234"
                    className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    (479) 555-1234
                  </a>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-textPrimary mb-8 text-center">
              Common Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  How quickly can you start?
                </h3>
                <p className="text-textPrimary/70">
                  We typically can schedule your first session within 1-2 weeks of your consultation, depending on availability and project scope.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  Do you travel outside Fort Smith?
                </h3>
                <p className="text-textPrimary/70">
                  Yes! We serve Fort Smith and surrounding areas including Van Buren, Barling, Greenwood, and more. Travel fees may apply for locations over 30 miles from Fort Smith.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  What if I need to reschedule?
                </h3>
                <p className="text-textPrimary/70">
                  We understand life happens! Please provide 48 hours notice for rescheduling to avoid cancellation fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
