import {
  Box,
  // Button,
  // Card,
  // CardContent,
  Container,
  Grid,
  NoSsr,
  // Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PostInput from "../post/PostInput";
import PostItem from "./PostItem";
import Sponsors from "../sponsors";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";
import HomeStat from "./stat";
import UserColumn from "../user/userColumn";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";
import { genPosts } from "../../actions/posts";

export default function Home() {
  const posts = useSelector(({ posts }) => posts);
  console.log("posts", posts);
  const [data, setData] = useState(posts);
  const dispatch = useDispatch();

  // const isMobile = useMediaQuery({ query: "(max-width: 614px)" });
  // console.log("matches", isMobile);

  useEffect(() => {
    // console.log("useEffect");
    // const getPosts = async () => {
    //   const docs = (
    //     await db
    //       .collection("posts")
    //       .orderBy("_updateTime", "desc")
    //       .limit(100)
    //       .get()
    //   ).docs;
    //   // console.log(docs);
    //   const posts = docs.map(async (doc) => {
    //     let post = await doc.data();
    //     // console.log("doc", doc);
    //     // post = Object.assign(post, {
    //     //   _createTime: doc._createTime,
    //     //   _updateTime: doc._updateTime,
    //     // });
    //     // console.log(post);
    //     return post;
    //   });
    //   const result = await Promise.all(posts);
    //   // console.log("result", result);
    //   // console.log( "dispatch home index", dispatch({ type: "FETCH_POSTS", payload: result }));
    //   setData(result);
    // };
    // setTimeout(() => {
    //   getPosts();
    // }, 1000);
    const callback = async () => {
      await dispatch(genPosts());
    };
    callback();
  }, []);

  const addPost = (post) => {
    const db = firebase.firestore();
    db.collection("posts")
      .add(post)
      .then((rsp) => {
        data.unshift(post);
        setData([...data]);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleSubmit = (formData) => {
    addPost(formData);
    // console.log(formData);
    // console.log(data);
  };

  console.log("posts data", data);

  return (
    <NoSsr>
      <Container className="main" maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid item md={2}>
            <UserColumn />
          </Grid>
          <Grid md={7} xs={12} item>
            <PostInput onSubmit={handleSubmit} autoFocus />
            {posts
              ? posts.map((item, idx) => (
                  <PostItem key={idx} {...{ ...item, idx }} />
                ))
              : "Loading..."}
          </Grid>
          <Grid md={3} xs={12} item>
            <HomeStat />
            <Sponsors />
          </Grid>
        </Grid>
      </Container>
    </NoSsr>
  );
}
