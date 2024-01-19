const { Server } = require("socket.io");
const { find } = require("../database-layer/db-config");
const updateData = require("../business-layer/feedback-handler");
const CONSTANTS = require("../../utilities/constants");

const { WHITELISTED_URLS, SERVER_EVENTS } = CONSTANTS;
const { SEND_DATA, CONNECTION, DISCONNECT } = SERVER_EVENTS;
let retData = [];

const handleSocketOps = async (_socket) => {
  // Fetch Existing Data
  let response = await find({});

  if (response) {
    retData = response.length > 0 && response;
    _socket.emit(SEND_DATA, retData);
  } else {
    console.log("No Data Found");
  }

  _socket.on(SEND_DATA, (data) => {
    if (data) {
      retData.push(data);
      _socket.emit(SEND_DATA, retData);
      try {
        updateData(data);
      } catch (error) {
        console.log(error);
      }
    }
  });

  _socket.on(DISCONNECT, () => {
    console.log("User Disconnected...");
  });
};

const onConnectHandler = (_io) => {
  _io.on(CONNECTION, (socket) => {
    console.log(`New User Connected, Fetching Data...`);
    handleSocketOps(socket);
  });
};

const initSocket = (_server) => {
  const io = new Server(_server, {
    cors: WHITELISTED_URLS,
  });

  onConnectHandler(io);
};

module.exports = { initSocket, onConnectHandler };
