import React from "react";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";

function CountByRegion({ rows = [] }) {
  let result = {};
  result["Unkown"] = 0;
  rows.forEach((row) => {
    if (row.region) {
      if (result[row.region]) {
        result[row.region]++;
      } else {
        result[row.region] = 1;
      }
    } else {
      result["Unkown"]++;
    }
  });

  return Object.entries(result).map((v, k) => (
    <div key={k}>{`${v[0]}: ${v[1]}`}</div>
  ));
}
export default function OraganizationStat({ data }) {
  return (
    <Card variant="outlined" style={{ marginTop: "20px" }}>
      <CardContent>
        <Typography variant="h5">Stat</Typography>
        <div style={{ textAlign: "right" }}>Total: {data.length}</div>
        <Divider />
        <CountByRegion rows={data} />
      </CardContent>
    </Card>
  );
}
