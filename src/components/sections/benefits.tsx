import { Shield, Infinity, FileX, ArrowDownUp, Scale, MonitorSmartphone } from "lucide-react";

const items = [
  { icon: Infinity, label: "Unlimited Processing" },
  { icon: FileX, label: "No Contracts, No Hidden Fees" },
  { icon: MonitorSmartphone, label: "Free Clover Equipment" },
  { icon: ArrowDownUp, label: "Transparent Flat Pricing" },
  { icon: Shield, label: "Protection from Predatory Processors" },
  { icon: Scale, label: "6% Inclusion Policy" },
];

export function Benefits() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Everything Your Business Needs—Without the Hidden Costs.</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-4 rounded-xl2 border p-5" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <Icon className="opacity-80" />
              <span style={{ color: "var(--muted)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


