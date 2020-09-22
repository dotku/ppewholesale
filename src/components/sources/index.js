import { List, ListItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function SourceIndex() {
  return <div>
    <h3>Sources</h3>
    <List>
      <ListItem><Link to="./sources/safe">Safe</Link></ListItem>
      <ListItem><Link to="./sources/warning">Warning</Link></ListItem>
    </List>
  </div>
}