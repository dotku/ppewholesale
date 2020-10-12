import React from "react";
import {
  Badge,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Divider,
  Button,
  IconButton,
  Avatar,
} from "@material-ui/core";
import moment from "moment";
import { useSelector } from "react-redux";
import { VisibilityOff as Hide, Search, Storefront } from "@material-ui/icons";
import { NumberFormat, CurrencyFormat } from "../common/formats";
import { blue, red } from "@material-ui/core/colors";
export default function ContentItem({
  message,
  type,
  unit,
  price,
  status,
  location,
  _createTime,
  _updateTime,
  email,
  idx,
}) {
  // let user = useSelector(({ auth }) => auth);
  // const handleHidePost = () => {
  //   if (!user) {
  //     alert();
  //   }
  // };
  return (
    <Card variant="outlined" style={{ marginTop: idx ? "20px" : 0 }}>
      <CardHeader
        avatar={
          <Badge
            variant="dot"
            color={type === "sale" ? "secondary" : "primary"}
          >
            <Avatar>{email ? email[0] : "U"}</Avatar>
          </Badge>
        }
        action={
          <>
            <IconButton>
              {type === "sale" ? <Storefront /> : <Search />}
            </IconButton>
            {/* <IconButton title="hide from your view" onClick={handleHidePost}>
              <Hide />
            </IconButton> */}
          </>
        }
        title={email || "jay.lin@dkwholesale.us"}
        subheader={
          <>
            <span>
              {type === "sale" ? "Listing for Sale" : "Looking to Buy"}
            </span>
            <span>{" " + moment(_createTime * 1000 || 0).fromNow()}</span>
            <span>
              {_createTime !== _updateTime && (
                <span title={`updated ${moment(_updateTime * 1000).fromNow()}`}>
                  {", edited"}
                </span>
              )}
            </span>
          </>
        }
      />
      <CardContent>
        <div
          style={{
            textAlign: "right",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
          }}
        ></div>
        <Typography>{message}</Typography>
        <Divider />
        {location && <Typography>Location: {location}</Typography>}
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
          <Button size="small" href={`mailto:${email}`}>
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
