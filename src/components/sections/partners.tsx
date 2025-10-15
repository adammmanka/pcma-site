import Image from "next/image";

const logos = ["fiserv","firstdata","clover","worldpay","global","qsys","visa","mastercard","amex","discover"];

export function Partners() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Partners</h2>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((l) => (
            <div key={l} className="flex items-center justify-center rounded-xl2 border p-6" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <Image src={`/partners/${l}.svg`} alt={l} width={96} height={32} className="opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


