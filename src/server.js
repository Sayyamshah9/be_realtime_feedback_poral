const express = require("express");
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const httpServer = http.createServer(app);

const { createDbConnection } = require("./database-layer/db-config");
const { initSocket } = require("./Routers/socket-handler");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/api/getData", require("./Routers/get-feedback"));
app.use("/api/postData", require("./Routers/post-feedback"));

// Test Route
app.get("/", async (req, res) => {
  res.json({ Message: "Server Is Up and Connected!!" });
});

createDbConnection();
initSocket(httpServer);

httpServer.listen(PORT, () => {
  console.log(`Server is Up and Running on Port: ${PORT}`);
});
