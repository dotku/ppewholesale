import React from "react";
import {
  CardContent,
  List,
  Typography,
  Card,
  CardActions,
  Button,
} from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/firestore";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function Docs({ currentCollection }) {
  const db = firebase.firestore();
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    console.log("currentCollection", currentCollection);
    db.collection(currentCollection)
      .get()
      .then((docRefs) => {
        console.log(docRefs);
        console.log(docRefs.docs);
        setDocs(
          docRefs.docs.map((docRef) => {
            // console.log(docRef, docRef.data());
            return Object.assign({ id: docRef.id }, { ...docRef.data() });
          })
        );
      });
  }, [currentCollection]);

  const handleItemDelete = (targetId) => (e) => {
    console.log("id", targetId);
    Axios.delete(`http://localhost:3030/${currentCollection}/${targetId}`)
      .then((rsp) => {
        console.log(rsp);
        alert(`delete success with id: ${targetId}`);
        setDocs(docs.filter(({ id }) => id !== targetId));
      })
      .catch((err) => {
        alert(`delte failed :(`);
        console.error(err);
      });
  };

  return (
    <div>
      <Typography variant="subtitle1">Docs: {currentCollection}</Typography>
      <List>
        {docs.map((item, idx) => (
          <Card key={idx} variant="outlined" style={{ marginBottom: "20px" }}>
            <CardContent>
              <div>id: {item.id}</div>
              {item.message && <div>message: {item.message}</div>}
              {item.name && <div>name: {item.name}</div>}
              <div style={{ wordBreak: "break-word" }}>
                {JSON.stringify(item)}
              </div>
            </CardContent>
            <CardActions style={{ justifyContent: "flex-end" }}>
              <Button onClick={handleItemDelete(item.id)}>Delete</Button>
            </CardActions>
          </Card>
        ))}
      </List>
    </div>
  );
}
