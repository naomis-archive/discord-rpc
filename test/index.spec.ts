import { assert } from "chai";

import { clientOptions, loginOptions } from "../src/index";

suite("RPC Client", () => {
  test("should use IPC transport", () => {
    assert.equal(clientOptions.transport, "ipc");
  });

  test("should use correct Discord application ID", () => {
    assert.equal(loginOptions.clientId, "928673473834922086");
  });
});
