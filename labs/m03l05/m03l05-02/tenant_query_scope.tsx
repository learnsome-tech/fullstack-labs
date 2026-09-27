interface Doc { id: string; tenant: string; text: string; }
const table: Doc[] = [
  { id: "1", tenant: "alpha", text: "Alpha Roadmap" },
  { id: "2", tenant: "beta", text: "Beta Financials" },
];

function queryDocs(tenant: string): Doc[] {
  return table.filter((d) => d.tenant === tenant);
}

const alphaList = queryDocs("alpha");
console.log(`Alpha doc count: ${alphaList.length}`);
console.log(`Alpha doc title: ${alphaList[0].text}`);

const betaList = queryDocs("beta");
console.log(`Beta doc count: ${betaList.length}`);
console.log(`Beta doc title: ${betaList[0].text}`);
