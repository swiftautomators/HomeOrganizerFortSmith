import Link from "next/link";
import { CheckCircle, Clock, Shield, ArrowRight, Star, Award, ChevronDown, Home as HomeIcon, TrendingUp, Trophy, Users, Truck, Shirt, Briefcase, Monitor, DollarSign, MapPin } from "lucide-react";

export default function Home() {
  const professionalServices = [
    {
      title: "Home Organization",
      description: "Transform cluttered spaces into calm, functional areas that make daily life easier and more enjoyable.",
      price: "From $60/hour",
      href: "/services/home-organization",
      icon: <HomeIcon className="w-[60px] h-[60px] text-secondary" />,
    },
    {
      title: "Move Management",
      description: "Stress-free moving with professional packing, unpacking, and setup services for your new home.",
      price: "From $85/hour",
      href: "/services/move-management",
      icon: <Truck className="w-[60px] h-[60px] text-secondary" />,
    },
    {
      title: "Closet Organization",
      description: "Custom closet systems that make getting dressed effortless and help you love your wardrobe again.",
      price: "From $60/hour",
      href: "/services/closet-organization",
      icon: <Shirt className="w-[60px] h-[60px] text-secondary" />,
    },
    {
      title: "Office Organization",
      description: "Boost productivity with organized workspaces, efficient filing systems, and clutter-free desks.",
      price: "From $75/hour",
      href: "/services/office-organization",
      icon: <Briefcase className="w-[60px] h-[60px] text-secondary" />,
    },
    {
      title: "Estate & Downsizing",
      description: "Compassionate support for seniors downsizing or families managing estate transitions.",
      price: "From $90/hour",
      href: "/services/estate-downsizing",
      icon: <Users className="w-[60px] h-[60px] text-secondary" />,
    },
    {
      title: "Digital Organization",
      description: "Organize your digital life with cloud storage, file systems, and paperless office solutions.",
      price: "From $80/hour",
      href: "/services/digital-organization",
      icon: <Monitor className="w-[60px] h-[60px] text-secondary" />,
    },
  ];

  // Why Choose Us Benefits
  const whyChooseUs = [
    {
      icon: <DollarSign className="w-12 h-12 text-secondary" />,
      headline: "No Hidden Fees, Ever",
      description: "See exactly what you'll pay before you book. No surprises, no pressure, just honest pricing.",
    },
    {
      icon: <Clock className="w-12 h-12 text-secondary" />,
      headline: "Get Organized This Week",
      description: "Most competitors make you wait weeks. We offer same-week appointments because we know you're ready for change now.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-secondary" />,
      headline: "Real Results, Guaranteed",
      description: "We've transformed 500+ Fort Smith homes. If you're not thrilled with the results, we'll make it right—guaranteed.",
    },
    {
      icon: <MapPin className="w-12 h-12 text-secondary" />,
      headline: "Fort Smith Born & Raised",
      description: "We understand Fort Smith homes, weather challenges, and local donation centers. You're working with neighbors, not strangers.",
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

  // Social Proof Statistics
  const statistics = [
    {
      number: "500+",
      label: "Homes Organized",
      icon: <HomeIcon className="w-10 h-10 text-secondary" />,
    },
    {
      number: "50+",
      label: "5-Star Reviews",
      icon: <Star className="w-10 h-10 text-secondary" />,
    },
    {
      number: "10+",
      label: "Years Experience",
      icon: <TrendingUp className="w-10 h-10 text-secondary" />,
    },
    {
      number: "100%",
      label: "Satisfaction Rate",
      icon: <Trophy className="w-10 h-10 text-secondary" />,
    },
  ];

  // Social Proof Testimonials
  const socialProofTestimonials = [
    {
      name: "Sarah M.",
      location: "Fort Smith",
      service: "Home Organization Package",
      rating: 5,
      quote: "I can't believe the transformation! My home went from chaotic to calm in just two days. The team was professional, non-judgmental, and created systems that actually work for my busy family.",
      avatar: "SM",
    },
    {
      name: "Michael R.",
      location: "Fort Smith",
      service: "Move Management",
      rating: 5,
      quote: "Moving was always my nightmare, but they made it seamless. From packing to unpacking, everything was organized and labeled. We settled into our new home in half the time I expected.",
      avatar: "MR",
    },
    {
      name: "Jennifer K.",
      location: "Fort Smith",
      service: "Closet Organization",
      rating: 5,
      quote: "Getting dressed used to take 20 minutes of frustration. Now it takes 5 minutes and I actually enjoy it. The custom closet system they designed is both beautiful and functional.",
      avatar: "JK",
    },
  ];

  return (
    <>
      {/* Hero Section - Conversion Optimized */}
      <section className="relative min-h-[auto] md:min-h-screen bg-gradient-to-br from-primary via-primary to-[#3C7383] flex items-center">
        <div className="container-custom py-20 md:py-0">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Main Headline - 4-U Formula */}
            <h1 className="text-[32px] leading-tight md:text-[48px] font-bold mb-6 md:mb-8">
              Fort Smith's Trusted Professional Organizer—Transform Your Home in Days, Not Months
            </h1>

            {/* Subheadline - Customer Problem Focus */}
            <p className="text-[18px] md:text-[24px] font-medium mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed opacity-95">
              Overwhelmed by clutter? We create calm, organized spaces that fit your life—with transparent pricing and same-week availability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-12">
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-10 py-5 md:px-12 md:py-7 rounded-lg font-bold text-[18px] md:text-[20px] transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Get MY Free Consultation
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/pricing"
                className="border-2 border-white text-white hover:bg-white/10 px-10 py-5 md:px-12 md:py-7 rounded-lg font-bold text-[18px] md:text-[20px] transition-all"
              >
                See Our Pricing
              </Link>
            </div>

            {/* Trust Signals - Pill Badges */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 md:px-5 md:py-3 rounded-full">
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-white" />
                <span className="text-sm md:text-base font-medium">50+ 5-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 md:px-5 md:py-3 rounded-full">
                <Shield className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 md:px-5 md:py-3 rounded-full">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base font-medium">Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 md:px-5 md:py-3 rounded-full">
                <Award className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base font-medium">NAPO Member</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#social-proof" className="flex flex-col items-center text-white hover:text-white/80 transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-16 md:py-20 bg-secondary/10">
        <div className="container-custom">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
              Trusted by Fort Smith Families
            </h2>
          </div>

          {/* Statistics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 md:mb-20">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-[56px] font-bold text-primary leading-none mb-2">
                  {stat.number}
                </div>
                <div className="text-[16px] text-textPrimary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {socialProofTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-textPrimary/80 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar Circle */}
                    <div className="w-[50px] h-[50px] rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold text-lg">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-textPrimary">
                        {testimonial.name}, {testimonial.location}
                      </p>
                      <p className="text-sm text-textPrimary/60">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Review Platform Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-textPrimary text-sm">Google Reviews</p>
                  <p className="text-xs text-textPrimary/60">4.9/5.0 Rating</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-textPrimary text-sm">Facebook Reviews</p>
                  <p className="text-xs text-textPrimary/60">5.0/5.0 Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
              Our Professional Organizing Services
            </h2>
            <p className="text-lg md:text-xl text-textPrimary/70 max-w-3xl mx-auto">
              From single rooms to whole-home transformations
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 flex flex-col h-full group"
              >
                {/* Icon */}
                <div className="mb-6">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-[24px] font-bold text-primary mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] text-textPrimary/70 leading-relaxed mb-6 flex-grow line-clamp-3">
                  {service.description}
                </p>

                {/* Price */}
                <p className="text-[18px] font-bold text-accent mb-6">
                  {service.price}
                </p>

                {/* CTA Button */}
                <Link
                  href={service.href}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
              Why Fort Smith Families Choose Us
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mb-12">
            {whyChooseUs.map((benefit, index) => (
              <div key={index} className="flex items-start gap-6">
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div className="w-[80px] h-[80px] rounded-full bg-secondary/20 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-[20px] font-bold text-primary mb-3">
                    {benefit.headline}
                  </h3>
                  <p className="text-[16px] text-textPrimary/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 md:mt-16">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-10 py-5 md:px-12 md:py-6 rounded-lg font-bold text-[18px] md:text-[20px] transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Ready to Get Started? Book Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
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
