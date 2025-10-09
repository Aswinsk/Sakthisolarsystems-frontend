import Image from "next/image";
import Link from "next/link";
import { Estimator } from "@/components/Estimator";
import projects from "@/content/projects.json";
import faqs from "@/content/faqs.json";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-heading text-3xl md:text-5xl font-semibold mb-3">
              Cut Your KSEB Bills with MNRE & BIS-Compliant Solar in Kerala
            </h1>
            <p className="text-neutral-600 mb-5">
              On-grid, Hybrid & Off-grid Systems with quality inverters and batteries — designed for
              monsoon, coastal corrosion, and high humidity.
            </p>
            <ul className="list-disc list-inside text-neutral-700 mb-6">
              <li>Lower KSEB bills</li>
              <li>Net-metering ready</li>
              <li>Monsoon-proof design</li>
            </ul>
            <div className="flex gap-3">
              <CTAButton href="/contact" variant="primary">Get a Free Solar Quote</CTAButton>
              <CTAButton href="/contact#site-visit" variant="secondary">Request a Site Visit</CTAButton>
            </div>
          </div>
          <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow">
            <Image src="/og-image.png" alt="Kerala rooftop solar" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Why Kerala */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Why Go Solar in Kerala</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {["Lower KSEB Bills","Net-metering Ready","Monsoon-Proof Design","Low Maintenance"].map((t,i)=>(
              <Card key={i}><h3 className="font-semibold mb-1">{t}</h3>
                <p className="text-sm text-neutral-600">Kerala-ready designs with corrosion-resistant mounting, IP-rated junctions, and lightning protection options.</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["Solar PV (On-grid / Hybrid / Off-grid)", "/services/solar-pv"],
              ["Inverters", "/services/inverters"],
              ["Batteries", "/services/batteries"],
              ["EPC", "/services/epc"],
              ["O&M / AMC", "/services/om"]
            ].map(([label, href], i) => (
              <Link key={i} href={href} className="rounded-xl border p-5 bg-white shadow-sm hover:shadow-md">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Estimator */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Savings Estimator (INR)</h2>
          <Estimator />
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Our Process</h2>
          <ol className="grid md:grid-cols-6 gap-4 text-sm">
            {["Site survey","Design & Proposal","KSEB approvals","Installation","Commissioning","AMC support"].map((s,i)=>(
              <li key={i} className="p-4 rounded-xl border bg-white text-center">{s}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Certifications & Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
            {["MNRE","BIS/ISI","Jinko","Trina","LONGi","Solis","Sungrow","SMA","Huawei"].map((b,i)=>(
              <div key={i} className="p-4 rounded-xl border text-center bg-white">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.slice(0,3).map((p:any, i:number)=>(
              <Card key={i}>
                <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover"/>
                </div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-neutral-600">{p.location} · {p.sizeKW} kW · {p.monthlyKWh} kWh/mo</p>
                <p className="text-sm">Payback ~ {p.paybackYears} yrs · Bill reduction {p.billReductionPct}%</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-6">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {["Fast install and neat work.","Bills dropped by ~70% in 4 months.","Great support during KSEB approvals."].map((txt,i)=>(
              <Card key={i}><p className="text-sm">“{txt}”</p><p className="mt-2 text-xs text-neutral-500">— Kerala client</p></Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-secondary text-white text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold">Ready to Start?</h2>
        <p className="mt-2 opacity-90">Chat with us on WhatsApp or send a quick enquiry.</p>
        <div className="mt-4 flex gap-3 justify-center">
          <a className="px-4 py-2 rounded-md bg-primary" href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20a%20solar%20quote">WhatsApp</a>
          <a className="px-4 py-2 rounded-md bg-white text-secondary" href="/contact">Enquiry Form</a>
        </div>
      </section>
    </div>
  );
}
