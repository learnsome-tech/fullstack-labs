interface SSEPayload { id: number; event: string; body: unknown; }

function formatFrame(p: SSEPayload): string {
  return [
    `id: ${p.id}`,
    `event: ${p.event}`,
    `data: ${JSON.stringify(p.body)}`,
    "",
    "",
  ].join("\n");
}

const frame = formatFrame({ id: 5, event: "tick", body: { val: 42 } });
console.log(`Has id directive: ${frame.includes("id: 5\n")}`);
console.log(`Has event directive: ${frame.includes("event: tick\n")}`);
console.log(`Has double newline: ${frame.endsWith("\n\n")}`);
