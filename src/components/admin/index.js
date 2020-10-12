import { Container, Typography, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Collections from "./collections";
import Docs from "./docs";

export default function Admin() {
  const [currentCollection, setCurrentCollection] = useState("posts");
  const handleCollectionChange = (collectionId) => (e) => {
    console.log("handleCollectionChange");
    setCurrentCollection(collectionId);
  };
  return (
    <Container className="main">
      <Typography variant="h6">Admin</Typography>
      <Grid container>
        <Grid item>
          <Collections handleCollectionChange={handleCollectionChange} />
        </Grid>
        <Grid item>
          <Docs currentCollection={currentCollection} />
        </Grid>
      </Grid>
    </Container>
  );
}
