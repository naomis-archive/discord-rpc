import { assert } from "chai";

import { activityChoices } from "../config/activityChoices";
import { activityImages } from "../config/activityImages";
import { activityStates } from "../config/activityStates";
import { getActivity } from "../modules/getActivity";

const timestamp = Date.now();
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

suite("Get Activity module", () => {
  for (const activity of activityChoices) {
    if (activity === "Signing Off") {
      continue;
    }
    test(`${activity} should return the valid activity object`, () => {
      const result = getActivity(activity, timestamp);
      assert.deepEqual(result, {
        ...baseActivity,
        state: activityStates[activity],
        largeImageKey: activityImages[activity],
      });
    });
  }
});
