import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

export default function Glove() {
  return <Container>
    <Typography variant="h2">Glove</Typography>
    <Grid container>
      <Grid item md={2}>
        <h3>Category</h3>
        <h3>Brands</h3>
        <h3>Market</h3>
      </Grid>
        <Grid item md={10}>
      <p>This is a page for everything about gloves.</p>
      <Typography variant="h3">Category</Typography>
      <p>In general we have three main category of glove depends on their material.</p>
      <ol>
        <li>Nitrile</li>
        <li>Vinyl</li>
        <li>Latex</li>
        <li>Mixed</li>
      </ol>
      <p>Nitrile glove is mostly demanded during the CONVID-19. It is strong and safe.
        Comparing with vinyl, it is 5 times srength. 
        Some people have allergy to Latex, but Nitrile is safe for most everyone.
      </p>
      </Grid>
    </Grid>
    
  </Container>
}