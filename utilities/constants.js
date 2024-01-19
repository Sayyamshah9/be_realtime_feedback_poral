const CONSTANTS = {};

CONSTANTS.SERVER_EVENTS = {
  CONNECTION: "connection",
  DISCONNECT: "disconnect",
  SEND_DATA: "send_data",
};

CONSTANTS.WHITELISTED_URLS = ["http://localhost:5173", "http://localhost:3000"];

CONSTANTS.DB_CONFIG = {
  COLLECTION_NAME: "FeedbackCollection",
};

module.exports = CONSTANTS;
