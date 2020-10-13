import { CardContent, Card, Typography } from "@material-ui/core";
import React from "react";

export default function ReputationContentItem(props) {
  const { name, region, level, count } = props;
  console.log("props", props);
  return (
    <Card
      variant="outlined"
      style={{
        marginBottom: "20px",
        backgroundColor:
          level &&
          (level.toLowerCase().includes("scam") ||
            level.toLowerCase().includes("mul"))
            ? "MistyRose"
            : "inherit",
      }}
    >
      <CardContent>
        <div style={{}}>
          <Typography>Name: {name}</Typography>
          {count && <Typography>Count: {count}</Typography>}
          {region && <Typography>Region: {region}</Typography>}
          {level && <Typography>Level: {level}</Typography>}
        </div>
      </CardContent>
      {/* <CardActions>
        <Button href="#payment/100000">Bail</Button>
      </CardActions> */}
    </Card>
  );
}
