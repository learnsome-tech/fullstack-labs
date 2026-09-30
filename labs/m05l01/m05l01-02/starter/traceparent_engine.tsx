interface TraceCtx { traceId: string; spanId: string; }

function parseTraceparent(raw: string): TraceCtx {
  const parts = raw.split("-");
  return { traceId: parts[1], spanId: parts[2] };
}

function makeChildSpan(p: TraceCtx, childId: string): TraceCtx {
  return { traceId: p.traceId, spanId: childId };
}

const header = "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01";
const root = parseTraceparent(header);
console.log(`Root span identifier: ${root.spanId}`);

const child = makeChildSpan(root, "child-span-001");
console.log(`Child matches trace: ${child.traceId === root.traceId}`);
console.log(`Child unique span: ${child.spanId !== root.spanId}`);
console.log(`Child span identifier: ${child.spanId}`);
