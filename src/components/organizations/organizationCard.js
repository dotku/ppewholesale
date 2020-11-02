import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function OrganizationCard({ name, id, count, region, level }) {
  return (
    <Card variant="outlined" style={{ marginBottom: "8px" }}>
      <CardContent
        style={{
          backgroundColor:
            level && level.includes("scam") ? "mistyrose" : "inherit",
        }}
      >
        <div>
          <Typography variant="body1">
            <Link to={`./organizations/${name}-${id}`}>{name}</Link>
          </Typography>
        </div>
        {count && <Typography variant="body2">Count: {count}</Typography>}
        {region && <Typography variant="body2">Region: {region}</Typography>}
        {level && <Typography variant="body2">Rank: {level}</Typography>}
      </CardContent>
    </Card>
  );
}
