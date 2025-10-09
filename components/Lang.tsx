"use client";
import { createContext, useContext } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
type L = "en" | "ml";
const C = createContext<L>("en");
export const useLang = () => useContext(C);
export function LangProvider({ children }: { children: React.ReactNode }) {
  const p = useSearchParams();
  const l = (p.get("lang") as L) || "en";
  return <C.Provider value={l}>{children}</C.Provider>;
}
export function LangLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }){
  const l = useLang();
  const url = href.includes("?") ? href + "&lang=" + l : href + "?lang=" + l;
  return <Link href={url} className={className}>{children}</Link>;
}
