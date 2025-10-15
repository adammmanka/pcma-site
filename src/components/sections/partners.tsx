import Image from "next/image";

const logos = [
  { id: "fiserv", w: 96, h: 32 },
  { id: "firstdata", w: 120, h: 32 },
  { id: "clover", w: 110, h: 32 },
  { id: "worldpay", w: 120, h: 32 },
  { id: "global", w: 100, h: 32 },
  { id: "qsys", w: 90, h: 32 },
  { id: "visa", w: 96, h: 32 },
  { id: "mastercard", w: 120, h: 32 },
  { id: "amex", w: 100, h: 32 },
  { id: "discover", w: 120, h: 32 },
];

export function Partners() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Partners</h2>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {logos.map(({ id, w, h }) => (
            <div
              key={id}
              className="flex h-24 items-center justify-center rounded-xl2 tile"
              aria-label={id}
            >
              <Image
                src={`/partners/${id}.svg`}
                alt={id}
                width={w}
                height={h}
                className="h-7 w-auto opacity-80 grayscale contrast-150 brightness-125 transition-all duration-200 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


