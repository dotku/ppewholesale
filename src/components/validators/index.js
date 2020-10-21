import {
  Typography,
  TextField,
  Container,
  Button,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function ValidatorIndex() {
  const classes = useStyles();
  return (
    <Container className="main">
      <Grid container spacing={1}>
        <Grid item md={9}>
          <Typography variant="h5">Validators</Typography>
          <Card
            style={{ display: "flex", marginBottom: "20px" }}
            variant="outlined"
          >
            <CardMedia
              style={{ minWidth: "151px", height: "151px" }}
              image="https://picsum.photos/id/1/200/300"
            ></CardMedia>
            <CardContent>
              <Typography>Name: Name One</Typography>
              <Typography>Location: Los Angeles, California</Typography>
              <Typography>
                Introduction: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Typography>
              <Rating name="read-only" value={5} readOnly />
            </CardContent>
          </Card>
          <Card
            style={{ display: "flex", marginBottom: "20px" }}
            variant="outlined"
          >
            <CardMedia
              style={{ minWidth: "151px", height: "151px" }}
              image="https://picsum.photos/200/300"
            ></CardMedia>
            <CardContent>
              <Typography>Name: Name One</Typography>
              <Typography>Location: New York City, New York</Typography>
              <Typography>
                Introduction: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Typography>
              <Rating name="read-only" value={3} readOnly />
            </CardContent>
          </Card>
          <Card
            style={{ display: "flex", marginBottom: "20px" }}
            variant="outlined"
          >
            <CardMedia
              style={{ minWidth: "151px", height: "151px" }}
              image="https://placeimg.com/640/480/any#002"
            ></CardMedia>
            <CardContent>
              <Typography>Name: Name One</Typography>
              <Typography>Location: Miami, Florida</Typography>
              <Typography>
                Introduction: Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Typography>
              <Rating name="read-only" value={4} readOnly />
            </CardContent>
          </Card>
          <Card
            style={{ display: "flex", marginBottom: "20px" }}
            variant="outlined"
          >
            <CardMedia
              style={{ minWidth: "151px", height: "151px" }}
              image="https://placeimg.com/640/480/people#001"
            ></CardMedia>
            <CardContent>
              <Typography>Name: Name One</Typography>
              <Typography>
                Introduction: Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Rating name="read-only" value={5} readOnly />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Typography variant="h5">Apply for Validator</Typography>
          <form className={classes.root}>
            <TextField label="Fist Name" required />
            <TextField label="Last Name" required />
            <TextField label="Phone" required />
            <TextField label="Email" />
            <TextField label="ID" type="file" />
            <Button variant="outlined">Apply</Button>
          </form>
          <Box>
            <Typography>Procesures</Typography>
            <ul>
              <li>Apply for validator and pay $99/year as maintaince fee.</li>
              <li>Platform will validate the validator.</li>
              <li>
                The buyer would select the validator for validating a lot.
              </li>
              <li>The buyer and validator agree the fee.</li>
              <li>The buyer deposit the fee.</li>
              <li>The validator submit the document the buyer asked for.</li>
              <li>The buyer release the fee.</li>
              <li>The validator deposit the fee.</li>
            </ul>
            <Typography>** Policy</Typography>
            <ul>
              <li>Platform charges for 10% for each success transation</li>
              <li>
                The buyer can ask to cancel the service anytime during the 30
                days.
              </li>
              <li>
                The validation fee will automatically release to the validator
                in 30 days if there is no action from the buyer.
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
