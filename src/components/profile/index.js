import React from "react";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import atoms from "../instapaper/components/atoms";
import theme from "../instapaper/theme/instapaper/theme";
import withTheme from "../instapaper/pages/instapaper/withTheme";
import Box from "@material-ui/core/Box";
import { useSelector } from "react-redux";
import { StyledFirebaseAuth } from "react-firebaseui";
import ReactJson from "react-json-view";

const { Avatar, Icon, Typography } = atoms;

const useStyles = makeStyles({
  editButton: {
    marginLeft: 0,
    marginTop: 12,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 20,
      marginTop: 0,
    },
  },
  settings: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 5,
    },
  },
});

function ProfilePage() {
  const user = useSelector((state) => state.auth);
  console.log("profilePage", user);
  const [tabIndex, setTabIndex] = React.useState(0);
  const classes = useStyles();
  const upSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });

  if (!user) {
    return <Container className="main">Loading ...</Container>;
  }

  return (
    <React.Fragment>
      <Box className="main" component="main" maxWidth={935} margin="auto">
        <Box mb="44px">
          <Grid container>
            <Grid item xs={6} md={4}>
              <Avatar
                ultraLarge={upSm}
                medium={!upSm}
                style={{ margin: "auto" }}
                alt="My profile"
                src={user ? user.photoURL : ""}
              >
                Photo
              </Avatar>
            </Grid>
            <Grid item xs={8}>
              <Box clone mb="20px">
                <Grid container alignItems="center">
                  <Typography component="h1" variant="h4" lightWeight>
                    {user.displayName}
                  </Typography>
                  {/* <Button
                    className={classes.editButton}
                    variant="outlined"
                    fullWidth={!upSm}
                  >
                    Edit Profile
                  </Button>
                  <div className={classes.settings}>
                    <IconButton>
                      <Icon>settings</Icon>
                    </IconButton>
                  </div> */}
                </Grid>
              </Box>
              <Box mb="20px">
                <Grid container spacing={5}>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <b>132</b> Posts
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <b>325</b> Followers
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <b>260</b> Following
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              {/* <Typography variant="subtitle1" bold>
                Siriwat Kunaporn
              </Typography>
              <Typography variant="subtitle1">
                Bangkok Christian College
              </Typography>
              <Typography variant="subtitle1">CU intania 96.</Typography> */}
            </Grid>
          </Grid>
        </Box>
        <Box>
          <ReactJson
            style={{ overflow: "auto" }}
            src={JSON.parse(JSON.stringify(user))}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default withTheme(theme)(ProfilePage);
