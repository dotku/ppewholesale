import { Container } from "@material-ui/core";
import React from "react";
import SourceAdd from "./SourceAdd";
import SourceStat from "./SourceStat";
import SourceList from "./SrouceList";

export default function Sources(){
  return <Container>
    <h3>Sources</h3>
    <SourceStat />
    <SourceAdd />
    <SourceList />
  </Container>
}