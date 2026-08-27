import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const projectRoot = process.cwd();
const outputPath = path.resolve(projectRoot, "dist/index.html");
const rootPlaceholder = '<div id="root"></div>';

const vite = await createServer({
  root: projectRoot,
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

try {
  const { default: App } = await vite.ssrLoadModule("/src/App.tsx");
  const applicationHtml = renderToString(createElement(App));
  const template = await readFile(outputPath, "utf8");

  if (!template.includes(rootPlaceholder)) {
    throw new Error("No se encontró el contenedor vacío para prerenderizar la SPA.");
  }

  const prerenderedHtml = template.replace(
    rootPlaceholder,
    `<div id="root">${applicationHtml}</div>`,
  );

  await writeFile(outputPath, prerenderedHtml);
} finally {
  await vite.close();
}
