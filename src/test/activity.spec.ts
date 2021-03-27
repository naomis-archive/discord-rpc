import { assert } from "chai";
import { activity } from "../data/activity";

suite("Activity object", () => {
  test("should have correct number of properties", () => {
    assert.equal(Object.keys(activity).length, 6, "does not have 6 properties");
  });

  test("should have largeImageKey property", () => {
    assert.property(
      activity,
      "largeImageKey",
      "missing largeImageKey property"
    );
    assert.isString(activity.largeImageKey, "largeImageKey is not a string");
  });

  test("should have largeImageText property", () => {
    assert.property(
      activity,
      "largeImageText",
      "missing largeImageText property"
    );
    assert.isString(activity.largeImageText, "largeImageText is not a string");
  });

  test("should have details property", () => {
    assert.property(activity, "details", "missing details property");
    assert.isString(activity.details, "details is not a string");
  });

  test("should have startTimestamp property", () => {
    assert.property(
      activity,
      "startTimestamp",
      "missing startTimestamp property"
    );
    assert.isNumber(activity.startTimestamp, "startTimestamp is not a number");
  });

  test("should have state property", () => {
    assert.property(activity, "state", "missing state property");
    assert.isString(activity.state, "state is not a string");
  });

  test("should have buttons property", () => {
    assert.property(activity, "buttons", "missing buttons property");
    assert.isArray(activity.buttons, "buttons is not an array");
  });
});

suite("Activity object values", () => {
  test("should have correct largeImageKey", () => {
    assert.equal(activity.largeImageKey, "main");
  });

  test("should have correct largeImageText", () => {
    assert.equal(activity.largeImageText, "It's Becca!");
  });

  test("should have correct details", () => {
    assert.equal(activity.details, "Come hang out?");
  });

  test("should have correct startTimestamp", () => {
    assert.approximately(activity.startTimestamp as number, Date.now(), 1000);
  });

  test("should have correct state", () => {
    assert.equal(activity.state, "I'm here!");
  });

  test("should ahve correct buttons", () => {
    const buttons = activity.buttons;
    assert.equal(buttons.length, 2, "does not have two buttons");
    assert.deepEqual(
      buttons[0],
      { label: "Website", url: "https://www.nhcarrigan.com" },
      "first button is incorrect"
    );
    assert.deepEqual(
      buttons[1],
      { label: "Chat", url: "http://chat.nhcarrigan.com" },
      "second button is incorrect"
    );
  });
});
