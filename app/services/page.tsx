import Link from "next/link";
export default function ServicesPage() {
  const services = [
    ["Solar PV", "/services/solar-pv"],
    ["Inverters", "/services/inverters"],
    ["Batteries", "/services/batteries"],
    ["EPC", "/services/epc"],
    ["O&M / AMC", "/services/om"]
  ];
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-heading text-3xl font-semibold mb-6">Services</h1>
      <ul className="grid md:grid-cols-2 gap-4">
        {services.map(([name, href]) => (
          <li key={href}>
            <Link href={href} className="block rounded-xl border p-5 bg-white shadow-sm hover:shadow-md">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
