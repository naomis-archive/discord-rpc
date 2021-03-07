import { ExtendedActivity } from "../interfaces/addButtons";

export const activity: ExtendedActivity = {
  largeImageKey: "main",
  largeImageText: "It's Becca!",
  details: "Come hang out?",
  startTimestamp: Date.now(),
  state: "I'm here!",
  buttons: [
    { label: "Website", url: "https://www.nhcarrigan.com" },
    {
      label: "Chat",
      url: "http://chat.nhcarrigan.com",
    },
  ],
};
