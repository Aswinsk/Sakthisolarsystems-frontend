import faqs from "@/content/faqs.json";
import { Accordion } from "@/components/Accordion";

export default function FAQsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading text-3xl font-semibold mb-6">FAQs</h1>
      <Accordion items={faqs as any} />
    </div>
  );
}
