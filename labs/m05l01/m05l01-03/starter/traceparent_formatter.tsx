function formatTraceparent(tId: string, sId: string): string {
  return `00-${tId}-${sId}-01`;
}

const trace = "4bf92f3577b34da6a3ce929d0e0e4736";
const span = "00f067aa0ba902b7";
const formatted = formatTraceparent(trace, span);

console.log(`Version prefix: ${formatted.startsWith("00-")}`);
console.log(`Sampled flag: ${formatted.endsWith("-01")}`);
console.log(`Full header length: ${formatted.length}`);
