import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default function Gloves() {
  return (
    <div>
      <p>### Gloves</p>
      <List>
        <ListItem button>
          <ListItemText
            primary="Sri Trang Gloves Thailand (STGT)"
            secondary="诗董手套（泰国）有限公司"
          />
        </ListItem>
      </List>
    </div>
  );
}
