import { Presence } from "discord-rpc";

import { activityImages } from "../config/activityImages";
import { activityStates } from "../config/activityStates";
import { ActivityChoice } from "../interfaces/ActivityChoice";

/**
 * Module to receive the activity prompt choice from the CLI and return a proper
 * Rich Presence Object.
 *
 * @param {ActivityChoice} activity The activity selected from the CLI.
 * @param {number} timestamp The UNIX timestamp the process was started.
 * @returns {Presence} An activity object to send to Discord.
 */
export const getActivity = (
  activity: ActivityChoice,
  timestamp: number
): Presence => {
  const baseActivity = {
    largeImageKey: "main",
    largeImageText: "Wowie Zowie it's me!",
    smallImageKey: "main",
    smallImageText: "Hello there!",
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
  baseActivity.largeImageKey = activityImages[activity];

  if (activity === "Signing Off") {
    setTimeout(() => process.exit(0), 15000);
  }

  return baseActivity;
};
