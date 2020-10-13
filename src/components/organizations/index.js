import {
  Card,
  CardContent,
  Container,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useState } from "react";
import ReputationAddEditForm from "../reputation/ReputationAddEditForm";
import OraganizationStat from "./organizationStat";
import Sponsors from "../sponsors";

export default function Organizations() {
  const [organizations, setOrganizations] = useState([]);
  useEffect(() => {
    const db = firebase.firestore();
    async function getDocs() {
      const docsRef = await db.collection("organizations").limit(100).get();
      setOrganizations(
        docsRef.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    }
    getDocs();
    // const docs = await
    // docs.forEach((doc) => {
    //   console.log(doc.id, "=>", doc.data());
    // });
  }, []);
  const handleSubmit = (formData) => {
    setOrganizations([formData, ...organizations]);
  };
  if (!organizations.length) {
    return (
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );
  }
  return (
    <Container className="main">
      <Typography variant="h3">Organizations</Typography>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item md={8}>
          {organizations.map(({ name, region, level }, idx) => (
            <Card key={idx} variant="outlined" style={{ marginBottom: "8px" }}>
              <CardContent
                style={{
                  backgroundColor:
                    level && level.includes("scam") ? "mistyrose" : "inherit",
                }}
              >
                <div>Organization: {name}</div>
                {region && <div>Region: {region}</div>}
                {level && <div>Rank: {level}</div>}
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item md={4}>
          <Card variant="outlined">
            <CardContent>
              <ReputationAddEditForm onSubmit={handleSubmit} />
            </CardContent>
          </Card>
          <OraganizationStat data={organizations} />
          <Sponsors />
        </Grid>
      </Grid>
    </Container>
  );
}
