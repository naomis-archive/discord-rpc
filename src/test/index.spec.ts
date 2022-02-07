import { clientOptions, loginOptions } from "../index";
import { assert } from "chai";

suite("RPC Client", () => {
  test("should use IPC transport", () => {
    assert.equal(clientOptions.transport, "ipc");
  });

  test("should use correct Discord application ID", () => {
    assert.equal(loginOptions.clientId, "928673473834922086");
  });
});
