interface OutboxRow { id: string; event: string; status: "NEW" | "SENT"; }
const outboxTable: OutboxRow[] = [];

function commitOrderWithOutbox(orderId: string, eventName: string) {
  // Inside database transaction
  const outboxEntry: OutboxRow = {
    id: `outbox-${orderId}`,
    event: eventName,
    status: "NEW",
  };
  outboxTable.push(outboxEntry);
}

commitOrderWithOutbox("order-55", "ORDER_CREATED");
console.log(`Pending outbox records: ${outboxTable.length}`);
console.log(`Outbox event name: ${outboxTable[0].event}`);
console.log(`Initial record status: ${outboxTable[0].status}`);
