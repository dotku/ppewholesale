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
  TextField,
  GridList,
  GridListTile,
} from "@material-ui/core";
import moment from "moment";
import { Email, Search, Storefront } from "@material-ui/icons";
import { NumberFormat, CurrencyFormat } from "../common/formats";
export default function ItemContent({
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
  images,
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
        {/* <Typography>{message}</Typography> */}
        <TextField
          value={message}
          multiline
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
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
        {images && images.length && (
          <GridList key={idx} cols={3} style={{ marginTop: "8px" }}>
            {images.map((image, idx) => (
              <GridListTile cols={1}>
                <a href={image}>
                  <img src={image} />
                </a>
              </GridListTile>
            ))}
          </GridList>
        )}
      </CardContent>
      <CardActions style={{ float: "right" }}>
        {status !== "closed" ? (
          <IconButton
            href={`mailto:${email}`}
            title={type === "sale" ? "I want to buy" : "I can sell you"}
          >
            <Email />
          </IconButton>
        ) : (
          <Button disabled>
            <span title="I can sell you">
              <s>Closed</s>
            </span>
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
