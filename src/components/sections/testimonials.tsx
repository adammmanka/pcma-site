export function Testimonials() {
  const items = [
    { quote: "Transparent, enterprise-grade tools with concierge support.", author: "Retail Founder" },
    { quote: "Finally processing like a corporation—without the hidden costs.", author: "Hospitality Group" },
    { quote: "Direct access and fair pricing restored our trust.", author: "E-commerce Operator" },
  ];
  return (
    <section className="section section-muted">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Testimonials</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <blockquote key={i} className="rounded-xl2 border p-6" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <p className="italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-3 text-sm" style={{ color: "var(--muted)" }}>— {t.author}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}


