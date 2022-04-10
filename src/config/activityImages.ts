import { ActivityChoice } from "../interfaces/ActivityChoice";

export const activityImages: { [Property in ActivityChoice]: string } = {
  Notifications: "notifications",
  "Client Work": "client",
  Meeting: "meeting",
  "Personal Work": "personal",
  "Game Dev": "game-dev",
  Gaming: "gaming",
  AFK: "afk",
  Nothing: "nothing",
  Reading: "reading",
  Streaming: "streaming",
  Socialising: "social",
  "Signing Off": "signing-off",
};
