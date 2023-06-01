describe("Servers test (with setup and tear-down)", function() {
  let serverId;

  beforeEach(function () {
    serverId = 1;
    allServers = {};
    serverNameInput = document.createElement('input');
    serverNameInput.setAttribute('type', 'text');
    serverNameInput.setAttribute('id', 'serverName');
    submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submit');
    document.body.append(serverNameInput);
    document.body.append(submitButton);
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    serverId = 0;
    allServers = {};
    serverNameInput.remove();
    submitButton.remove();
  });
});
