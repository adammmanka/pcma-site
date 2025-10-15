const services = [
  { title: "Merchant Consulting & Processing", copy: "Direct banking access, precision underwriting, transparent pricing.", img: "/images/service-consulting.svg" },
  { title: "Private Client Services", copy: "Concierge-level support with enterprise-grade tools.", img: "/images/service-private.svg" },
  { title: "Marketing & Loyalty", copy: "Loyalty, rewards, and geofencing systems that drive growth.", img: "/images/service-marketing.svg" },
  { title: "ISO Partnership Development", copy: "Partnerships with major networks and scalable programs.", img: "/images/service-iso.svg" },
];

export function Services() {
  return (
    <section className="section section-muted">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-xl2 border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <div className="h-48 w-full bg-center bg-cover" style={{ backgroundImage: `url(${s.img})` }} />
              <div className="p-6">
                <h3 className="text-xl font-medium">{s.title}</h3>
                <p className="mt-2" style={{ color: "var(--muted)" }}>{s.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


