interface Problem {
  status: number;
  detail: string;
  invalidParams?: Array<{ name: string; reason: string }>;
}

function normalize(p: Problem) {
  const fields: Record<string, string> = {};
  p.invalidParams?.forEach((i) => { fields[i.name] = i.reason; });
  return { status: p.status, message: p.detail, fields };
}

const err: Problem = {
  status: 422,
  detail: "Input failed schema checks",
  invalidParams: [{ name: "email", reason: "Invalid domain" }],
};

const res = normalize(err);
console.log(`Status code: ${res.status}`);
console.log(`Field error: ${res.fields["email"]}`);
console.log(`Total field errors: ${Object.keys(res.fields).length}`);
