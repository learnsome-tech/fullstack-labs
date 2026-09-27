interface User { id: string; role: "admin" | "user"; }
interface Post { id: string; ownerId: string; }

function canEdit(u: User, p: Post): boolean {
  if (u.role === "admin") return true;
  return u.id === p.ownerId;
}

const post = { id: "p1", ownerId: "u1" };

const r1 = canEdit({ id: "u1", role: "user" }, post);
console.log(`Author can edit: ${r1}`);

const r2 = canEdit({ id: "u2", role: "user" }, post);
console.log(`Stranger can edit: ${r2}`);

const r3 = canEdit({ id: "u99", role: "admin" }, post);
console.log(`Admin can edit: ${r3}`);
