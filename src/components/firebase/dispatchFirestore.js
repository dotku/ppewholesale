import { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useDispatch } from "react-redux";

const db = firebase.firestore();

export default function DispatchFirestore() {
  const dispatch = useDispatch();
  const getPosts = async () => {
    const docs = (await db.collection("posts").get()).docs;
    const posts = docs.map(async (doc) => {
      let post = await doc.data();
      // console.log(post);
      return post;
    });
    const result = await Promise.all(posts);
    console.log("result", result);

    dispatch({ type: "FETCH_POSTS", payload: result });
  };
  useEffect(() => {
    console.log("getPosts", getPosts());
    // dispatch({ type: "FETCH_POSTS", payload: getPosts() || [] });
  });
  return null;
}
