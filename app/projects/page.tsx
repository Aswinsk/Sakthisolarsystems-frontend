export default function ProjectsPage() {
  const items = [
    { img: "/images/project-kochi.svg", title: "10 kW On-grid · Kochi" },
    { img: "/images/project-trivandrum.svg", title: "5 kW Hybrid · Thiruvananthapuram" },
    { img: "/images/project-kozhikode.svg", title: "50 kW Commercial · Kozhikode" }
  ];
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-3xl font-semibold mb-6">Projects</h1>
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((p,i)=>(
          <div key={i} className="rounded-2xl border p-4 bg-white shadow-soft">
            <div className="relative h-44 rounded-xl overflow-hidden mb-3">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover"/>
            </div>
            <div className="font-medium">{p.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
