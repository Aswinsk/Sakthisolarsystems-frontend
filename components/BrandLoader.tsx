"use client";
import { useEffect } from "react";
export default function BrandLoader(){
  useEffect(()=>{
    fetch("/brand.json").then(r=>r.json()).then(b=>{
      const r=document.documentElement;
      r.style.setProperty("--color-primary", b.primary);
      r.style.setProperty("--color-secondary", b.secondary);
    }).catch(()=>{});
  },[]);
  return null;
}
