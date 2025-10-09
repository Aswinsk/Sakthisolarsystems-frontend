"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LangLink, useLang } from "@/components/Lang";
export function Header(){
  const path=usePathname(); const r=useRouter(); const p=useSearchParams(); const lang=useLang();
  const sw=(l:"en"|"ml")=>{ const q=new URLSearchParams(p as any); q.set("lang",l); r.push(`${path}?${q.toString()}`); };
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow">
      <div className="mx-auto max-w-7xl px-4 h-[var(--header-height)] flex items-center justify-between">
        <LangLink href="/"><div className="flex items-center gap-3"><Image src="/logo.svg" width={160} height={36} alt="Sakthi Solar Systems" priority /><span className="sr-only">Sakthi Solar Systems</span></div></LangLink>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <LangLink href="/about">About</LangLink>
          <LangLink href="/services">Services</LangLink>
          <LangLink href="/projects">Projects</LangLink>
          <LangLink href="/faqs">FAQs</LangLink>
          <LangLink href="/contact">Contact</LangLink>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20a%20solar%20quote" className="hidden sm:inline-flex px-3 py-2 rounded-xl bg-secondary text-white text-sm shadow-soft">WhatsApp</a>
          <a href="tel:+91XXXXXXXXXX" className="px-3 py-2 rounded-xl bg-primary text-white text-sm shadow-soft">+91-XXXXXXXXXX</a>
          <div className="ml-2 border rounded-xl overflow-hidden">
            <button onClick={()=>sw("en")} className={"px-2 py-2 text-xs "+(lang==="en"?"bg-black/5":"")}>EN</button>
            <button onClick={()=>sw("ml")} className={"px-2 py-2 text-xs "+(lang==="ml"?"bg-black/5":"")}>ML</button>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)]" />
    </header>
  );
}
