import rpc from "discord-rpc";
import { ExtendedActivity } from "./addButtons";

const client = new rpc.Client({ transport: "ipc" });

const activity: ExtendedActivity = {
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

client.on("ready", () => {
  client.setActivity(activity, process.pid);
});

client.login({ clientId: "716707753090875473" });
