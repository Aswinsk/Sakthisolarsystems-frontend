import projects from "@/content/projects.json";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-3xl font-semibold mb-6">Projects</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p: any, i: number) => (
          <div key={i} className="rounded-xl border p-4 bg-white shadow-sm">
            <div className="relative h-40 rounded-lg overflow-hidden mb-3">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover"/>
            </div>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-neutral-600">{p.location} · {p.sizeKW} kW</p>
            <ul className="text-sm mt-1">
              <li>Energy yield: {p.monthlyKWh} kWh/mo</li>
              <li>Bill reduction: {p.billReductionPct}%</li>
              <li>Payback: {p.paybackYears} yrs</li>
              <li>Inverter: {p.inverter || "—"} | Battery: {p.battery || "—"}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
