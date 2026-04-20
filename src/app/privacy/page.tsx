import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Helifilm Produkcija",
  description:
    "How Helifilm Produkcija collects, uses, and protects personal data submitted through the website.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1a] text-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#D4A418] transition-colors mb-10"
        >
          <span aria-hidden="true">←</span> Back to home
        </Link>

        <h1 className="font-heading text-4xl lg:text-5xl font-medium tracking-tight mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-white/75 leading-relaxed">
          <p className="text-sm text-white/50">Last updated: April 2026</p>

          <section>
            <h2 className="font-heading text-xl text-white mb-3">1. Who we are</h2>
            <p>
              Helifilm Produkcija is an aerial cinematography studio based in Sarajevo, Bosnia
              & Herzegovina. This policy describes how we handle information submitted through{" "}
              <span className="text-white">helifilm.ba</span>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-white mb-3">2. Data we collect</h2>
            <p>
              When you use our contact form, we collect the name, company (optional), email
              address, project type, location, budget band, and project brief you submit. We do
              not use tracking cookies beyond anonymous, privacy-friendly analytics for
              aggregated page-view statistics.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-white mb-3">3. How we use it</h2>
            <p>
              Contact-form submissions are used solely to respond to your inquiry and scope a
              potential project. We do not sell or share your data with third parties and do
              not add you to marketing lists without consent.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-white mb-3">4. Retention</h2>
            <p>
              Inquiry data is retained for up to 24 months for project continuity. You may
              request earlier deletion at any time by emailing{" "}
              <a
                href="mailto:info@helifilm.ba"
                className="text-[#D4A418] hover:underline"
              >
                info@helifilm.ba
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-white mb-3">5. Your rights (GDPR)</h2>
            <p>
              You have the right to access, correct, or delete your personal data, and to
              object to its processing. Contact us at the email above to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-white mb-3">6. Contact</h2>
            <p>
              Helifilm Produkcija · Sarajevo, Bosnia & Herzegovina ·{" "}
              <a
                href="mailto:info@helifilm.ba"
                className="text-[#D4A418] hover:underline"
              >
                info@helifilm.ba
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
