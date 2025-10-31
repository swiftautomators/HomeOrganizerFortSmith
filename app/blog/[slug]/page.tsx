import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { getBlogPostBySlug, getAllBlogSlugs, getAllBlogPosts } from "@/lib/blog-data";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Professional Organizer Fort Smith Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-textPrimary/60">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-textPrimary">{post.category}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Category */}
            <div className="text-primary font-medium mb-4">{post.category}</div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-textPrimary/60 mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <span className="font-medium text-textPrimary">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            {/* Featured Image Placeholder */}
            <div className="mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 h-96 flex items-center justify-center">
              <span className="text-9xl opacity-50">📝</span>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-xl text-textPrimary/80 leading-relaxed mb-8">
                {post.excerpt}
              </div>

              <div
                className="text-textPrimary/80 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split("\n\n")
                    .map((paragraph) => {
                      if (paragraph.startsWith("## ")) {
                        return `<h2 class="text-3xl font-bold text-textPrimary mt-12 mb-6">${paragraph.slice(3)}</h2>`;
                      }
                      if (paragraph.startsWith("# ")) {
                        return `<h1 class="text-4xl font-bold text-textPrimary mt-12 mb-6">${paragraph.slice(2)}</h1>`;
                      }
                      return `<p class="mb-4">${paragraph}</p>`;
                    })
                    .join(""),
                }}
              />
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-textPrimary mb-4">
              Need Help Getting Organized?
            </h2>
            <p className="text-lg text-textPrimary/70 mb-8">
              Our professional organizing team is ready to transform your space
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

      {/* Navigation */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Previous Post */}
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group p-6 bg-background rounded-xl border border-border hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">Previous Post</span>
                  </div>
                  <h3 className="text-xl font-semibold text-textPrimary group-hover:text-primary transition-colors">
                    {prevPost.title}
                  </h3>
                </Link>
              )}

              {/* Next Post */}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group p-6 bg-background rounded-xl border border-border hover:border-primary hover:shadow-md transition-all md:text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-primary mb-3">
                    <span className="text-sm font-medium">Next Post</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-textPrimary group-hover:text-primary transition-colors">
                    {nextPost.title}
                  </h3>
                </Link>
              )}
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Posts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
