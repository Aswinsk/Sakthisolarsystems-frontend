export default function sitemap() {
  const base = "https://example.com";
  const routes = ["","/about","/services","/services/solar-pv","/services/inverters","/services/batteries","/services/epc","/services/om","/projects","/faqs","/contact","/privacy","/terms"];
  return routes.map((r) => ({
    url: base + r,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7
  }));
}
