# Create Your Own Discord RPC

Start by cloning this code base to your local machine using `git`, or downloading the `.zip` file directly with GitHub's GUI.

You will also need to have `node.js` and `npm` installed and available on your machine.

## Creating your Application

Log in to the [Discord Developer Portal](https://discord.com/developers/) and select `Applications` in the side-bar. If you have an existing application (such as a bot), you may use that - otherwise, create an application.

> NOTE: Your application name will appear as the first line of text in the rich presence.

Copy the `Client ID` for the application and pass that to the `clientId` property for the `loginOptions` object in `src/index.ts` - you will replace the existing client ID there.

## Modifying your Presence

The appearance of your Discord Rich Presence is defined in the `src/data/activity.ts` file. Each key changes a specific value:

- `largeImageKey`: This is the key for the large image asset (see `Uploading an Asset` below).
- `largeImageText`: This is the hover text that appears on the large image.
- `details`: This is the second line of text that appears in the rich presence.
- `startTimestamp`: Leave this as `Date.now()` to automatically show how long your presence application has been running.
- `state`: This is the third line of text that appears in the rich presence.
- `buttons`: This is an array of two objects. Each object defines one of the buttons that appears in your rich presence. The `label` is the text that appears in the button, and the `url` is the website the button will take a user to on click.

> NOTE: You cannot click on your own buttons, so do not be alarmed if they appear non-functioning.

## Uploading an Asset

Navigate to your application's page on the Developer Portal again. Select `Rich Presence` from the sidebar. You should see a section titled `Rich Presence Assets`.

Click the `Add Image(s)` button to upload an image. Select your image - Discord will upload it and you will be able to set the name of that asset. **This name is what you give to the `largeImageKey` value in the code.** Select `Save Changes` when you are done.

> NOTE: The asset can take up to a couple of hours to be live and available in your RPC. If you refresh the developer portal page and the asset is not there, it has not finished processing yet.

## Running the Code

Once you have done all of this, you can run the code. Open your terminal within the project's root directory, then use `npm ci` to install the dependencies, `npm run build` to compile the TypeScript, and `npm start` to launch the code.

Enjoy your new toy!

> NOTE: This needs to run on the same computer that you are running Discord on, so it cannot be hosted remotely. Additionally, it is confirmed to work with the Desktop client but has not been tested on the web client.
