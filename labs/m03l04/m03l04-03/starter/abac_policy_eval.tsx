interface ContextSubject { id: string; dept: string; role: string; }
interface SecureDoc { id: string; dept: string; draft: boolean; }

function evaluateABAC(sub: ContextSubject, doc: SecureDoc, action: string) {
  if (sub.role === "admin") return true;
  if (action === "read") {
    if (!doc.draft) return true;
    return sub.dept === doc.dept;
  }
  return false;
}

const doc = { id: "d1", dept: "legal", draft: true };
const eng = { id: "u1", dept: "eng", role: "viewer" };
const legal = { id: "u2", dept: "legal", role: "viewer" };

console.log(`Engineering read draft: ${evaluateABAC(eng, doc, "read")}`);
console.log(`Legal read draft: ${evaluateABAC(legal, doc, "read")}`);
