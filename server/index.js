require("dotenv").config();

const admin = require("firebase-admin");
const express = require("express");
const Buffer = require("buffer");
const mustacheExpress = require("mustache-express");
const cors = require("cors");
const { genPVCTable } = require("./genPVCTable");
const app = express();
const url = require("url");

const port = 3030;

app.use(cors());
// app.set("view engine", "mustache");
// app.engine("mustache", mustacheExpress());

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://ppewholesale-27c61.firebaseio.com",
});

const db = admin.firestore();

app.delete("/:collection/:id", async ({ params }, res) => {
  try {
    const rsp = await db.collection(params.collection).doc(params.id).delete();
    res.send(rsp);
  } catch (e) {
    res.send(404, e);
  }
});

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/pvc-data", async (req, res) => {
  const result = await genPVCTable();
  // res.send(Promise.resolve(genPVCTable()));
  res.set("Content-Type", "text/html");
  res.send(`<table>${result}</table>`);
});

app.get("/imgur-callback", (req, res) => {
  console.log(req);
  console.log("url.parse", url.parse(req.originalUrl));
  res.send({ message: "imgur" });
});

app.get("/collections", ({}, res) => {
  db.listCollections().then((collections) => {
    res.send(
      collections.map((c) => {
        return {
          id: c.id,
          ...c,
        };
      })
    );
  });
});

app.get("/posts", ({}, res) => {
  res.send();
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
        .catch((error) => {
          res.send(error);
        });
      break;
    case "uid":
      admin
        .auth()
        .getUser(params.keywords)
        .then((user) => {
          res.send(user);
        })
        .catch((error) => {
          res.send(error);
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
