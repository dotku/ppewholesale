import firebase from "firebase/app";
import "firebase/firestore";

export function genPosts() {
  return async (dispatch) => {
    const db = firebase.firestore();

    const { docs } = await db
      .collection("posts")
      .orderBy("_updateTime", "desc")
      .limit(100)
      .get();
    const posts = await Promise.all(
      docs.map(async (doc) => {
        let post = await doc.data();
        // console.log("doc", doc);
        // post = Object.assign(post, {
        //   _createTime: doc._createTime,
        //   _updateTime: doc._updateTime,
        // });

        // console.log(post);
        return post;
      })
    );
    dispatch({ type: "posts/getAll", payload: posts });
    // setTimeout(() => {
    //   dispatch({ type: "posts/getAll", payload: [] });
    // }, 3000);
  };
}
