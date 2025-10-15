export function Inclusion() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Who We Serve</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5" style={{ color: "var(--muted)" }}>
            <li>Businesses restricted by processors or banks</li>
            <li>Merchants recovering from predatory practices</li>
            <li>Entrepreneurs seeking direct access to major networks</li>
            <li>Low-risk small businesses under our 6% inclusion policy</li>
          </ul>
        </div>
        <div className="rounded-xl2 border p-6" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <h3 className="text-xl font-medium">Our Compliance Charter: 6% Inclusion</h3>
          <p className="mt-2" style={{ color: "var(--muted)" }}>
            We maintain a minimum of 6% low-risk portfolios so small and mid-sized businesses receive enterprise-level benefits.
          </p>
        </div>
      </div>
    </section>
  );
}


