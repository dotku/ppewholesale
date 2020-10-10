import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Link,
  Avatar,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import LoginDialog from "./LoginDialog";
import React, { useState } from "react";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Toolbar from "@material-ui/core/Toolbar";
import { useSelector } from "react-redux";
import UserAvatar from "../profile/userAvatar";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Top() {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleClose = () => {
    setDialogOpen(false);
  };
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Container>
          <Grid container>
            <Grid item md={6} style={{ display: "flex", alignItems: "center" }}>
              <Link
                href="#"
                color="inherit"
                style={{
                  textDecoration: "none",
                }}
              >
                <SupervisedUserCircleIcon
                  className={classes.icon}
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginTop: "-3px",
                  }}
                />
                <Typography
                  variant="h6"
                  color="inherit"
                  noWrap
                  display="inline"
                >
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
        </Container>
      </Toolbar>
      <LoginDialog open={dialogOpen} onClose={handleClose} />
    </AppBar>
  );
}
