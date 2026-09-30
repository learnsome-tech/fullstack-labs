interface NodeEl { role: string; text: string; }
const dom: NodeEl[] = [
  { role: "textbox", text: "User Input" },
  { role: "button", text: "Submit" },
];

function findByRole(r: string, name?: string): NodeEl | undefined {
  return dom.find((e) => e.role === r && (!name || e.text === name));
}

const input = findByRole("textbox");
console.log(`Found input element: ${input?.text}`);

const btn = findByRole("button", "Submit");
console.log(`Found submit button: ${btn?.role}`);

const missing = findByRole("dialog");
console.log(`Missing modal found: ${missing !== undefined}`);
