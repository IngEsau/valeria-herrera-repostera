import { access, readFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const distDirectory = path.resolve(projectRoot, "dist");
const canonicalUrl = "https://valeriaherrera.buxdev.com/";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function readOutputFile(relativePath) {
  return readFile(path.join(distDirectory, relativePath), "utf8");
}

const [html, robots, sitemap] = await Promise.all([
  readOutputFile("index.html"),
  readOutputFile("robots.txt"),
  readOutputFile("sitemap.xml"),
]);

await Promise.all([
  access(path.join(distDirectory, "images/hero/hero-cake.webp")),
  access(path.join(distDirectory, "images/hero/hero-social.png")),
]);

const requiredHtmlFragments = [
  '<html lang="es">',
  "<title>Valeria Herrera | Repostería artesanal en Puebla</title>",
  '<script type="application/ld+json">',
  "<header",
  "<main",
  "<h1",
  "San Pedro Cholula",
  "Momoxpan",
  "Lunes a viernes",
];

for (const fragment of requiredHtmlFragments) {
  assert(html.includes(fragment), `Falta contenido SEO en dist/index.html: ${fragment}`);
}

const requiredHtmlPatterns = [
  [/<meta\s+name="description"\s+content="[^"]+"\s*\/>/s, "meta description"],
  [/<meta\s+name="robots"\s+content="index, follow,[^"]+"\s*\/>/s, "meta robots"],
  [
    new RegExp(`<link\\s+rel="canonical"\\s+href="${canonicalUrl}"\\s*\\/>`, "s"),
    "canonical",
  ],
  [/<meta\s+property="og:title"\s+content="[^"]+"\s*\/>/s, "Open Graph title"],
  [/<meta\s+property="og:image"\s+content="https:\/\/[^\"]+"\s*\/>/s, "Open Graph image"],
  [/<div id="root">\s*<[^/]/s, "contenido prerenderizado"],
];

for (const [pattern, label] of requiredHtmlPatterns) {
  assert(pattern.test(html), `Falta ${label} en dist/index.html.`);
}

assert(!html.includes('<div id="root"></div>'), "La SPA no quedó prerenderizada.");
assert(!/noindex/i.test(html), "El HTML de producción contiene noindex.");
assert(
  (html.match(/<h1(?:\s|>)/g) ?? []).length === 1,
  "La página debe contener exactamente un H1.",
);
assert(
  (html.match(/rel="canonical"/g) ?? []).length === 1,
  "La página debe contener exactamente un canonical.",
);

const jsonLdScripts = [...html.matchAll(
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
)];
assert(jsonLdScripts.length > 0, "No se encontró JSON-LD en el HTML final.");

const structuredData = jsonLdScripts.map((match) => JSON.parse(match[1]));
const graph = structuredData.flatMap((entry) => entry["@graph"] ?? [entry]);
const person = graph.find(
  (entry) => entry["@id"] === `${canonicalUrl}#valeria-herrera`,
);

assert(person?.["@type"] === "Person", "Falta la entidad Person de Valeria Herrera.");
assert(person.contactPoint?.["@type"] === "ContactPoint", "Falta ContactPoint.");

const serviceAreas = person.contactPoint.areaServed?.map((area) => area.name) ?? [];
assert(
  ["Puebla", "San Pedro Cholula", "Momoxpan"].every((area) =>
    serviceAreas.includes(area),
  ),
  "Las zonas de servicio estructuradas no coinciden con el contenido visible.",
);
assert(
  person.contactPoint.hoursAvailable?.opens === "07:00" &&
    person.contactPoint.hoursAvailable?.closes === "21:00",
  "El horario estructurado no coincide con el horario confirmado.",
);
assert(
  person.contactPoint.hoursAvailable?.dayOfWeek?.length === 5,
  "El horario estructurado debe cubrir de lunes a viernes.",
);

assert(robots.includes("User-agent: *"), "robots.txt no declara un user agent global.");
assert(robots.includes("Allow: /"), "robots.txt no permite rastrear el sitio.");
assert(
  robots.includes(`Sitemap: ${canonicalUrl}sitemap.xml`),
  "robots.txt no enlaza el sitemap canónico.",
);
assert(
  sitemap.includes(`<loc>${canonicalUrl}</loc>`),
  "sitemap.xml no contiene la URL canónica.",
);

console.log("SEO build verification passed.");
