const express = require("express");
const path = require("path");

const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 9000;

const app = express();

const INDEX_FILE = path.join(__dirname, "/build/index.html");

// Redirect http requests to use https in production
if (NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https") {
      res.redirect(`https://${req.header("host")}${req.url}`);
    } else {
      next();
    }
  });
}

app.use(express.static(__dirname + "/build"));

app.get("*", (req, res) => res.sendFile(INDEX_FILE));

app.listen(PORT, () => {
  console.log("Server listening on port : ", PORT);
});
