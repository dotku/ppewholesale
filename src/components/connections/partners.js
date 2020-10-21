import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

export default function Partner() {
  const data = [
    {
      name: "USChitu Media and Entertainment LLC",
    },
    {
      name: "Xiaolian Group Inc",
    },
    {
      name: "Aucas Group",
    },
    {
      name: "ZY International Trade Inc",
    },
    {
      name: "Lifesaving Global LLC",
    },
    {
      name: "Medsolution LLC",
    },
    {
      name: "US Health Express Corp",
      dba: "Jointown International",
    },
    {
      name: "Skynet Trading Group LLC",
    },
    {
      name: "Aoqilin international Trading LLC",
    },
  ];
  return (
    <Container>
      <Typography variant="h6">Partner</Typography>
      <List>
        {data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item, idx) => (
            <ListItem key={idx}>
              <ListItemText primary={item.name} secondary={item.dba} />
            </ListItem>
          ))}
      </List>
    </Container>
  );
}
