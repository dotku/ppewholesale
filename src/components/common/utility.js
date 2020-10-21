import firebase from "firebase/app";
import "firebase/storage";
function getNoCircleStringify(json) {
  let cache = [];
  let result = JSON.stringify(json, (key, value) => {
    if (typeof value === "object" && value !== null) {
      // Duplicate reference found, discard key
      if (cache.includes(value)) return;

      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
  cache = null;
  return result;
}

async function genFirebaseUpload({ file, path }) {
  const storageRef = firebase.storage().ref();
  const fileRef = storageRef.child(path);
  try {
    const fileUploadedRef = await fileRef.put(file);
    console.log(fileUploadedRef);
    return fileUploadedRef;
  } catch (e) {
    console.error(e);
  }
}

export { getNoCircleStringify, genFirebaseUpload };
