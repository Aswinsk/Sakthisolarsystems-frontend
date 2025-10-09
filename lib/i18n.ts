export type Locale = "en" | "ml";
const en = { home: { title: "Save on KSEB Bills with Solar Built for Kerala", desc: "On-grid, Hybrid & Off-grid — built for monsoon & humidity." } } as const;
const ml = { home: { title: "കേരളത്തിനായി രൂപകൽപ്പന ചെയ്ത സോളർ", desc: "ഓൺ-ഗ്രിഡ്, ഹൈബ്രിഡ്, ഓഫ്-ഗ്രിഡ് — മൺസൂണിനും ഈർപ്പത്തിനും അനുയോജ്യം." } } as const;
export const dicts = { en, ml };
export function t(locale: Locale, key: string): any {
  const parts = key.split(".");
  let cur: any = dicts[locale];
  for (const p of parts) { if (cur && p in cur) cur = cur[p]; else return key; }
  return cur;
}
