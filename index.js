const RPC = require("discord-rpc");

const client = new RPC.Client({ transport: "ipc" });

client.on("ready", () => {
  client.request("SET_ACTIVITY", {
    pid: process.pid,
    activity: {
      assets: {
        large_image: 'main',
        large_text: "It's Becca!",
      },
      details: "Check out what I'm doing!",
      buttons: [
        { label: "Website", url: "https://www.nhcarrigan.com" },
        {
          label: "GitHub",
          url: "https://github.com/nhcarrigan",
        },
      ],
    },
  });

  console.log("started!");
});

client.login({ clientId: "716707753090875473" });
