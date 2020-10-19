import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserAvatar from "../user/userAvatar";

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />;
}

export default function UserColumn() {
  const user = useSelector(({ auth }) => auth);
  return (
    <div>
      <Box>
        <Box display="flex" alignItems="center">
          <UserAvatar />
          <Typography variant="subtitle2">
            {user && user.displayName}
          </Typography>
        </Box>
        <Box>
          <Typography>
            <Link to="#profile" variant="body2">
              Profile
            </Link>
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Typography variant="subtitle1">Posts</Typography>
      </Box>
      <Divider />
      <Box>
        <Typography variant="subtitle1">
          <Link to="/organizations">Organizations</Link>
        </Typography>
      </Box>
      <Divider />
      <Box>
        <Typography variant="subtitle1">
          <Link to="/contacts">Contacts</Link>
          <List dense={true}>
            <ListItemLink to="/message/item1">Item 1</ListItemLink>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
            <ListItem>Item 5</ListItem>
          </List>
        </Typography>
      </Box>
      <Box textAlign="center">
        {user ? (
          <Button variant="outlined" href="#/logout">
            Logout
          </Button>
        ) : (
          <Button href="#/sign-in">Sign In</Button>
        )}
      </Box>
    </div>
  );
}
