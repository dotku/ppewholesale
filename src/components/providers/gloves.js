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
        <ListItem button>
          <ListItemText primary="SkyMed" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="VGlove" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="TOP Glove" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Hongray" secondary="鸿锐" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Intco Medical" secondary="英科医疗" />
        </ListItem>
      </List>
    </div>
  );
}
