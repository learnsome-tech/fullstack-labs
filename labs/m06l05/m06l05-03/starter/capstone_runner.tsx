interface OrderContext { tenant: string; user: string; traceId: string; }
function processOrder(ctx: OrderContext, amount: number) {
  const orderId = "ord-9821";
  const outboxEvent = { type: "ORDER_CREATED", tenant: ctx.tenant };
  return { status: 201, orderId, outboxEvent, trace: ctx.traceId };
}

const context: OrderContext = {
  tenant: "acme-corp",
  user: "alice",
  traceId: "trace-4bf9",
};
const res = processOrder(context, 149.99);
console.log(`Order status code: ${res.status}`);
console.log(`Order identifier: ${res.orderId}`);
console.log(`Outbox event type: ${res.outboxEvent.type}`);
console.log(`Propagated trace: ${res.trace}`);
