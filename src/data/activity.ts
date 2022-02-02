import { ExtendedActivity } from "../interfaces/addButtons";

export const activity: ExtendedActivity = {
  largeImageKey: "main",
  largeImageText: "Wowie Zowie it's me!",
  details: "Come hang out!",
  startTimestamp: Date.now(),
  state: "Please?",
  buttons: [
    {
      label: "Join Discord",
      url: "http://chat.nhcarrigan.com",
    },
    {
      label: "Support Our Work",
      url: "https://www.nhcarrigan.com/sponsor",
    },
  ],
};
