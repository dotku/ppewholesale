import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Input,
  IconButton,
  TextField,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import atoms from "../instapaper/components/atoms";
import theme from "../instapaper/theme/instapaper/theme";
import withTheme from "../instapaper/pages/instapaper/withTheme";
import Box from "@material-ui/core/Box";
import { useDispatch, useSelector } from "react-redux";
import ReactJson from "react-json-view";
import { getNoCircleStringify } from "../common/utility";
import UserSocialLoginProviders from "./userSocialLogin";
import { genFirebaseUpload } from "../common/utility";
import { v4 as uuid } from "uuid";
import UserAvatarLibrary from "./userAvatarLibrary";
import firebase from "firebase/app";
import "firebase/auth";
import UserAvatarProfile from "./userAvatarProfile";

const { Typography } = atoms;

function ProfileIndex() {
  const defaultUser = useSelector((state) => state.auth);
  const { currentUser: user } = firebase.auth();
  console.log(defaultUser, user);
  // const [user, setUser] = useState(defaultUser);
  // console.log("profilePage", user);
  const profilePhotoFile = useRef("photoFile");
  const dispatch = useDispatch();
  const avatarsRef = useRef();
  const [snackopen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  let timeout;

  useEffect(() => {
    // console.log("useEffect", user);
    // setUser(defaultUser);
  }, []);
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
          avatarsRef.current.genImages();
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSnackClose = () => {
    setSnackOpen(false);
  };

  const handleChange = (name) => (e) => {
    e.persist();
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      console.log({ [name]: e.target.value });
      switch (name) {
        case "email":
          // const credential = firebase.auth.EmailAuthProvider.credentialWithLink(
          //   user.email,
          //   window.location.href
          // );
          firebase
            .auth()
            .currentUser.reauthenticateWithPopup(
              new firebase.auth.OAuthProvider("google.com")
            )
            .then((rsp) => {
              console.log("auth rsp", rsp);
              user
                .updateEmail(e.target.value)
                .then(() => {
                  setSnackMessage("profile info update successfully");
                  setSnackOpen(true);
                })
                .catch((err) => {
                  console.error(err);
                });
            });
          // console.log("credential", credential);

          // user
          //   .reauthenticateWithCredential(credential)
          //   .then(function () {
          //     // User re-authenticated.
          //   })
          //   .catch(function (error) {
          //     // An error happened.
          //   });

          break;
        case "phoneNumber":
          // const applicationVerifier = new firebase.auth.RecaptchaVerifier(
          //   "recaptcha-container"
          // );
          // document.querySelector("#recaptcha-container").innerHTML = "";
          // window.grecaptcha.reset();
          if (!window.applicationVerifier) {
            window.applicationVerifier = new firebase.auth.RecaptchaVerifier(
              "recaptcha-container",
              {
                size: "invisible",
                callback: function (response) {
                  // reCAPTCHA solved, allow signInWithPhoneNumber.
                  // onSignInSubmit();
                  // console.log("respose")
                },
              }
            );
          }

          let recaptchaWidgetId;
          const provider = new firebase.auth.PhoneAuthProvider();
          provider
            .verifyPhoneNumber(e.target.value, window.applicationVerifier)
            .then((verificationId) => {
              const verificationCode = window.prompt(
                "Please enter the verification " +
                  "code that was sent to your mobile device."
              );

              const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                verificationCode
              );
              console.log(credential);
              user
                .updatePhoneNumber(credential)
                .then(() => {
                  setSnackMessage("profile info update successfully");
                  setSnackOpen(true);
                })
                .catch((err) => {
                  console.error(err);
                });
            })
            .catch((err) => {
              //document.querySelector("#recaptcha-container").innerHTML = "";
              console.error("verifyPhonenumber", err);
              // window.applicationVerifier.clear();
              // applicationVerifier.reset();
              // window.grecaptcha.reset(window.recaptchaWidgetId);
              // applicationVerifier.render().then(function (widgetId) {
              //   window.grecaptcha.reset(widgetId);
              // });
              //recaptchaVerifier.render().then(function (widgetId) {
              // console.log();
              // document.querySelector("#sign-in-button").innerHTML = "";
              // window.grecaptcha.reset(recaptchaWidgetId);
              //});
            });
          // firebase.auth.PhoneAuthProvider;
          // .currentUser.reauthenticateWithPopup(
          //   new firebase.auth.OAuthProvider("google.com")
          // )
          // .then((rsp) => {
          //   console.log("auth rsp", rsp);
          //   user
          //     .updateEmail(e.target.value)
          //     .then(() => {
          //       setSnackMessage("profile info update successfully");
          //       setSnackOpen(true);
          //     })
          //     .catch((err) => {
          //       console.error(err);
          //     });
          // });
          // await firebase.auth()
          // user
          //   .updatePhoneNumber(e.target.value)
          //   .then(() => {
          //     setSnackMessage("profile info update successfully");
          //     setSnackOpen(true);
          //   })
          //   .catch((err) => {
          //     console.error(err);
          //   });
          break;
        default:
          user
            .updateProfile({ [name]: e.target.value })
            .then((rsp) => {
              console.log("updateRsp", rsp);
              setSnackMessage("profile info update successfully");
              setSnackOpen(true);
            })
            .catch((err) => {
              console.error(err);
            });
      }
    }, 500);

    //
  };

  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackopen}
        autoHideDuration={3000}
        onClose={handleSnackClose}
      >
        <Alert>{snackMessage}</Alert>
      </Snackbar>
      <div id="recaptcha-container" style={{ display: "none" }}>
        Signin Button
      </div>
      <Box className="main" component="main" maxWidth={935} margin="auto">
        <Box mb="44px">
          <Grid container>
            <Grid
              item
              xs={6}
              md={4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  console.log(
                    "profilePhotoFile",
                    profilePhotoFile.current.click()
                  );
                  //profilePhotoFile.click();
                }}
              >
                <UserAvatarProfile user={user} />
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
                      onChange={handleChange("displayName")}
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
                <TextField
                  label="Email"
                  defaultValue={user.email}
                  onChange={handleChange("email")}
                  style={{ minWidth: "300px" }}
                />
              </Box>
              <Box mb="20px">
                <TextField
                  label="Phone Number"
                  defaultValue={user.phoneNumber}
                  onChange={handleChange("phoneNumber")}
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
            <UserAvatarLibrary ref={avatarsRef} user={user} />
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

export default withTheme(theme)(ProfileIndex);
