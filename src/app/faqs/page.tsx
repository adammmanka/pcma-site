export default function FaqsPage() {
  const faqs = [
    {
      q: "Who do I contact if I have questions regarding my gateway?",
      a: "Call (800) 485-4808 or the gateway help desk (number provided in welcome emails).",
    },
    {
      q: "How do I batch out my terminal?",
      a: "Procedures vary by terminal/POS. Check the manual or call the Help Desk at (800) 485-4808 for step-by-step assistance.",
    },
    {
      q: "How do I change my business ownership?",
      a: "Send your EIN reflecting the new name. Once verified with the IRS, we'll update the account.",
    },
    {
      q: "I'm selling my business—new owner wants to continue services. How?",
      a: "The new owner applies and, once approved and activated under their MID, the existing MID is closed.",
    },
    {
      q: "How do I update bank account information?",
      a: "Request a Bank Account Update form and fax it with a voided check or bank letter to (800) 485-4808. Don't close the prior account until completion.",
    },
  ];
  return (
    <div className="section">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-semibold">FAQs</h1>
        <div className="mt-6 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl2 border p-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <div className="font-medium">{f.q}</div>
              <div className="mt-2" style={{ color: "var(--muted)" }}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


