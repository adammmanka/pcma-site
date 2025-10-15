import Image from "next/image";

export default function PaymentProcessingPage() {
  return (
    <div className="section">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-semibold">Make it stand out.</h1>
        <p className="mt-4" style={{ color: "var(--muted)" }}>
          Seamless processing, advanced fraud prevention, POS systems, secure e‑commerce gateways, and mobile payments—
          backed by transparent pricing, robust reporting, easy integrations, and 24/7 support.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Image src="/payment-processing-1.jpeg" alt="Processing 1" width={1200} height={800} className="w-full h-48 object-cover rounded-xl2 border" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
          <Image src="/payment-processing-2.webp" alt="Processing 2" width={1200} height={800} className="w-full h-48 object-cover rounded-xl2 border" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
          <Image src="/payment-processing-3.jpeg" alt="Processing 3" width={1200} height={800} className="w-full h-48 object-cover rounded-xl2 border" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
        </div>
        <div className="mt-8 rounded-xl2 border p-6" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <h2 className="text-xl font-medium">Make yourself stand out.</h2>
          <p className="mt-2" style={{ color: "var(--muted)" }}>
            Enhance operations, improve security, and grow with confidence—powered by modern payment technology and clear pricing.
          </p>
        </div>
      </div>
    </div>
  );
}


