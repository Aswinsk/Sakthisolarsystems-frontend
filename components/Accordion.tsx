"use client";
import { useState } from "react";
export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y rounded-2xl border">
      {items.map((it, idx) => (
        <div key={idx}>
          <button className="w-full text-left px-5 py-4 font-medium"
            onClick={() => setOpen(open === idx ? null : idx)}>{it.q}</button>
          {open === idx && <div className="px-5 pb-5 text-sm text-gray-600">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}
