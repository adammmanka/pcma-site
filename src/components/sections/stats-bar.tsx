import Image from "next/image";
export function StatsBar() {
  const stats = [
    { k: "17 years of experience", v: "" },
    { k: "30,027 Happy Merchants", v: "" },
    { k: "$9,000,000 Dollars Processed Per Day", v: "" },
    { k: "10 Countries Supported", v: "" },
  ];
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <Image
        src="/lady-checkout.webp"
        alt=""
        fill
        className="-z-20 object-cover md:object-[center_30%]"
        priority={false}
      />
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(0deg, rgba(13,27,42,0.85), rgba(13,27,42,0.85))" }} />
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto w-full rounded-xl2 bg-white text-black p-8 md:p-12 shadow-soft">
          <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 md:gap-6">
            {stats.map((s) => (
              <div key={s.k} className="text-base md:text-lg font-medium">{s.k}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


