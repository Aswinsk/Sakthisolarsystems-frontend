"use client";
import { useState } from "react";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y rounded-xl border">
      {items.map((it, idx) => (
        <div key={idx}>
          <button
            className="w-full text-left px-4 py-3 font-medium"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            {it.q}
          </button>
          {open === idx && <div className="px-4 pb-4 text-sm text-neutral-600">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}
