import Link from "next/link";
import { Estimator } from "@/components/Estimator";
import { Card } from "@/components/Card";

export default function HomePage() {
  return (
    <div>
      {/* 3D Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center layered-hero">
          <div className="layer">
            <h1 className="font-heading text-4xl md:text-6xl font-semibold mb-4 leading-tight">
              Save on KSEB Bills with <span className="text-primary">Solar</span> Built for Kerala
            </h1>
            <p className="text-gray-600 mb-6">
              On-grid, Hybrid & Off-grid systems with quality inverters and batteries — engineered for monsoon,
              coastal corrosion, and high humidity. MNRE & BIS/ISI compliant.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {["Lower KSEB bills", "Net-metering ready", "Monsoon‑proof design", "Low maintenance"].map((b,i)=>(
                <li key={i} className="rounded-xl border p-3 bg-white shadow-soft tilt">{b}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-primary text-white shadow-soft">Get a Free Solar Quote</Link>
              <Link href="/contact#site-visit" className="px-5 py-2.5 rounded-xl bg-secondary text-white shadow-soft">Request a Site Visit</Link>
            </div>
          </div>
          <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-soft">
            <img src="/images/hero-rooftop.svg" alt="Kerala Rooftop Solar" className="w-full h-full object-cover" />
            <img src="/images/inverter-wall.svg" alt="" className="absolute right-4 bottom-4 w-40 md:w-60 rounded-xl shadow-soft border" />
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-14 bg-black/[.03]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-semibold mb-6">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["Solar PV (On-grid / Hybrid / Off-grid)", "/services/solar-pv", "/images/array-closeup.svg"],
              ["Inverters", "/services/inverters", "/images/inverter-wall.svg"],
              ["Batteries", "/services/batteries", "/images/battery-room.svg"],
              ["EPC", "/services/epc", "/images/industrial.svg"],
              ["O&M / AMC", "/services/om", "/images/array-closeup.svg"]
            ].map(([label, href, img], i) => (
              <Link key={i} href={href as string} className="block">
                <Card tilt>
                  <div className="relative h-36 rounded-xl overflow-hidden mb-3">
                    <img src={img as string} alt="" className="w-full h-full object-cover"/>
                  </div>
                  <div className="font-medium">{label}</div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Estimator */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-semibold mb-6">Savings Estimator (INR)</h2>
          <Estimator />
        </div>
      </section>

      {/* Gallery (lots of pictures) */}
      <section className="py-14 bg-black/[.03]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-semibold mb-6">Gallery</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {["hero-rooftop","array-closeup","industrial","battery-room","inverter-wall","project-kochi","project-trivandrum","project-kozhikode"].map((n)=> (
              <div key={n} className="rounded-2xl overflow-hidden shadow-soft border">
                <img src={`/images/${n}.svg`} alt={n.replace("-", " ")} className="w-full h-48 object-cover"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-semibold mb-6">Our Process</h2>
          <ol className="grid md:grid-cols-6 gap-4 text-sm">
            {["Site survey","Design & Proposal","KSEB approvals","Installation","Commissioning","AMC support"].map((s,i)=>(
              <li key={i} className="p-4 rounded-xl border bg-white text-center shadow-soft">{s}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Brands */}
      <section className="py-14 bg-black/[.03]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-semibold mb-6">Certifications & Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
            {["MNRE","BIS/ISI","Jinko","Trina","LONGi","Solis","Sungrow","SMA","Huawei"].map((b,i)=>(
              <div key={i} className="p-4 rounded-xl border text-center bg-white shadow-soft">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 text-center bg-secondary text-white">
        <h2 className="font-heading text-3xl font-semibold">Ready to Start?</h2>
        <p className="mt-2/ opacity-90">Chat with us on WhatsApp or send a quick enquiry.</p>
        <div className="mt-4 flex gap-3 justify-center">
          <a className="px-5 py-2.5 rounded-xl bg-primary shadow-soft" href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20a%20solar%20quote">WhatsApp</a>
          <a className="px-5 py-2.5 rounded-xl bg-white text-secondary shadow-soft" href="/contact">Enquiry Form</a>
        </div>
      </section>
    </div>
  );
}
