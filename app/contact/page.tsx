"use client";
import { useState } from "react";

export default function ContactPage() {
  const [ok, setOk] = useState(false);
  const [trap, setTrap] = useState("");
  async function onSubmit(formData: FormData) {
    if (trap) return;
    const res = await fetch("/api/contact", { method: "POST", body: formData });
    if (res.ok) setOk(true);
  }
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-heading text-3xl font-semibold mb-2">Contact Us</h1>
      <p className="text-gray-700 mb-6">Get a quick quote or book a site visit.</p>
      {ok ? (
        <div className="p-4 rounded-xl bg-green-50 border text-green-700">Thanks! We will get back within 1 working day.</div>
      ) : (
        <form action={onSubmit} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Full name" className="border rounded-xl px-3 py-2"/>
            <input name="email" type="email" required placeholder="Email" className="border rounded-xl px-3 py-2"/>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="phone" required placeholder="Phone" className="border rounded-xl px-3 py-2"/>
            <input name="address" placeholder="Site address" className="border rounded-xl px-3 py-2"/>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <select name="propertyType" className="border rounded-xl px-3 py-2">
              <option>Home</option><option>Apartment</option><option>Commercial</option><option>Industrial</option>
            </select>
            <input name="monthlyBill" type="number" placeholder="Monthly KSEB bill (₹)" className="border rounded-xl px-3 py-2"/>
            <input name="rooftopArea" type="number" placeholder="Rooftop area (sq m)" className="border rounded-xl px-3 py-2"/>
          </div>
          <textarea name="message" rows={4} placeholder="Message" className="border rounded-xl px-3 py-2"/>
          <input name="company" value={trap} onChange={e=>setTrap(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm shadow-soft">Send Enquiry</button>
            <a className="px-5 py-2.5 rounded-xl bg-secondary text-white text-sm shadow-soft"
               href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20please%20book%20a%20site%20visit">WhatsApp</a>
          </div>
        </form>
      )}
      <div id="site-visit" className="mt-8 rounded-2xl border p-4 bg-black/[.03]">
        <h2 className="font-semibold mb-2">Our Location</h2>
        <div className="aspect-video bg-white rounded-xl flex items-center justify-center text-gray-600 border">Google Map Placeholder</div>
      </div>
    </div>
  );
}
