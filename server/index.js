require("dotenv").config();

const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3030;

app.use(cors);

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://ppewholesale-27c61.firebaseio.com",
});

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/users/:keywords", ({ query, params }, res) => {
  console.log("users", query);
  switch (query.by) {
    case "email":
      admin
        .auth()
        .getUserByEmail(params.keywords)
        .then((user) => {
          res.send(user);
        })
        .catch(function (error) {
          res.send(404, error);
        });
      break;
    case "uid":
      admin
        .auth()
        .getUser(params.keywords)
        .then((user) => {
          res.send(user);
        })
        .catch(function (error) {
          res.send(404, error);
        });
      break;
    default:
      res.send(404, {
        error: "missing options",
      });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
