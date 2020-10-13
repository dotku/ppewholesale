// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log("Usage: node " + process.argv[1] + " FILENAME");
  process.exit(1);
}

require("dotenv").config();
const fs = require("fs");
const filename = process.argv[2];

const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://ppewholesale-27c61.firebaseio.com",
});
const db = admin.firestore();

fs.readFile(filename, "utf8", (err, data) => {
  if (err) throw err;
  console.log("OK: " + filename);
  JSON.parse(data).map(async (item) => {
    const result = await db.collection("organizations").add(item);
    console.log("add successfuly", result.id);
  });
});

// payload.map((item) => {
//   db.collection("organizations").add(item);
// });
