interface Stage { name: string; sizeMb: number; user: string; }
const stages: Stage[] = [
  { name: "builder", sizeMb: 1200, user: "root" },
  { name: "runner", sizeMb: 95, user: "nodejs" },
];

function inspectBuild(s: Stage[]) {
  const final = s[s.length - 1];
  const saved = s[0].sizeMb - final.sizeMb;
  return { finalUser: final.user, size: final.sizeMb, saved };
}

const stats = inspectBuild(stages);
console.log(`Runner user: ${stats.finalUser}`);
console.log(`Runner size in megabytes: ${stats.size}`);
console.log(`Megabytes saved: ${stats.saved}`);
console.log(`Is non root user: ${stats.finalUser !== "root"}`);
