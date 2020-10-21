import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Avatar,
  Container,
  Divider,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core";
import { Add, AddCircle, PlusOne } from "@material-ui/icons";
import React from "react";
import UserAvatar from "../user/userAvatar";

export default function Message() {
  return (
    <div>
      <Grid container>
        <Grid item md={3}>
          <Box display="flex" alignItems="center">
            <UserAvatar />
            <Typography variant="h5">Message</Typography>
          </Box>
          <Box>
            <List>
              <ListItem button selected>
                Adam
              </ListItem>
              <ListItem button>Belle</ListItem>
              <ListItem button>Carlos</ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item md={9} sm={9} style={{ borderLeft: "1px solid lightgray" }}>
          <Container>
            <Box display="flex" alignItems="center" marginY="8px">
              <Avatar style={{ margin: "8px" }}>A</Avatar> Adam
            </Box>
          </Container>
          <Divider />
          <Container maxWidth={false} className="main">
            <Box display="flex" alignItems="center">
              <Typography
                display="inline"
                style={{
                  backgroundColor: "lightgray",
                  margin: "10px 0px",
                  padding: "8px",
                  borderRadius: "5px",
                }}
              >
                How are you?
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <Typography
                color="primary"
                display="inline"
                style={{
                  color: "white",
                  backgroundColor: "DodgerBlue",
                  margin: "10px 0px",
                  padding: "8px",
                  borderRadius: "5px",
                }}
              >
                Fine, thank you. And you?
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography
                display="inline"
                style={{
                  backgroundColor: "lightgray",
                  margin: "10px 0px",
                  padding: "8px",
                  borderRadius: "5px",
                }}
              >
                I'm fine too.
              </Typography>
            </Box>
          </Container>
          <Box display="flex" alignItems="center">
            <IconButton>
              <AddCircle />
            </IconButton>
            <TextField variant="outlined" autoFocus fullWidth></TextField>
            <Button>Send</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
