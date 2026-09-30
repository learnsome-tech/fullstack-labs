interface IngressPath { path: string; service: string; port: number; }
const routes: IngressPath[] = [
  { path: "/api", service: "bff-service", port: 4000 },
  { path: "/", service: "frontend-ssr", port: 3000 },
];

function resolveRoute(urlPath: string, table: IngressPath[]) {
  const match = table
    .filter((r) => urlPath.startsWith(r.path))
    .sort((a, b) => b.path.length - a.path.length)[0];
  return match ?? { path: "none", service: "not-found", port: 0 };
}

const apiTarget = resolveRoute("/api/v1/orders", routes);
const uiTarget = resolveRoute("/dashboard", routes);
console.log(`API target service: ${apiTarget.service}:${apiTarget.port}`);
console.log(`UI target service: ${uiTarget.service}:${uiTarget.port}`);
