import Link from "next/link";
export default function ServiceDetail() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-heading text-3xl font-semibold mb-3">Batteries</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold mb-2">Benefits</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Kerala-optimised design</li>
            <li>MNRE & BIS/ISI compliant</li>
            <li>KSEB net-metering ready</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Key Specs</h2>
          <table className="w-full text-sm border">
            <tbody>
              <tr><td className="p-2 font-medium">Mounting</td><td className="p-2">Aluminium with SS fasteners (anti-corrosion)</td></tr>
              <tr><td className="p-2 font-medium">Protection</td><td className="p-2">SPD, Earthing, Lightning arrestor</td></tr>
              <tr><td className="p-2 font-medium">IP Rating</td><td className="p-2">IP65/66 junctions</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 flex gap-3">
        <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-primary text-white shadow-soft text-sm">Get a Free Solar Quote</Link>
        <Link href="/contact#site-visit" className="px-5 py-2.5 rounded-xl bg-secondary text-white shadow-soft text-sm">Request a Site Visit</Link>
      </div>
    </div>
  );
}
