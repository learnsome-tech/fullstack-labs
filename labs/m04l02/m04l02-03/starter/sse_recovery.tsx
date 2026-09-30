interface Evt { id: number; data: string; }
const log: Evt[] = [];

function push(data: string): Evt {
  const e = { id: log.length + 1, data };
  log.push(e);
  return e;
}
function recover(lastId: number): Evt[] {
  return log.filter((e) => e.id > lastId);
}

push("Order Placed");
push("Payment Confirmed");
push("Dispatched");

const missed = recover(1);
console.log(`Recovered count: ${missed.length}`);
console.log(`First recovered event: ${missed[0].data}`);
console.log(`Last recovered event: ${missed[1].data}`);
