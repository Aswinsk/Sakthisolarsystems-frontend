"use client";
import { Estimator } from "@/components/Estimator";
import { useLang } from "@/components/Lang";
import { t } from "@/lib/i18n";

export default function Page(){
  const lang = useLang();
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-6xl font-semibold mb-4">{t(lang,"home.title")}</h1>
            <p className="text-gray-600 mb-6">{t(lang,"home.desc")}</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {["Lower KSEB bills","Net-metering ready","Monsoon‑proof design","Low maintenance"].map((b,i)=>(
                <li key={i} className="rounded-xl border p-3 bg-white">{b}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-soft">
            <img src="/images/hero-rooftop.svg" alt="Kerala Rooftop Solar" className="w-full h-full object-cover" />
            <img src="/images/inverter.svg" alt="" className="absolute right-4 bottom-4 w-40 md:w-60 rounded-xl shadow-soft border" />
          </div>
        </div>
      </section>
      <section className="py-14"><div className="mx-auto max-w-7xl px-4"><h2 className="font-heading text-3xl font-semibold mb-6">Savings Estimator (INR)</h2><Estimator/></div></section>
      <section className="py-14 bg-black/[.03]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-semibold mb-6">Gallery</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {["hero-rooftop","array","industrial","battery","inverter","kochi","tvm","kozhikode"].map(n=>(
              <div key={n} className="rounded-2xl overflow-hidden shadow-soft border">
                <img src={`/images/${n}.svg`} alt={n} className="w-full h-48 object-cover"/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
