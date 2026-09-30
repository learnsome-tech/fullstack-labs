async function expectToHaveText(
  readFn: () => string, expected: string, maxAttempts: number
): Promise<boolean> {
  for (let i = 0; i < maxAttempts; i++) {
    if (readFn() === expected) return true;
    await new Promise((r) => setTimeout(r, 10));
  }
  return false;
}

let banner = "Loading...";
setTimeout(() => { banner = "Ready"; }, 25);

const matched = await expectToHaveText(() => banner, "Ready", 5);
console.log(`Assertion passed: ${matched}`);
console.log(`Final text: ${banner}`);
