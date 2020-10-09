import { CardContent, Card, Typography } from "@material-ui/core";
import React from "react";

export default function ReputationContentItem({ name, region }) {
  return (
    <Card variant="outlined" style={{ marginBottom: "20px" }}>
      <CardContent>
        <Typography>Name: {name}</Typography>
        {region && <Typography>Region: {region}</Typography>}
      </CardContent>
    </Card>
  );
}
