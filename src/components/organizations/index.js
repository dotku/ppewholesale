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
import OrganizationCard from "./organizationCard";

export default function Organizations() {
  const [organizations, setOrganizations] = useState([]);
  useEffect(() => {
    const db = firebase.firestore();
    async function getDocs() {
      const docsRef = await db
        .collection("organizations")
        .orderBy("name")
        .limit(100)
        .get();
      const newOrgs = new Map();
      docsRef.docs.forEach((doc) => {
        const data = doc.data();
        let found = newOrgs.get(data.name.trim().toLowerCase());
        if (found) {
          let newOrg = {
            ...found,
            count: found.count ? ++found.count : 2,
          };
          console.log("found", newOrg);
          newOrgs.set(data.name.trim().toLowerCase(), newOrg);
        } else {
          newOrgs.set(data.name.trim().toLowerCase(), {
            id: doc.id,
            ...data,
          });
        }
      });
      console.log(newOrgs);
      setOrganizations([...newOrgs.values()]);
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
          {organizations.map(({ name, region, level, count, id }, idx) => (
            <OrganizationCard
              {...{ name, region, level, count, id }}
              key={idx}
            />
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
