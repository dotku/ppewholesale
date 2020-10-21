import React from "react";
import { Typography, Button, Box } from "@material-ui/core";

export default function Sponsors() {
  return (
    <div style={{ margin: "16px 0 10px 0px" }}>
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
          <Typography>Lifesaving Global LLC</Typography>
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
      <Box display="flex" justifyContent="center">
        <a
          href="https://www.cov.care/medical-supplies?ref=jaylin"
          target="_BLANK"
          rel="nofollow"
        >
          <img
            src="https://static.tapfiliate.com/5f0d3a70dc39e.png?a=75187-f961f5&s=922967-dad12b"
            border="0"
            style={{ maxWidth: "100%" }}
          />
        </a>
      </Box>
      <div style={{ textAlign: "right" }}>
        <Button href="#payment/5" disableFocusRipple>
          <small>Become a sponsor</small>
        </Button>
      </div>
    </div>
  );
}
