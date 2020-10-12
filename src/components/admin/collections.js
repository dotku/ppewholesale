import { List, ListItem, Typography, Grid } from "@material-ui/core";
import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function FirebaseCollections({ handleCollectionChange }) {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3030/collections").then((rsp) => {
      setCollections(rsp.data);

      console.log(rsp.data);
    });
  }, []);
  return (
    <div>
      <Typography variant="subtitle1">Collections</Typography>
      <List>
        {collections.map((c, i) => (
          <ListItem button key={i} onClick={handleCollectionChange(c.id)}>
            {c.id}
          </ListItem>
        ))}
      </List>
    </div>
  );
}
