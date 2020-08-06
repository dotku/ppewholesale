import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default function Gloves() {
  let gloves = [
  { name: "TP Glove", origin: "Thailand"},
  { name: "Superior", origin: "Vetnam"},
  { name: "VGlove", origin: "Vetname"},
  { name: "SkyMed", origin: "Thailand"},
  { name: "Hetalega", origin: "Thailand"},
  { name: "MyMed Care", origin: "Thailand"},
  { name: "S2 MOD", origin: "Thiland"},
  { name: "Cranberry", origin: "South Africa"},
  { name: "Top Glove", origin: "Malasia"},
  { name: "Tech Glove", origin: "Thailand"},
  { name: "Intco", origin: "China"},
  { name: "Hongray", origin: "China"},
  {
    name: "Sri Trang Gloves Thailand (STGT)",
    locale: "诗董手套（泰国）有限公司"
  }, {
    name: "Hongray",
    locale: "鸿锐",
  }, {
    name: "Intco Medical",
    locale: "英科医疗"
  }].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div>
      <p>### Gloves</p>
      <List>
          {gloves.map(item => 
          <ListItem button>
            <ListItemText
            primary={item.name}
            secondary={item.locale}
          />
           </ListItem>
          )}
      </List>
    </div>
  );
}
