import { Container } from "@material-ui/core";
import React from "react";
import SourceAdd from "./SourceAdd";
import SourceStat from "./SourceStat";
import WarningList from "./SrouceList";

export default function Sources(){
  return <Container>
    <h3>Sources</h3>
    <p>Beware of these companies are under scanner and under investigation.</p>
    <SourceStat />
    <SourceAdd />
    <WarningList />
  </Container>
}