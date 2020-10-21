import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

export default function Clients() {
  const data = [
    {
      name: "Mrchco LLC",
    },
    {
      name: "Arden Group International LLC",
    },
    {
      name: "Sierra View Medical Center",
    },
    {
      name: "Medso Pro LLC",
    },
    {
      name: "Pantheon Industries",
    },
    {
      name: "Shoes19",
    },
    {
      name: "Javad Ems, Inc",
    },
  ];
  return (
    <Container>
      <Typography variant="h6">Clients</Typography>
      <List>
        {data.map((item, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
