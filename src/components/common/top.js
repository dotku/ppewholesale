import { Link, Grid, Typography, IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import LoginDialog from "./LoginDialog";
import React, { useState } from "react";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Toolbar from "@material-ui/core/Toolbar";
import { useSelector } from "react-redux";
import UserAvatar from "../profile/userAvatar";

export default function Top() {
  const auth = useSelector((state) => state.auth);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleClose = () => {
    setDialogOpen(false);
  };
  return (
    <AppBar position="fixed" className="no-print">
      <Toolbar>
        <Grid container style={{ justifyContent: "space-between" }}>
          <Grid item md={6} style={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <SupervisedUserCircleIcon
                style={{
                  color: "white",
                }}
              />
            </IconButton>
            <Link
              href="#"
              color="inherit"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography variant="h6" color="inherit" noWrap display="inline">
                PPE Wholesale &lt;3 US
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <UserAvatar user={auth} />
          </Grid>
        </Grid>
      </Toolbar>
      <LoginDialog open={dialogOpen} onClose={handleClose} />
    </AppBar>
  );
}
