import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Professional Organizer Fort Smith",
  description: "Terms of Service for Professional Organizer Fort Smith. Review our service terms and conditions.",
};

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-textPrimary mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none text-textPrimary/80 space-y-6">
            <p className="text-sm text-textPrimary/60">Last Updated: October 31, 2024</p>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Agreement to Terms</h2>
              <p>
                By accessing our website and using our services, you agree to be bound by these Terms of Service
                and all applicable laws and regulations. If you do not agree with any of these terms, you are
                prohibited from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Services</h2>
              <p>
                Professional Organizer Fort Smith provides professional organizing services including but not
                limited to home organization, office organization, decluttering, and moving assistance. Service
                details and pricing are subject to change and will be confirmed during consultation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Booking and Cancellation</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>A free initial consultation is required before booking services</li>
                <li>Services must be scheduled in advance based on availability</li>
                <li>Cancellations must be made at least 48 hours in advance</li>
                <li>Late cancellations (less than 48 hours) may incur a 50% fee</li>
                <li>No-shows will be charged the full session fee</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment is due at the end of each session or upon package purchase</li>
                <li>We accept cash, checks, and major credit cards</li>
                <li>Package purchases are non-refundable but may be transferred to others</li>
                <li>Organizing products and supplies are billed separately unless specified</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing safe and accessible work environment</li>
                <li>Being present or having an authorized representative during sessions</li>
                <li>Making final decisions on items to keep, donate, or discard</li>
                <li>Securing valuables and important documents before sessions</li>
                <li>Notifying us of any health or safety concerns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Confidentiality</h2>
              <p>
                We maintain strict confidentiality regarding your personal information, home environment,
                and all aspects of our work together. We will not share photos or details of your project
                without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Liability</h2>
              <p>
                While we take every precaution, Professional Organizer Fort Smith is not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Items accidentally discarded with client approval</li>
                <li>Pre-existing damage to property or belongings</li>
                <li>Loss or damage to items not properly disclosed</li>
                <li>Decisions made by clients regarding their belongings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately
                upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-textPrimary mt-8 mb-4">Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact:
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
