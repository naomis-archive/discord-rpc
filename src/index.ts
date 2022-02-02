import rpc, { RPCClientOptions, RPCLoginOptions } from "discord-rpc";
import { activity } from "./data/activity";
import { logHandler } from "./utils/logHandler";

export const clientOptions: RPCClientOptions = { transport: "ipc" };

export const loginOptions: RPCLoginOptions = { clientId: "928673473834922086" };

export const client = new rpc.Client(clientOptions);

(() => {
  try {
    client.on("ready", () => {
      logHandler.log("debug", "Client has connected!");
      logHandler.log("silly", `Authenticated as ${client.user.username}`);
      client.setActivity(activity, process.pid);
    });

    client.login(loginOptions);
  } catch (error) {
    logHandler.log(
      "error",
      JSON.stringify({ errorMessage: error.message, errorStack: error.stack })
    );
  }
})();
