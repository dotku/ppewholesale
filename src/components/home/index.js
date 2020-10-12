import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ListAdd from "./list-add";
import ContentItem from "./list-item";
import Sponsors from "../sponsors";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";
import HomeStat from "./stat";
import User from "../user";

export default function Home() {
  const [data, setData] = useState(useSelector(({ posts }) => posts));
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("useEffect");
    const db = firebase.firestore();
    const getPosts = async () => {
      const docs = (await db.collection("posts").get()).docs;
      const posts = docs.map(async (doc) => {
        let post = await doc.data();
        // console.log("doc", doc);
        // post = Object.assign(post, {
        //   _createTime: doc._createTime,
        //   _updateTime: doc._updateTime,
        // });

        // console.log(post);
        return post;
      });
      const result = await Promise.all(posts);
      // console.log("result", result);

      // console.log( "dispatch home index", dispatch({ type: "FETCH_POSTS", payload: result }));
      setData(result);
    };
    setTimeout(() => {
      getPosts();
    }, 1000);
  }, []);
  const handleSubmit = (formData) => {
    // console.log(formData);
    data.unshift(formData);
    // console.log(data);
    setData([...data]);
  };
  return (
    <Container className="main">
      <Grid container spacing={2}>
        <Grid md={8} xs={12} item>
          {data.map((item, idx) => (
            <ContentItem key={idx} {...item} idx={idx} />
          ))}
        </Grid>
        <Grid md={4} xs={12} item>
          <ListAdd onSubmit={handleSubmit} />
          <HomeStat />
          <Sponsors />
        </Grid>
      </Grid>
    </Container>
  );
}
