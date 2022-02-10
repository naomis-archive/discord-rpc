import { ActivityChoice } from "../interfaces/ActivityChoice";

export const activityImages: { [Property in ActivityChoice]: string } = {
  Notifications: "notifications",
  "Client Work": "client",
  Meeting: "meeting",
  "Personal Work": "personal",
  Gaming: "gaming",
  AFK: "afk",
  Nothing: "nothing",
  "Signing Off": "signing-off",
};
