import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Helifilm Produkcija",
  description:
    "Legal information and business details for Helifilm Produkcija, Sarajevo.",
};

export default function ImpressumPage() {
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
          Impressum
        </h1>

        <div className="space-y-6 text-white/75 leading-relaxed">
          <section>
            <h2 className="font-heading text-xl text-white mb-3">Company</h2>
            <p>
              Helifilm Produkcija
              <br />
              Sarajevo, Bosnia &amp; Herzegovina
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-white mb-3">Responsible</h2>
            <p>Hajrudin Suljić — Founder, Drone Pilot &amp; Cinematographer</p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-white mb-3">Contact</h2>
            <p>
              Email:{" "}
              <a
                href="mailto:info@helifilm.ba"
                className="text-[#D4A418] hover:underline"
              >
                info@helifilm.ba
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+38761288221"
                className="text-[#D4A418] hover:underline"
              >
                +387 61 288 221
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-white mb-3">Operations</h2>
            <p>
              BHDCA-registered drone operator. Commercial liability coverage maintained for
              film, television, and commercial aerial production across Bosnia &amp;
              Herzegovina and the wider region.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-white mb-3">Content disclaimer</h2>
            <p>
              All content, photography, video, and footage on this site is © Helifilm
              Produkcija unless otherwise credited. Unauthorised reproduction or
              redistribution is prohibited.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
