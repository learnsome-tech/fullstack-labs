interface LogItem { lvl: string; msg: string; corrId: string; }
let activeCorr = "none";

function log(lvl: string, msg: string): LogItem {
  return { lvl, msg, corrId: activeCorr };
}

function runWithContext(id: string, fn: () => void) {
  const prev = activeCorr;
  activeCorr = id;
  fn();
  activeCorr = prev;
}

runWithContext("req-abc", () => {
  const l1 = log("info", "Fetching profile");
  console.log(`Log message: ${l1.msg}`);
  console.log(`Log correlation: ${l1.corrId}`);
});

console.log(`Outside context correlation: ${activeCorr}`);
