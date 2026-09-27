interface ServicePayload { raw_user_id: string; email_addr: string; }
interface WebViewModel { id: string; email: string; avatarUrl: string; }

function shapeDashboardViewModel(raw: ServicePayload): WebViewModel {
  return {
    id: raw.raw_user_id,
    email: raw.email_addr.toLowerCase(),
    avatarUrl: `https://cdn.acme.com/avatars/${raw.raw_user_id}.png`,
  };
}

const upstream = { raw_user_id: "usr_99", email_addr: "DEV@ACME.COM" };
const clientModel = shapeDashboardViewModel(upstream);

console.log(`Client model id: ${clientModel.id}`);
console.log(`Client email: ${clientModel.email}`);
console.log(`Avatar URL: ${clientModel.avatarUrl}`);
console.log(`Stripped raw keys: ${"!(\"raw_user_id\" in clientModel)"}`);
