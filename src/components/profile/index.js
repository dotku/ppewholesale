import React, { useRef } from "react";
import { Container, Input, IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import atoms from "../instapaper/components/atoms";
import theme from "../instapaper/theme/instapaper/theme";
import withTheme from "../instapaper/pages/instapaper/withTheme";
import Box from "@material-ui/core/Box";
import { useDispatch, useSelector } from "react-redux";
import ReactJson from "react-json-view";
import { getNoCircleStringify } from "../common/utility";
import UserProfileUpdateForm from "./userProfileUpdateForm";
import UserSocialLoginProviders from "./userSocialLogin";
import { genFirebaseUpload } from "../common/utility";
import { v4 as uuid } from "uuid";
import UserAvatarLibrary from "./userAvatarLibrary";
import firebase from "firebase/app";
import "firebase/auth";

const { Avatar, Typography } = atoms;

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
  const profilePhotoFile = useRef("photoFile");
  const dispatch = useDispatch();
  console.log("profilePage", user);
  const upSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });

  if (!user) {
    return <Container className="main">Loading ...</Container>;
  }

  const hanleFileUpload = async (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    try {
      const upload = await genFirebaseUpload({
        file: e.target.files[0],
        path: `users/${user.uid}/avatars/${uuid()}_${file.name}`,
      });
      const newProfile = {
        photoURL: await upload.ref.getDownloadURL(),
      };
      const { currentUser } = firebase.auth();
      console.log("newProifle", newProfile);
      currentUser
        .updateProfile(newProfile)
        .then(() => {
          dispatch({ type: "UPDATE_USER", payload: newProfile });
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      <Box className="main" component="main" maxWidth={935} margin="auto">
        <Box mb="44px">
          <Grid container>
            <Grid item xs={6} md={4}>
              <IconButton
                onClick={() => {
                  console.log(
                    "profilePhotoFile",
                    profilePhotoFile.current.click()
                  );
                  //profilePhotoFile.click();
                }}
              >
                <Avatar
                  ultraLarge={upSm}
                  medium={!upSm}
                  style={{ margin: "auto" }}
                  alt="My profile"
                  src={user ? user.photoURL : ""}
                >
                  Photo
                </Avatar>
              </IconButton>
              <input
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                ref={profilePhotoFile}
                onChange={hanleFileUpload}
              />
            </Grid>
            <Grid item xs={8}>
              <Box clone mb="20px">
                <Grid container alignItems="center">
                  <Typography component="h1" variant="h4" lightWeight>
                    <Input
                      defaultValue={user.displayName}
                      style={{ fontSize: "inherit" }}
                    />
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
              <Box mb="10px">
                <Input
                  defaultValue={user.email}
                  style={{ minWidth: "300px" }}
                />
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
          <Box mb="20px">
            <UserAvatarLibrary user={user} />
          </Box>
          <Box mb="10px">
            {`Last Login: ${new Date(
              user.metadata.lastSignInTime
            ).toLocaleDateString()}`}
          </Box>
          <Box mb="20px">
            {`Registration Date: ${new Date(
              user.metadata.creationTime
            ).toLocaleDateString()}`}
          </Box>
          <Button variant="outlined" href="#/logout">
            Logout
          </Button>
          <UserProfileUpdateForm {...user} />
          <UserSocialLoginProviders {...user} />
        </Box>
        <Box>
          <ReactJson
            style={{ overflow: "auto" }}
            src={JSON.parse(getNoCircleStringify(user))}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default withTheme(theme)(ProfilePage);
