#!/usr/bin/env node

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log("Usage: node " + process.argv[1] + " CollectionName");
  process.exit(1);
}
const collectionName = process.argv[2];

const admin = require("firebase-admin");
const serviceAccount = require("./config/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
(async () => {
  const db = admin.firestore();
  const rootColletion = await db
    .collection(collectionName)
    .where("author", "==", "weijingjaylin@gmail.com")
    .get();
  rootColletion.forEach((docRef) => {
    db.runTransaction.get(docRef).then(() => {});
  });
})();
