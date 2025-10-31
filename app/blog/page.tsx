import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Professional Organizer Fort Smith",
  description: "Tips, tricks, and insights on home organization, decluttering, and creating organized spaces. Expert advice from Fort Smith's professional organizers.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getBlogCategories();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
              Organization Blog
            </h1>
            <p className="text-xl text-textPrimary/80">
              Expert tips, inspiration, and practical advice for creating organized spaces
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-background text-textPrimary hover:bg-primary/10 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {posts.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-border">
                <div className="md:flex">
                  <div className="md:w-1/2 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-12">
                    <span className="text-8xl">📝</span>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="text-sm text-primary font-medium mb-3">
                      Featured Post
                    </div>
                    <h2 className="text-3xl font-bold text-textPrimary mb-4">
                      {posts[0].title}
                    </h2>
                    <p className="text-textPrimary/70 mb-6">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-textPrimary/60 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(posts[0].date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {posts[0].readTime}
                      </div>
                    </div>
                    <Link
                      href={`/blog/${posts[0].slug}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-textPrimary mb-8">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.slug}
                className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl opacity-50">📚</span>
                </div>

                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    {post.category}
                  </div>

                  <h3 className="text-xl font-semibold text-textPrimary mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-textPrimary/70 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-textPrimary/60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-primary text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Organization Tips Delivered
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for weekly organizing tips and exclusive content
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-textPrimary focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
