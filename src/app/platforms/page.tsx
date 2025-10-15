import Image from "next/image";

export default function PlatformsPage() {
  return (
    <div className="section">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-semibold">Our services.</h1>
        <p className="mt-4" style={{ color: "var(--muted)" }}>
          We provide secure, efficient, and reliable payment solutions across industries: Payment Processing, Fraud Prevention,
          POS Solutions, Online Gateways, Mobile Payments, Merchant Accounts, Support, Reporting & Analytics, Integrations,
          and Compliance.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl2 border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <Image src="/platforms-img-1.webp" alt="Platforms" width={1200} height={800} className="w-full h-64 object-cover" />
          </div>
          <div className="overflow-hidden rounded-xl2 border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <Image src="/platforms-img-2.webp" alt="Platforms UI" width={1200} height={800} className="w-full h-64 object-cover" />
          </div>
        </div>
        <div className="mt-8 rounded-xl2 border p-6" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <h2 className="text-xl font-medium">Dream it.</h2>
          <p className="mt-2" style={{ color: "var(--muted)" }}>
            Tailored services that fit each client’s needs—designed to scale with your business.
          </p>
          <h2 className="mt-6 text-xl font-medium">Build it.</h2>
          <p className="mt-2" style={{ color: "var(--muted)" }}>
            Partner with us to streamline payments with secure, customer‑centric platforms and integrations.
          </p>
        </div>
      </div>
    </div>
  );
}


