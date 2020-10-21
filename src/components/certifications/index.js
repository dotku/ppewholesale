import {
  CardContent,
  Container,
  Typography,
  Box,
  Card,
  CardActions,
  Button,
} from "@material-ui/core";
import React from "react";
export default function Certifications() {
  return (
    <Container>
      <Typography variant="h3">Certifications</Typography>
      <Box>
        <Card
          variant="outlined"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <CardContent>
            <Typography variant="h5">
              Fangtian Validation Certification
            </Typography>
            <Typography>Instructor: Jacky Sun</Typography>
            <Typography>Course: 90mins</Typography>
            <Typography>Fee: $99</Typography>
          </CardContent>
          <CardActions>
            <Button color="primary">Attend</Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}
