import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Professional Organizer Fort Smith",
  description: "View our before and after transformations. Real organizing projects from Fort Smith homes and offices.",
};

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      category: "Kitchen Organization",
      description: "Complete pantry and kitchen reorganization for a busy family of four.",
      tags: ["Kitchen", "Pantry", "Family Home"],
    },
    {
      id: 2,
      title: "Home Office Overhaul",
      category: "Office Organization",
      description: "Transformed a cluttered spare room into a functional home office.",
      tags: ["Home Office", "Small Space", "Productivity"],
    },
    {
      id: 3,
      title: "Master Closet Redesign",
      category: "Closet Organization",
      description: "Custom closet system installation and complete wardrobe organization.",
      tags: ["Closet", "Wardrobe", "Bedroom"],
    },
    {
      id: 4,
      title: "Garage Storage Solutions",
      category: "Garage Organization",
      description: "Maximized storage space with custom shelving and organization systems.",
      tags: ["Garage", "Storage", "Tools"],
    },
    {
      id: 5,
      title: "Playroom Paradise",
      category: "Kids' Spaces",
      description: "Created an organized, functional play space with easy-to-maintain systems.",
      tags: ["Playroom", "Kids", "Toy Organization"],
    },
    {
      id: 6,
      title: "Peaceful Bedroom Retreat",
      category: "Bedroom Organization",
      description: "Decluttered and organized for a serene, restful bedroom environment.",
      tags: ["Bedroom", "Minimalism", "Decluttering"],
    },
    {
      id: 7,
      title: "Small Business Office",
      category: "Office Organization",
      description: "Organized filing systems and workspace for improved productivity.",
      tags: ["Business", "Filing", "Office"],
    },
    {
      id: 8,
      title: "Moving & Unpacking Service",
      category: "Moving Assistance",
      description: "Full-service packing, moving, and organization for new home setup.",
      tags: ["Moving", "Unpacking", "New Home"],
    },
    {
      id: 9,
      title: "Bathroom Spa Organization",
      category: "Bathroom Organization",
      description: "Transformed cluttered bathroom into an organized spa-like space.",
      tags: ["Bathroom", "Small Space", "Storage"],
    },
  ];

  const categories = [
    "All Projects",
    "Kitchen Organization",
    "Office Organization",
    "Closet Organization",
    "Garage Organization",
    "Kids' Spaces",
    "Bedroom Organization",
    "Moving Assistance",
    "Bathroom Organization",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-textPrimary/80">
              Real transformations from Fort Smith homes and offices. See the difference professional organization can make.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b border-border sticky top-[120px] z-30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All Projects"
                    ? "bg-primary text-white"
                    : "bg-background text-textPrimary hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border overflow-hidden group"
              >
                {/* Placeholder for image */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl opacity-50">🏠</span>
                </div>

                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-textPrimary mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-textPrimary/70 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-background text-textPrimary/70 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "350+", label: "Happy Clients" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-textPrimary/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-12">
              <p className="text-2xl text-textPrimary/80 italic mb-6">
                "The transformation was incredible! I never thought my home could be this organized and functional. The whole process was smooth and stress-free."
              </p>
              <div className="font-semibold text-textPrimary">
                Jennifer Thompson
              </div>
              <div className="text-textPrimary/60">Fort Smith, AR</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create an organized space you'll love. Book your free consultation today.
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
