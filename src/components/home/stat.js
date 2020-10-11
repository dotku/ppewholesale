import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography } from "@material-ui/core";
import { CurrencyFormat } from "../common/formats";

export default function HomeStat() {
  const data = useSelector(({ posts }) => posts);
  let totalSales = data.reduce(
    (prev, curr) => {
      if (curr.price && curr.unit && curr.type === "sale") {
        let totalValue = (curr.price + prev.price) * (curr.unit + prev.unit);
        return {
          price: curr.price + prev.price,
          unit: curr.unit + prev.unit,
          totalValue,
        };
      } else {
        return prev;
      }
    },
    { price: 0, unit: 0, totalValue: 0 }
  );
  let totalBuys = data.reduce(
    (prev, curr) => {
      if (curr.price && curr.unit && curr.type !== "sale") {
        let totalValue = (curr.price + prev.price) * (curr.unit + prev.unit);
        return {
          price: curr.price + prev.price,
          unit: curr.unit + prev.unit,
          totalValue,
        };
      } else {
        return prev;
      }
    },
    { price: 0, unit: 0, totalValue: 0 }
  );
  return (
    <Card variant="outlined">
      <CardContent>
        <h3>All</h3>
        <Typography>All Listing: {data.length}</Typography>

        <h3>Sale</h3>
        <Typography>
          Total Listing: {data.filter((item) => item.type === "sale").length}
        </Typography>
        <Typography>
          Total Value: <CurrencyFormat value={totalSales.totalValue} />
        </Typography>
        <h3>Buy</h3>
        <Typography>
          Total Listing: {data.filter((item) => item.type !== "sale").length}
        </Typography>
        <Typography>
          Total Value: <CurrencyFormat value={totalBuys.totalValue} />
        </Typography>
      </CardContent>
    </Card>
  );
}
