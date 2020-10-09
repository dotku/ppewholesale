import React from "react";
import { Typography, Button } from "@material-ui/core";

export default function Sponsors() {
  return (
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
        <li>
          <Typography>Down Home LLC</Typography>
        </li>
      </ul>
      <div style={{ textAlign: "right" }}>
        <Button href="#payment/5" disableFocusRipple>
          <small>Become a sponsor</small>
        </Button>
      </div>
    </div>
  );
}
