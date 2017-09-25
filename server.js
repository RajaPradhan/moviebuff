const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 9000;
const app = express();

const INDEX_FILE = path.join(__dirname, '/build/index.html');

app.get("/", (req, res) => res.sendFile(INDEX_FILE));

app.listen(PORT, () => {
  console.log("Server listening on port : ", PORT);
});
