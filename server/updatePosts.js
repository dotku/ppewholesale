require("dotenv").config();

const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://ppewholesale-27c61.firebaseio.com",
});
const db = admin.firestore();
let collectionRef = db.collection("posts");

collectionRef.get().then((qs) => {
  qs.forEach(async (doc) => {
    await db.runTransaction(async (t) => {
      // const doc = await t.get(doc.ref);
      console.log(doc._createTime._seconds);
      t.update(doc.ref, {
        _createTime: doc._createTime._seconds,
        _updateTime: doc._updateTime._seconds,
        // email: "jay.lin@ppewholesale.us",
      });
    });
    // doc.update("author", "jay.lin@ppewholesale.us");
    // console.log(doc, doc.data());
  });
});
