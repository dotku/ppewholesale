import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default function UserSocialLoginProviders(props) {
  const { providerData } = props;
  return (
    <List>
      {providerData.map((provider, idx) => (
        <ListItem key={idx}>
          <ListItemText secondary={provider.providerId} />
        </ListItem>
      ))}
    </List>
  );
}
