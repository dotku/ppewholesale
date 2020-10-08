import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { Search, Storefront } from "@material-ui/icons";
import React from "react";
const data = [
  {
    message: "thermo gun i know 4000 available in ny price is 51 rmb",
    type: "sale",
    availiblity: "OTG",
    unit: 4000,
    price: 7.5,
  },
  {
    message: "Looking for 300M 3ply masks",
    type: "buy",
    unit: 300000000,
    price: 1,
  },
  {
    message: "Looking for 30M Cranberry Nitrile Exam Gloves",
    type: "buy",
    unit: 30000000,
    price: 19,
  },
  {
    message: "Looking for 1K Nitrile Exam Gloves",
    type: "buy",
    availiblity: "Production",
    unit: 1000,
    price: 7.5,
  },
  {
    message: "Looking for 100M Cranberry Nitrile Exam Gloves",
    type: "buy",
    status: "closed",
    unit: 100000000,
    price: 21,
  },
];
function NumberFormat({ value }) {
  return new Intl.NumberFormat("en-US").format(value);
}
function CurrencyFormat({ value }) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
function ContentItem({ message, type, unit, price, status, availiblity }) {
  return (
    <Card variant="outlined" style={{ marginTop: "20px" }}>
      <CardContent>
        <div style={{ textAlign: "right" }}>
          {type === "sale" ? <Storefront /> : <Search />}
        </div>
        <Typography>{message}</Typography>
        <Divider />
        {availiblity && <Typography>Availiblity: {availiblity}</Typography>}
        {unit && (
          <Typography>
            Unit: <NumberFormat value={unit} />
          </Typography>
        )}
        {price && (
          <Typography>
            Price: <CurrencyFormat value={price} />
          </Typography>
        )}
        {price && unit && (
          <Typography>
            Total: <CurrencyFormat value={unit * price} />
          </Typography>
        )}
      </CardContent>
      <CardActions style={{ float: "right" }}>
        {status !== "closed" ? (
          <Button size="small" href="mailto:jay.lin@dkwholesale.us">
            {type === "sale" ? (
              <span message="I want to buy">Buy</span>
            ) : (
              <span message="I can sell you">Sell</span>
            )}
          </Button>
        ) : (
          <Button disabled>
            <span message="I can sell you">
              <s>Closed</s>
            </span>
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
export default function Home() {
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
    <Container className="main">
      <Grid container spacing={2}>
        <Grid md={8} item>
          {data.map((item, idx) => (
            <ContentItem key={idx} {...item} />
          ))}
        </Grid>
        <Grid md={4} xs={12} item>
          <Card variant="outlined" style={{ marginTop: "20px" }}>
            <CardContent>
              <h3>All</h3>
              <Typography>All Listing: {data.length}</Typography>

              <h3>Sale</h3>
              <Typography>
                Total Listing:{" "}
                {data.filter((item) => item.type === "sale").length}
              </Typography>
              <Typography>
                Total Value: <CurrencyFormat value={totalSales.totalValue} />
              </Typography>
              <h3>Buy</h3>
              <Typography>
                Total Listing:{" "}
                {data.filter((item) => item.type !== "sale").length}
              </Typography>
              <Typography>
                Total Value: <CurrencyFormat value={totalBuys.totalValue} />
              </Typography>
            </CardContent>
          </Card>
          <div style={{ margin: "16px 10px 0 0" }}>
            <Typography viriant="h4" style={{ color: "gray" }}>
              Sponsors
            </Typography>
            <ul>
              <li>
                <Typography>ZY International Trade Inc</Typography>
              </li>
              <li>
                <Typography>US Chitu Entertainment Media</Typography>
              </li>
              <li>
                <Typography>Skynet LLC</Typography>
              </li>
              <li>
                <Typography>Mulan LLC</Typography>
              </li>
            </ul>
            <div style={{ textAlign: "right" }}>
              <Button href="#payment/5" disableFocusRipple>
                <small>Become a sponsor</small>
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
