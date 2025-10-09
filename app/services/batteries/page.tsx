import services from "@/content/services.json";
import faqs from "@/content/faqs.json";
import { Accordion } from "@/components/Accordion";
import Link from "next/link";

export default function ServiceDetail() {
  const data: any = (services as any)["batteries"];
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-heading text-3xl font-semibold mb-2">{data.title}</h1>
      <p className="text-neutral-700 mb-6">{data.notes}</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold mb-2">Benefits</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            {data.benefits.map((b: string, i: number) => <li key={i}>{b}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Key Specs</h2>
          <table className="w-full text-sm border">
            <tbody>
              {data.specs.map((row: [string,string], i: number) => (
                <tr key={i} className="border-b">
                  <td className="p-2 font-medium">{row[0]}</td>
                  <td className="p-2">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="font-semibold mb-2">Recommended Brands</h2>
        <p className="text-sm">{data.brands.join(", ") || "—"}</p>
      </div>

      <div className="mt-4 text-sm">
        <p><b>Typical Kerala payback:</b> {data.paybackYears}</p>
        <p><b>Net-metering:</b> We guide you through KSEB application and required metering changes.</p>
        <p><b>Maintenance for monsoon/coastal areas:</b> Inspect mounts, sealants, and cable entries; schedule cleaning; check earthing and SPD.</p>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold mb-3">FAQs</h2>
        <Accordion items={faqs as any} />
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/contact" className="px-4 py-2 rounded-md bg-primary text-white text-sm">Get a Free Solar Quote</Link>
        <Link href="/contact#site-visit" className="px-4 py-2 rounded-md bg-secondary text-white text-sm">Request a Site Visit</Link>
      </div>
    </div>
  );
}
