interface Pkg { id: string; deps: string[]; }
function sortPkgs(pkgs: Pkg[]): string[] {
  const out: string[] = [], seen = new Set<string>();
  const add = (p: Pkg) => {
    if (seen.has(p.id)) return;
    seen.add(p.id);
    p.deps.forEach((d) => pkgs.filter((x) => x.id === d).forEach(add));
    out.push(p.id);
  };
  pkgs.forEach(add);
  return out;
}
const list = [
  { id: "app", deps: ["schemas"] },
  { id: "api", deps: ["schemas"] },
  { id: "schemas", deps: [] },
];
const order = sortPkgs(list);
console.log(`First: ${order[0]}`);
console.log(`Total: ${order.length}`);
console.log(`Before App: ${order.indexOf("schemas") < order.indexOf("app")}`);
console.log(`Before API: ${order.indexOf("schemas") < order.indexOf("api")}`);
