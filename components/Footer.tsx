import { LangLink } from "@/components/Lang";
export function Footer(){
  return (
    <footer className="bg-black/[.03] mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div><h4 className="font-semibold mb-2">Address</h4><p>Kerala, India</p><p>Service statewide: Kochi, Thiruvananthapuram, Kozhikode, Thrissur & more</p></div>
        <div><h4 className="font-semibold mb-2">Quick Links</h4><ul className="space-y-1">
          <li><LangLink href="/privacy">Privacy</LangLink></li>
          <li><LangLink href="/terms">Terms</LangLink></li>
          <li><LangLink href="/contact">Contact</LangLink></li>
        </ul></div>
        <div><h4 className="font-semibold mb-2">Certifications</h4><p>MNRE / BIS / ISI compliant</p></div>
        <div><h4 className="font-semibold mb-2">Follow</h4><ul className="space-y-1"><li><a href="#">Facebook</a></li><li><a href="#">Instagram</a></li><li><a href="#">LinkedIn</a></li></ul></div>
      </div>
      <div className="border-t py-4 text-center text-xs">© {new Date().getFullYear()} Sakthi Solar Systems. All rights reserved.</div>
    </footer>
  );
}
