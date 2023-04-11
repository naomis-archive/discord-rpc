import { assert } from "chai";

import { activityChoices } from "../src/config/activityChoices";
import { activityImages } from "../src/config/activityImages";
import { activityStates } from "../src/config/activityStates";
import { getActivity } from "../src/modules/getActivity";

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
      url: "https://donate.nhcarrigan.com",
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
