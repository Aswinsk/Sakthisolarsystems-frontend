import en from "@/content/i18n/en.json";
import ml from "@/content/i18n/ml.json";
export type Locale = "en" | "ml";
export const dictionaries = { en, ml };
export function t(locale: Locale, key: string) {
  const parts = key.split("."); let cur:any = dictionaries[locale];
  for (const p of parts) { if (cur && p in cur) cur = cur[p]; else return key; }
  return cur;
}
