import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { genUsers } from "../../actions/users";
import UserAvatar from "../user/userAvatar";
import UserWidget from "../user/userWidget";

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />;
}

export default function UserColumn() {
  const users = useSelector(({ users }) => users);
  const user = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(genUsers());
  }, []);
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
          <UserWidget />
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
          {
            // @todo: add orgnizations here
          }
        </Typography>
      </Box>
      <Divider />
      <Box>
        <Typography variant="subtitle1">
          <Link to="/contacts">Contacts</Link>
          {users.length > 0 ? (
            <List dense={true}>
              {users.map(({ id, name }, idx) => (
                <ListItemLink key={idx} to={`/message/${id}`}>
                  {name}
                </ListItemLink>
              ))}
            </List>
          ) : (
            // @todo: add user search
            <div>No contacts</div>
          )}
        </Typography>
      </Box>
      {/* <Box textAlign="center">
        {user ? (
          <Button variant="outlined" href="#/logout">
            Logout
          </Button>
        ) : (
          <Button href="#/sign-in">Sign In</Button>
        )}
      </Box> */}
    </div>
  );
}
