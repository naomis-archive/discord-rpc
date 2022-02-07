import { activityStates } from "../config/activityStates";
import { ActivityChoice } from "../interfaces/ActivityChoice";
import { ExtendedActivity } from "../interfaces/addButtons";

export const getActivity = (
  activity: ActivityChoice,
  timestamp: number
): ExtendedActivity => {
  const baseActivity = {
    largeImageKey: "main",
    largeImageText: "Wowie Zowie it's me!",
    details: "Naomi is currently...",
    startTimestamp: timestamp,
    state: "",
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

  baseActivity.state = activityStates[activity];

  if (activity === "Signing Off") {
    setTimeout(() => process.exit(0), 15000);
  }

  return baseActivity;
};
