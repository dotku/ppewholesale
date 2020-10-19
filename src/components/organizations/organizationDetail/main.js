import React from "react";
import { Container, Typography, Box, Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import { useState } from "react";

export default function OrganizationDetailMain({ organization }) {
  return (
    <React.Fragment>
      <Box
        display="flex"
        alignItems="center"
        height="36px"
        style={{ border: "solid 1px gray" }}
      >
        <Typography variant="subtitle1">Rates: {organization.rates}</Typography>
        <Typography variant="subtitle1">
          Support: {JSON.stringify(organization.admins)}
        </Typography>
        公司基本资料
      </Box>
      <Box
        display="flex"
        alignItems="center"
        height="100px"
        style={{ border: "solid 1px gray" }}
      >
        <div>Promote</div>
        <div>这里放宣传广告</div>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        height="100px"
        style={{ border: "solid 1px gray" }}
      >
        <Typography variant="subtitle1">
          Products: {JSON.stringify(organization.productions)}
        </Typography>
        <div>现货产品，线上下单</div>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        height="100px"
        style={{ border: "solid 1px gray" }}
      >
        <Typography variant="subtitle1">
          Productions: {JSON.stringify(organization.productions)}
        </Typography>
        <div>这里放期货产品</div>
      </Box>
    </React.Fragment>
  );
}
