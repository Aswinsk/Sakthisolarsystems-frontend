"use client";
import { useEffect } from "react";

export default function BrandLoader() {
  useEffect(() => {
    fetch("/brand.json").then(r => r.json()).then(b => {
      const root = document.documentElement;
      root.style.setProperty("--color-primary", b.primary);
      root.style.setProperty("--color-primary-dark", b.primaryDark);
      root.style.setProperty("--color-primary-light", b.primaryLight);
      root.style.setProperty("--color-secondary", b.secondary);
      root.style.setProperty("--color-secondary-dark", b.secondaryDark);
      root.style.setProperty("--color-secondary-light", b.secondaryLight);
      root.style.setProperty("--color-accent", b.accent);
    }).catch(()=>{});
  }, []);
  return null;
}
