interface Row { id: string; name?: string; first?: string; last?: string; }
const table: Row[] = [{ id: "u1", name: "Ada Lovelace" }];

function expand(rows: Row[]) {
  rows.forEach((r) => { r.first = r.first ?? ""; r.last = r.last ?? ""; });
}
function backfill(rows: Row[]) {
  rows.forEach((r) => {
    if (r.name) [r.first, r.last] = r.name.split(" ");
  });
}
function contract(rows: Row[]) {
  rows.forEach((r) => { delete r.name; });
}

expand(table);
backfill(table);
console.log(`First name: ${table[0].first}`);
console.log(`Last name: ${table[0].last}`);
contract(table);
console.log(`Contracted: ${table[0].name === undefined}`);
