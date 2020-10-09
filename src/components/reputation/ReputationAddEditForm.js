import React from "react";
import { TextField } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
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
export default function ReputationAddEditForm() {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <TextField label="name" required />
      <TextField label="whatsapp" />
      <TextField label="wechat" />
    </form>
  );
}
