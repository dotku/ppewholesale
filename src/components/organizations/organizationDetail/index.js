import {
  Container,
  Typography,
  Box,
  Grid,
  IconButton,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import { useState } from "react";
import UserColumn from "../../user/userColumn";
import OrganizationDetailMain from "./main";
import Sponsors from "../../sponsors";
import { Settings } from "@material-ui/icons";

function useQuery() {
  console.log("search", useLocation().search);
  return new URLSearchParams(useLocation().search);
}

function checkOrganizationAdminMode({ query }) {
  if (!query.get("admin")) return true;
}

export default function OrganizationDetail() {
  const params = useParams();
  const query = useQuery();
  const [organization, setOrganization] = useState();
  console.log(params);

  useEffect(() => {
    firebase
      .firestore()
      .collection("organizations")
      .get()
      .then((rsp) => {
        rsp.docs
          .filter((doc) => {
            const data = doc.data();
            // console.log("data", data.name && data.name.substring("ZY"));
            return data.name && data.name.includes("ZY");
            // return data.name.substring("ZY");
          })
          .map((doc) => {
            // console.log(doc.id, doc.data());
          });
        // console.log("rsp");
      });
    //   .where("name", "in", "ZY")
    //   .get()
    //   .then((rsp) => {
    //     console.log("rsp", rsp.data());
    //   });
    async function genOrganization() {
      const rsp = await firebase
        .firestore()
        .collection("organizations")
        .doc(params.id)
        .get();
      const rates = await firebase
        .firestore()
        .collection("organizations")
        .doc(params.id)
        .collection("rates")
        .get();
      const productionsRef = await firebase
        .firestore()
        .collection("organizations")
        .doc(params.id)
        .collection("productions")
        .get();
      const productions = productionsRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("rates", rates);
      const data = {
        id: rsp.id,
        ...rsp.data(),
        rates: rates.docs.length,
        productions: productions,
      };
      console.log("data", data);
      setOrganization(data);
    }
    genOrganization();
  }, []);
  if (!organization) return <Container>Loading...</Container>;
  console.log("organization", organization);
  return (
    <Container maxWidth={false} className="main">
      <Grid container spacing={1}>
        <Grid item md={2}>
          <UserColumn />
        </Grid>
        <Grid item md={7}>
          <Box display="flex" alignContent="space-between">
            <Typography variant="h3">{organization.name}</Typography>
            <IconButton>
              <Settings />
            </IconButton>
          </Box>

          <OrganizationDetailMain {...{ organization }} />
        </Grid>
        <Grid item md={3}>
          <Sponsors />
        </Grid>
      </Grid>
    </Container>
  );
}
