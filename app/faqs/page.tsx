export default function FAQsPage() {
  const faqs = [
    { q: "What is KSEB net-metering?", a: "Export excess solar to the grid and offset your bill." },
    { q: "Monsoon reliability?", a: "We use corrosion-resistant mounts, IP-rated junctions, and proper earthing." },
    { q: "Warranties?", a: "Panels up to 25y performance; Inverters 5–10y; Workmanship 1–2y." }
  ];
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading text-3xl font-semibold mb-6">FAQs</h1>
      <div className="divide-y rounded-2xl border">
        {faqs.map((f,i)=>(
          <div key={i}>
            <details className="group">
              <summary className="px-5 py-4 cursor-pointer font-medium list-none">{f.q}</summary>
              <div className="px-5 pb-5 text-sm text-gray-600">{f.a}</div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
