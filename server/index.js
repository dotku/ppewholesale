require("dotenv").config();

const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://ppewholesale-27c61.firebaseio.com",
});

admin
  .auth()
  .getUsers([
    { uid: "uid1" },
    { email: "user2@example.com" },
    { phoneNumber: "+15555550003" },
    { providerId: "google.com", providerUid: "google_uid4" },
  ])
  .then(function (getUsersResult) {
    console.log("Successfully fetched user data:");
    getUsersResult.users.forEach((userRecord) => {
      console.log(userRecord);
    });

    if (getUsersResult.notFound.length) {
      console.log(
        "Unable to find users corresponding to these identifiers:",
        getUsersResult.notFound
      );
      getUsersResult.notFound.forEach((userIdentifier) => {
        console.log(userIdentifier);
      });
    }
  })
  .catch(function (error) {
    console.log("Error fetching user data:", error);
  });
