import { createHash } from "node:crypto";

interface PipelineTask {
  name: string;
  files: string[];
  deps: string[];
}

function computeTaskFingerprint(task: PipelineTask, salt: string): string {
  const hasher = createHash("sha256");
  hasher.update(`${task.name}:${salt}`);
  task.files.sort().forEach((f) => hasher.update(f));
  task.deps.sort().forEach((d) => hasher.update(d));
  return hasher.digest("hex").slice(0, 12);
}

const buildTask: PipelineTask = {
  name: "compile",
  files: ["Button.tsx", "index.ts"],
  deps: ["@acme/tokens#compile"],
};

const hashA = computeTaskFingerprint(buildTask, "prod");
const hashB = computeTaskFingerprint(buildTask, "prod");
console.log(`Deterministic match: ${hashA === hashB}`);
console.log(`Fingerprint length: ${hashA.length}`);
