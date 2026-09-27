interface EventMsg { id: string; type: string; payload: string; }
const seen = new Set<string>();
const processed: string[] = [];

function handleEvent(e: EventMsg): { ok: boolean; status: string } {
  if (seen.has(e.id)) return { ok: true, status: "SKIPPED_DUPLICATE" };
  seen.add(e.id);
  processed.push(e.payload);
  return { ok: true, status: "PROCESSED" };
}

const msg = { id: "evt-10", type: "PAID", payload: "order-99" };
const r1 = handleEvent(msg);
console.log(`First dispatch: ${r1.status}`);

const r2 = handleEvent(msg);
console.log(`Replayed dispatch: ${r2.status}`);
console.log(`Total processed count: ${processed.length}`);
console.log(`Recorded order payload: ${processed[0]}`);
