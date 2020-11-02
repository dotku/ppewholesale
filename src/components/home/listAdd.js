import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  IconButton,
  GridList,
  GridListTile,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Axios from "axios";
import { ContactSection } from "./ContactSection";
import ImageIcon from "@material-ui/icons/Image";
import { genPostFilesUpload } from "../../actions/postfiles";
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

export const emailHelpText = {
  LOGIN_DEFAULT: "You can't modify this email field once you are login",
  NOLOGIN_DEFAULT: "Please enter your email, so other people can reach you.",
  NOLOGIN_EXITED_EMAIL:
    "This email is registered by other user, please use other email",
};

function getEmail() {
  return localStorage.getItem("email") || "name@domain.com";
}

function getImagesFromFiles(files) {
  return files.filter((file) => file.data.type.includes("image"));
}

function Files({ files }) {
  return (
    <GridList cols={3} cellHeight={50}>
      {files.map(({ data }, idx) => {
        return (
          data.type.includes("image") && (
            <GridListTile cols={1} key={idx}>
              <a href={data.link}>
                <img src={data.link} key={idx} />
              </a>
            </GridListTile>
          )
        );
      })}
    </GridList>
  );
}

export default function ListAdd({ onSubmit, autoFocus }) {
  let email = "name@domain.com";
  let phoneNumber = "";
  let user = useSelector(({ auth }) => auth);
  let timeout;
  const classes = useStyles();
  // console.log("before useState email", email, user);
  const dispatch = useDispatch();
  const postfiles = useSelector(({ postfiles }) => postfiles);
  const [formData, setFormData] = useState({
    images: postfiles,
    email,
  });
  const [disableEmail, setDisableEmail] = useState(false);
  const [disablePhoneNumber, setDisablePhoneNumber] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactSection, setContactSection] = useState(false);
  useEffect(() => {
    // console.log("useEffect user", user);
    if (user) {
      if (user.email) {
        email = user.email;
        setDisableEmail(true);
      }
      if (user.phoneNumber) {
        phoneNumber = user.phoneNumber;
        setDisablePhoneNumber(true);
      }
    } else if (localStorage.getItem("email")) {
      email = localStorage.getItem("email");
      setDisableEmail(false);
    } else {
      setDisableEmail(false);
    }
    setFormData({ email, phoneNumber });
    setTimeout(() => {
      setContactSection(true);
    }, 2000);
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
    setFormData({
      ...formData,
    });
  };

  const handleFileUpload = async (e) => {
    console.log(e.target.files);
    await dispatch(genPostFilesUpload(e.target.files));
    // e.files.map((file) => {
    //   console.log(file);
    // });
    console.log("files", postfiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(formData);
    formData["_createTime"] = Math.floor(Date.now() / 1000);
    formData["_updateTime"] = Math.floor(Date.now() / 1000);
    formData["images"] = getImagesFromFiles(postfiles).map(
      (imageFile) => imageFile.data.link
    );
    console.log("images", getImagesFromFiles(postfiles));
    console.log("setFormData", formData);
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
              autoFocus={autoFocus}
              required
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
          <div>
            <input
              accept="image/*"
              multiple
              type="file"
              id="media-file"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <label htmlFor="media-file">
              <IconButton component="span">
                <ImageIcon />
              </IconButton>
            </label>
            <Files files={postfiles} />
          </div>
          {contactSection ? (
            <ContactSection
              {...{
                disableEmail,
                disablePhoneNumber,
                emailError,
                formData,
                handleChange,
              }}
            />
          ) : (
            <div>Loading...</div>
          )}
          <Button type="submit">Post</Button>
        </form>
      </CardContent>
    </Card>
  );
}
