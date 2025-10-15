import Image from "next/image";

export default function ContactPage() {
  return (
    <div>
      <section className="relative min-h-[50vh] overflow-hidden flex items-center">
        <Image src="/contact-img.webp" alt="Contact" fill priority className="object-cover -z-20" />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, rgba(13,27,42,0.40) 0%, rgba(13,27,42,0.85) 100%)" }} />
        <div className="mx-auto max-w-5xl px-4 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold">We’d love to work with you.</h1>
          <p className="mt-3 max-w-2xl" style={{ color: "var(--muted)" }}>
            Schedule a consultation or apply for membership—our advisors are here to help.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/membership" className="rounded-xl2 px-5 py-3 bg-[var(--accent)] text-white">Apply for Membership</a>
            <a href="mailto:info@upadata.com" className="rounded-xl2 px-5 py-3 border" style={{ borderColor: "rgba(255,255,255,0.2)" }}>Email Us</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-5xl px-4 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl2 border p-6" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <div className="font-semibold text-white">Hours</div>
            <div className="mt-2" style={{ color: "var(--muted)" }}>Sunday – Friday<br/>9am – 5pm</div>
          </div>
          <div className="rounded-xl2 border p-6" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <div className="font-semibold text-white">Follow</div>
            <div className="mt-2 space-x-4" style={{ color: "var(--muted)" }}>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
          <div className="rounded-xl2 border p-6" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <div className="font-semibold text-white">United Processing Association</div>
            <div className="mt-2" style={{ color: "var(--muted)" }}>4021 N. 75th Street, #101 Scottsdale, Arizona 85251</div>
            <div className="mt-1" style={{ color: "var(--muted)" }}>info@upadata.com • (800) 485-4808</div>
          </div>
        </div>
      </section>
    </div>
  );
}


