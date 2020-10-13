#!/usr/bin/env node

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log("Usage: node " + process.argv[1] + " CollectionName");
  process.exit(1);
}
const collectionName = process.argv[2];
console.log("Read Collection: ", collectionName);
const admin = require("firebase-admin");
const serviceAccount = require("./config/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // credential: admin.credential.applicationDefault(),
});
const db = admin.firestore();
(async () => {
  const snapshot = await db.collection(collectionName).get();
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
})();
