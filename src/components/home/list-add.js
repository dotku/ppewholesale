import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
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
let email = localStorage.getItem("email") || "jay.lin@dkwholesale.us";
export default function ListAdd({ onSubmit }) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email,
  });
  console.log(formData);
  const handleChange = (name) => (e) => {
    console.log("handleChange", name, e.target.value);
    switch (name) {
      case "unit":
        formData[name] = parseInt(e.target.value);
        break;
      case "price":
        formData[name] = parseFloat(e.target.value);
        break;
      case "email":
        localStorage.setItem("email", e.target.value);
      // thorow
      default:
        formData[name] = e.target.value;
    }

    setFormData(formData);
  };
  const handleSubmit = (e) => {
    // console.log(e);
    console.log(formData);
    formData["lastUpdated"] = Math.floor(Date.now() / 1000);
    onSubmit(formData);
  };
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
            <TextField
              label="Email"
              defaultValue={formData["email"]}
              onChange={handleChange("email")}
            />
          </div>

          <Button type="submit">Post</Button>
        </form>
      </CardContent>
    </Card>
  );
}
