import rpc, { RPCClientOptions, RPCLoginOptions } from "discord-rpc";
import { activity } from "./data/activity";

export const clientOptions: RPCClientOptions = { transport: "ipc" };

export const loginOptions: RPCLoginOptions = { clientId: "716707753090875473" };

export const client = new rpc.Client(clientOptions);

client.on("ready", () => {
  client.setActivity(activity, process.pid);
});

client.login(loginOptions);
