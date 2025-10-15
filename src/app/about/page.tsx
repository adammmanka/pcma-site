import Image from "next/image";

export default function About() {
  return (
    <div className="section">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold">About PCMA</h1>
            <p className="mt-4" style={{ color: "var(--muted)" }}>
              We represent the private client and private banking side of the payments industry—
              delivering direct access to elite merchant programs, advanced technology, and transparent financial solutions.
            </p>
            <h2 className="mt-6 text-xl font-medium">Mission & Vision</h2>
            <p className="mt-2" style={{ color: "var(--muted)" }}>
              Elevate and humanize payments with a private-client standard built on transparency, inclusion, and performance.
              Our 6% inclusion policy ensures small and mid-sized businesses receive enterprise-level benefits.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl2 border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <Image src="/about-img.webp" alt="About" width={1200} height={800} className="w-full h-72 object-cover" />
          </div>
        </div>
        <div className="mt-8 overflow-hidden rounded-xl2 border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <Image src="/about-img-2.webp" alt="Team" width={1200} height={800} className="w-full h-64 object-cover" />
        </div>
      </div>
    </div>
  );
}


