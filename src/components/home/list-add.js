import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Input,
  TextField,
  Typography,
  FormHelperText,
  FormControl,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Axios from "axios";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const emailHelpText = {
  LOGIN_DEFAULT: "You can't modify this email field once you are login",
  NOLOGIN_DEFAULT: "Please enter your email, so other people can reach you.",
  NOLOGIN_EXITED_EMAIL:
    "This email is registered by other user, please use other email",
};

export default function ListAdd({ onSubmit }) {
  let email = "name@domain.com";
  let user = useSelector(({ auth }) => auth);
  let timeout;
  const classes = useStyles();
  // console.log("before useState email", email, user);
  const [formData, setFormData] = useState({
    email,
  });
  const [disableEmail, setDisableEmail] = useState(false);
  const [emailError, setEmailError] = useState(false);
  useEffect(() => {
    // console.log("useEffect user", user);
    if (user) {
      email = user.email;
      setDisableEmail(true);
    } else if (localStorage.getItem("email")) {
      email = localStorage.getItem("email");
      setDisableEmail(false);
    } else {
      setDisableEmail(false);
    }
    setFormData({ email });
  }, [user]);

  useEffect(() => {
    if (!user) {
      // console.log("initial checking email", email);
      checkIfExistedEmail(email);
    }
  }, []);
  // console.log("after setState email", formData);
  // const user = useSelector(({ auth }) => auth);
  // console.log("ListAdd", user);

  const checkIfExistedEmail = (newEmail) => {
    Axios.get(`http://api.ppewholesale.us:3030/users/${newEmail}?by=email`)
      .then((rsp) => {
        // console.log("api rsp", rsp);
        if (rsp.data.uid) {
          setEmailError(true);
        } else {
          setEmailError(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (name) => (e) => {
    // console.log("handleChange", name, e.target.value);
    switch (name) {
      case "unit":
        formData[name] = parseInt(e.target.value);
        break;
      case "price":
        formData[name] = parseFloat(e.target.value);
        break;
      case "email":
        clearTimeout(timeout);
        const newEmail = e.target.value;
        timeout = setTimeout(() => {
          // console.log("timeout");
          localStorage.setItem("email", newEmail);
          checkIfExistedEmail(newEmail);
        }, 500);

      // thorow
      default:
        formData[name] = e.target.value;
    }
    // console.log("handleFormChange", formData);
    setFormData(formData);
  };
  const handleSubmit = (e) => {
    // console.log(e);
    // console.log(formData);
    formData["lastUpdated"] = Math.floor(Date.now() / 1000);
    onSubmit(formData);
  };
  // console.log("before render email", email, formData);
  return (
    <Card variant="outlined" style={{ marginBottom: "20px" }}>
      <CardContent>
        <form className={classes.root} onSubmit={handleSubmit}>
          <Typography variant="subtitle1">Content</Typography>
          <div>
            <TextField
              label="Message"
              placeholder="input your message here"
              multiline
              rows={3}
              autoFocus
              required
              value={formData["message"]}
              onChange={handleChange("message")}
            />
          </div>
          <div>
            <TextField
              label="Unit"
              type="number"
              placeholder="how many items you want to list"
              onChange={handleChange("unit")}
            />
          </div>
          <div>
            <TextField
              type="number"
              label="Price"
              placeholder="The price per unit"
              onChange={handleChange("price")}
            />
          </div>

          <div>
            <TextField label="Location" onChange={handleChange("location")} />
          </div>
          <Typography variant="subtitle1">Contact</Typography>
          <div>
            {disableEmail ? (
              <FormControl style={{ margin: "8px" }}>
                <Input disabled label="Email" value={formData["email"]} />
                <FormHelperText>{emailHelpText.LOGIN_DEFAULT}</FormHelperText>
              </FormControl>
            ) : (
              <TextField
                label="Email"
                error={emailError}
                defaultValue={localStorage.getItem("email") || ""}
                onChange={handleChange("email")}
                helperText={
                  emailError
                    ? emailHelpText.NOLOGIN_EXITED_EMAIL
                    : emailHelpText.NOLOGIN_DEFAULT
                }
              />
            )}
          </div>

          <Button type="submit">Post</Button>
        </form>
      </CardContent>
    </Card>
  );
}
