import React from "react";
import Providers from "../vendors";
import { Typography, Divider, Container } from "@material-ui/core";
import Clients from "../connections/clients";
import Partner from "../connections/partners";

function Home() {
  const body = `proudct:%0D%0Anumber in need:%0D%0Atargeted price:%0D%0Atargeted location:%0D%0A`;
  return (
    <div>
      <div
        style={{
          color: "white",
          padding: "40px",
          backgroundImage:
            "URL('https://cdn.ihsmarkit.com/www/blog/ra-global-business-527035084-post.jpg')",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{
              filter: "blur(4px)",
              height: "300px",
              width: "100%",
              position: "absolute",
              left: "0px",
              top: "0px",
            }}
          ></div>
          <div>
            <Typography
              variant="h2"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", padding: "10px" }}
            >
              PPE Wholesale
            </Typography>
            <p
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", padding: "10px" }}
            >
              We are providing varied Wholesale Personal Protective Equipment
              (PPE) products and support service for global demand and needs.
            </p>
          </div>
        </Container>
      </div>
      <Container className="App">
        <Divider />
        <Providers />
        <Divider />
        <Partner />
        <Divider />
        <Clients />
        <Divider />
        <Container>
          <Typography variant="h6">Contact</Typography>
          <p>Please contact for more detail:</p>
          <ul>
            <li>
              Email:{" "}
              <a
                href={`mailto:jay.lin@ppewholesale.us?subject=purchase query&body=${body}`}
              >
                jay.lin@ppewholesale.us
              </a>
            </li>
            <li>wechat: weijingjaylin</li>
          </ul>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
