interface ProblemPayload {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
  traceId: string;
}

function createProblem(status: number, detail: string, path: string): ProblemPayload {
  return {
    type: `https://api.acme.com/errors/http-${status}`,
    title: status === 404 ? "Not Found" : "Server Error",
    status,
    detail,
    instance: path,
    traceId: `tr-${Date.now().toString(36)}`,
  };
}

const p = createProblem(404, "User account missing", "/users/u10");
console.log(`Problem title: ${p.title}`);
console.log(`Problem instance: ${p.instance}`);
console.log(`Has trace identifier: ${p.traceId.startsWith("tr-")}`);
