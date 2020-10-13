import React from "react";
import { TextField, Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
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
export default function ReputationAddEditForm({ onSubmit }) {
  const classes = useStyles();
  const [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    formData._createTime = Math.floor(Date.now() / 1000);
    const db = firebase.firestore();
    db.collection("organizations")
      .add(formData)
      .then((rsp) => {
        console.log("add organzation successfully", rsp.id);
        setFormData({});
        onSubmit && onSubmit(formData);
      })
      .catch((e) => {
        console.error("add organzation failed", e);
      });
  };
  const handleChange = (name) => (e) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        required
        onChange={handleChange("name")}
        defaultValue={formData["name"]}
      />
      <TextField label="WhatsApp" onChange={handleChange("whatsapp")} />
      <TextField label="WeChat" onChange={handleChange("wechat")} />
      <TextField label="Region" onChange={handleChange("region")} />
      <TextField label="Sources" onChange={handleChange("sources")} />
      <TextField label="Rank" onChange={handleChange("rank")} />
      <div style={{ textAlign: "center" }}>
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}
