# Create Your Own Discord RPC

Start by cloning this code base to your local machine using `git`, or downloading the `.zip` file directly with GitHub's GUI.

You will also need to have `node.js` and `npm` installed and available on your machine.

## Creating your Application

Log in to the [Discord Developer Portal](https://discord.com/developers/) and select `Applications` in the side-bar. If you have an existing application (such as a bot), you may use that - otherwise, create an application. 

> NOTE: Your application name will appear in the Rich Presence.

Copy the `Client ID` for the application and pass that in to the `client.login` call on line 31 of `index.js` - replacing my `"716707753090875473"` ID with yours.

## Modifying your Presence

You can tweak what your RPC says/does by changing these values in `index.js`.

- `details` (line 13): This is the text that appears in your presence.
- `buttons` (line 18): You can have *two* buttons. The `label` is the text that appears on the RPC, and the `url` is the link that opens when someone clicks your button.
- `assets` (line 9): The `large_image` is the **name** or **key** of the asset you upload to your application (see below), and the `large_text` is the text that appears when someone hovers over the image.

> NOTE: You cannot click on your own buttons, so do not be alarmed if they appear non-functioning.

## Uploading an Asset

Navigate to your application's page on the Developer Portal again. Select `Rich Presence` from the sidebar. You should see a section titled `Rich Presence Assets`.

Click the `Add Image(s)` button to upload an image. Select your image - Discord will upload it and you will be able to set the name of that asset. **This name is what you give to the `large_image` value in the code.** Select `Save Changes` when you are done.

> NOTE: The asset can take up to a couple of hours to be live and available in your RPC. If you refresh the developer portal page and the asset is not there, it has not finished processing yet.

## Running the Code

Once you have done all of this, you can run the code. Open your terminal within the project's root directory, then use `npm ci` to install the dependencies, and `npm start` to launch the code.

Enjoy your new toy!

> NOTE: This needs to run on the same computer that you are running Discord on, so it cannot be hosted remotely. Additionally, it is confirmed to work with the Desktop client but has not been tested on the web client.