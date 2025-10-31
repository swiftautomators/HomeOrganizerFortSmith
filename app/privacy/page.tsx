import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Professional Organizer Fort Smith",
  description: "Privacy policy for Professional Organizer Fort Smith. Learn how we protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-textPrimary mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-textPrimary/80 space-y-6">
            <p className="text-sm text-textPrimary/60">Last Updated: October 31, 2024</p>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Introduction</h2>
              <p>
                Professional Organizer Fort Smith ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Address and location information for service delivery</li>
                <li>Payment and billing information</li>
                <li>Communications you send to us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our organizing services</li>
                <li>Process your service requests and payments</li>
                <li>Send you service-related communications</li>
                <li>Improve our services and customer experience</li>
                <li>Send promotional materials (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share
                information with trusted service providers who assist in operating our business, subject
                to confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However,
                no method of transmission over the internet is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: info@professionalorganizerfortsmith.com<br />
                Phone: (479) 555-1234
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
