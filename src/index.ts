import rpc, { RPCClientOptions, RPCLoginOptions } from "discord-rpc";
import { prompt } from "inquirer";

import { activityChoices } from "./config/activityChoices";
import { ActivityChoice } from "./interfaces/ActivityChoice";
import { getActivity } from "./modules/getActivity";
import { logHandler } from "./utils/logHandler";

const clientOptions: RPCClientOptions = { transport: "ipc" };
const loginOptions: RPCLoginOptions = { clientId: "928673473834922086" };
const client = new rpc.Client(clientOptions);

(() => {
  try {
    client.on("ready", async () => {
      const timestamp = Date.now();
      logHandler.log("debug", "Client has connected!");
      logHandler.log("silly", `Authenticated as ${client.user?.username}`);
      let shutdown = false;

      while (!shutdown) {
        const activityChoice: { Activity: ActivityChoice } = await prompt({
          name: "Activity",
          message: "What is Naomi currently doing?",
          type: "list",
          choices: activityChoices,
        });

        await client.setActivity(
          getActivity(activityChoice.Activity, timestamp),
          process.pid
        );

        if (activityChoice.Activity === "Signing Off") {
          shutdown = true;
        }

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

export { clientOptions, loginOptions, client };
