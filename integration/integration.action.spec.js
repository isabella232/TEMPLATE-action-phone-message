const { makeEventMock } = require("../__mocks__/event-phone-message");

const { onExecuteSendPhoneMessage } = require("./integration.action");

describe("Action integration", () => {
  let consoleLogMock, eventMock;

  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, "log").mockImplementation();
    eventMock = makeEventMock();
  });

  afterEach(() => {
    consoleLogMock.mockRestore();
    jest.clearAllMocks();
  });

  describe("onExecutePostLogin", () => {
    it("logs to the console", async () => {
      await onExecuteSendPhoneMessage(eventMock);
      expect(consoleLogMock).toBeCalledWith(`Running for ${eventMock.client.client_id}`);
    });
  });
});
