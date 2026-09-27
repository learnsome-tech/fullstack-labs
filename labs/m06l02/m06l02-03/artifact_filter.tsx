interface FileEntry { path: string; stage: string; }
const artifacts: FileEntry[] = [
  { path: "src/server.ts", stage: "builder" },
  { path: "dist/index.js", stage: "runner" },
];

function isProductionSafe(files: FileEntry[]) {
  const runnerFiles = files.filter((f) => f.stage === "runner");
  const hasTsSources = runnerFiles.some((f) => f.path.endsWith(".ts"));
  const hasCompiledJs = runnerFiles.some((f) => f.path.endsWith(".js"));
  return !hasTsSources && hasCompiledJs;
}

const secure = isProductionSafe(artifacts);
console.log(`Production image safe: ${secure}`);
const runnerCount = artifacts.filter((a) => a.stage === "runner").length;
console.log(`Runner artifact count: ${runnerCount}`);
