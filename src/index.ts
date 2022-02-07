import rpc, { RPCClientOptions, RPCLoginOptions } from "discord-rpc";
import { prompt } from "inquirer";
import { ActivityChoice } from "./interfaces/ActivityChoice";
import { getActivity } from "./modules/getActivity";
import { logHandler } from "./utils/logHandler";

export const clientOptions: RPCClientOptions = { transport: "ipc" };

export const loginOptions: RPCLoginOptions = { clientId: "928673473834922086" };

export const client = new rpc.Client(clientOptions);

(() => {
  try {
    client.on("ready", async () => {
      const timestamp = Date.now();
      logHandler.log("debug", "Client has connected!");
      logHandler.log("silly", `Authenticated as ${client.user.username}`);

      // eslint-disable-next-line no-constant-condition
      while (true) {
        const activityChoice: { Activity: ActivityChoice } = await prompt({
          name: "Activity",
          message: "What is Naomi currently doing?",
          type: "list",
          choices: [
            "Client Work",
            "Meeting",
            "Personal Work",
            "Gaming",
            "AFK",
            "Nothing",
            "Signing Off",
          ],
        });

        await client.setActivity(
          getActivity(activityChoice.Activity, timestamp),
          process.pid
        );

        logHandler.log("info", `Activity set to ${activityChoice.Activity}`);
      }
    });

    client.login(loginOptions);
  } catch (err: unknown) {
    const error = err as Error;
    logHandler.log(
      "error",
      JSON.stringify({ errorMessage: error.message, errorStack: error.stack })
    );
  }
})();
