import Link from "next/link";
import { CheckCircle, Clock, Heart, Shield, ArrowRight, Star } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Home Organization",
      description: "Transform your living spaces into organized, functional areas that bring peace and joy to your daily life.",
      href: "/services/home-organization",
      icon: "🏠",
    },
    {
      title: "Office Organization",
      description: "Boost productivity with organized workspaces designed for efficiency and professional success.",
      href: "/services/office-organization",
      icon: "💼",
    },
    {
      title: "Decluttering Services",
      description: "Let go of what no longer serves you with compassionate guidance through the decluttering process.",
      href: "/services/decluttering",
      icon: "✨",
    },
    {
      title: "Moving Assistance",
      description: "Make your move stress-free with expert packing, unpacking, and organization services.",
      href: "/services/moving-assistance",
      icon: "📦",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Save Time",
      description: "Find what you need instantly and reclaim hours each week with organized systems.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Reduce Stress",
      description: "Experience peace of mind in a clutter-free environment tailored to your lifestyle.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Personalized Solutions",
      description: "Custom organization systems designed specifically for your needs and preferences.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Lasting Results",
      description: "Learn sustainable habits that keep your spaces organized long-term.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Life-changing! My home has never been more organized, and I finally have peace of mind knowing where everything is.",
      location: "Fort Smith, AR",
    },
    {
      name: "Michael Davis",
      rating: 5,
      text: "The office organization service transformed our workspace. Productivity is up, and stress is down!",
      location: "Fort Smith, AR",
    },
    {
      name: "Emily Martinez",
      rating: 5,
      text: "Professional, efficient, and so understanding. They made decluttering my home a positive experience.",
      location: "Fort Smith, AR",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-textPrimary mb-6">
              Transform Your Space,<br />
              <span className="text-primary">Transform Your Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-textPrimary/80 mb-8 max-w-3xl mx-auto">
              Professional organizing services in Fort Smith, Arkansas. Create the organized, peaceful home or office you deserve.
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
                className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-textPrimary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-textPrimary/70 max-w-2xl mx-auto">
              Comprehensive organizing solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-textPrimary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-textPrimary/70 mb-4">{service.description}</p>
                <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-textPrimary mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-textPrimary/70 max-w-2xl mx-auto">
              Experience the benefits of professional organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-textPrimary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-textPrimary/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-textPrimary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-textPrimary/70 max-w-2xl mx-auto">
              Real stories from satisfied clients in Fort Smith
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-xl shadow-md border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-textPrimary/80 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-textPrimary">{testimonial.name}</p>
                  <p className="text-sm text-textPrimary/60">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Organized?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your free consultation today and take the first step toward a more organized life.
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
