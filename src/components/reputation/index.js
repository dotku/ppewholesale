import {
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import Sponsors from "../sponsors";
import ReputationAddEditForm from "./ReputationAddEditForm";
import ReputationContentItem from "./ReputationContentItem";
const data = [
  { name: "Titan Medico Pte Ltd", region: "Singapore" },
  { name: "Nakawat Ptd Ltd", region: "Singapore" },
  { name: "Diamond Prosperity", region: "Singapore" },
  { name: "Real Eden", region: "Singapore" },
  { name: "Plus Point", region: "Hong Kong" },
  { name: "PT Metro Timur Indonesia", region: "Indonesia" },
  { name: "Treasure & Infinity", region: "Thailand" },
  { name: "Duria Manufacturing", region: "Malaysia" },
  { name: "Sram Mram Resources Bhd", region: "Malaysia" },
  {
    name: "Monosa Holdings Kedah",
    region: "Malaysia",
    level: "Under Investigation",
  },
  {
    name: "Emaas Marketing",
    region: "Malaysia",
    level: "under investigation",
  },
  { name: "Ptd Ltd", region: "Singapore" },
  { name: "gayrimenkul yatrimilari", region: "Turkey" },
  { name: "World Tech", region: "", level: "very suspicious" },
  { name: "Profil Sdn Bhd", region: "Malaysia" },
  { name: "Group Company Ltd", region: "Thailand" },
  {
    name: "International Corporation",
    region: "",
    level: "under investigation",
  },
  { name: "Chain Ltd Bhd", region: "", level: "suspicious" },
  { name: "pharma", region: "Dubai" },
  { name: "Plus Enterprise- Dr Wan", region: "" },
  { name: "Security & Electronic Systems", region: "" },
  { name: "Mro industrial supply", region: "", level: "Multiple frauds" },
  { name: "Europe BV", region: "Netherlands" },
  { name: "Core Limited", region: "Malta", level: "under investigation" },
  { name: "International Sdn Bhd", region: "" },
  { name: "Bigger Picture- London", region: "" },
  { name: "clothing limited bcl", region: "Indonesia" },
  { name: "Management Services", region: "" },
  { name: "Berhad", region: "" },
  { name: "Global International Sdn Bhd", region: "" },
  {
    name: "Metamorphosis Sdn Bhd",
    region: "",
    level: "multiple fraud, scamster",
  },
  { name: "Asn holding uk ", region: "" },
  { name: "ICC best consulting", region: "Malaysia" },
  { name: "Rintiz Group Berhad", region: "" },
  { name: "Trinities Cagesst Cambodia Co Ltd", region: "" },
  { name: "IHD marketplace ", region: "" },
  { name: "Abhay Jay International", region: "India" },
  { name: "KH Eco Works", region: "" },
  { name: "Biomed UK", region: "" },
  { name: "IB Century Global", region: "Malaysia" },
  { name: "Multi Mech Doha", region: "" },
  { name: "Z Empire Sdn Bhd", region: "" },
  { name: "Healthy solution", region: "USA" },
  { name: "Agl Freight Services Sdn Bhd", region: "" },
  { name: "Talasco Dgang", region: "" },
  { name: "Teknik teras sdn bhd", region: "" },
  { name: "Orbit life science ", region: "" },
  { name: "Sher medical solution", region: "" },
  { name: "jc world wide consultants ", region: "" },
  { name: "Wooi Tong Global Sdn Bhd", region: "" },
  { name: "Eagle success limited", region: "Singapore" },
  { name: "Diamedica", region: "" },
  { name: "Prodec Resources International Pte Ltd.", region: "" },
  { name: "Numen Healthcare Pvt Ltd", region: "" },
  { name: "Demure International Trading ", region: "" },
  { name: "Talasco general trading ", region: "" },
  { name: "Big foot inc ", region: "USA", level: "suspicious" },
  { name: "Ennat Manufacturing", region: "" },
  { name: "R Republic sdn bhd", region: "", level: "under investigation" },
  { name: "Almanyagomenlick", region: "Germany" },
  { name: "Aftrr health link ", region: "" },
  { name: "Karotex sdn bhd ", region: "" },
  { name: "Semboyan Group", region: "" },
  { name: "Monat partner ", region: "" },
  { name: "E sand & gravel sdn bhd", region: "", level: "fake and scamster" },
  { name: "Ashton Grove limited ", region: "" },
  { name: "Aas  global limited ", region: "" },
  { name: "Hop naht company ", region: "" },
  { name: "Akp global trade sdn bhd ", region: "" },
  { name: "Hsbt  inyernational services jsc", region: "" },
  {
    name: "Truong Tho Medical Development And Investment Joint Stock Company",
    region: "",
  },
  {
    name: "Vietnam Intechco Technology Investment Joint Stock Company",
    region: "",
  },
  { name: "Dragon Land Joint Stock Company", region: "" },
  { name: "GSE Technology Joint Stock Company", region: "" },
  { name: "Nazcare medical supplies", region: "Malaysia" },
  { name: "Siam star group", region: "" },
  { name: "Rungkit gloves", region: "" },
  { name: "Sufficiency economy city", region: "" },
  { name: "Mercator group", region: "" },
  { name: "Osmotec", region: "Australia" },
  { name: "Noble C Beauty", region: "" },
];

function CountByRegion({ rows = [] }) {
  let result = {};
  result["Unkown"] = 0;
  rows.forEach((row) => {
    if (row.region) {
      if (result[row.region]) {
        result[row.region]++;
      } else {
        result[row.region] = 1;
      }
    } else {
      result["Unkown"]++;
    }
  });

  return Object.entries(result).map((v, k) => (
    <div key={k}>{`${v[0]}: ${v[1]}`}</div>
  ));
}
export default function ReputationIndex() {
  const [keyword, setKeyword] = useState("");

  return (
    <Container className="main">
      <Alert severity="warning">
        Beware of these companies are under scanner and under investigation. Be
        careful while dealing for gloves.
      </Alert>
      <Grid container spacing={2} style={{ marginTop: "8px" }}>
        <Grid item md={8}>
          <TextField
            label="search"
            style={{ marginBottom: "20px" }}
            onKeyUp={(e) => {
              setKeyword(e.target.value || "");
            }}
          />
          {data
            .filter((item) => item.name.includes(keyword))
            .map((item, idx) => (
              <ReputationContentItem {...item} key={idx} />
            ))}
        </Grid>
        <Grid item md={4}>
          <Card variant="outlined">
            <CardContent>
              <ReputationAddEditForm />
            </CardContent>
          </Card>
          <Card variant="outlined" style={{ marginTop: "20px" }}>
            <CardContent>
              <Typography variant="h5">Stat</Typography>
              <div style={{ textAlign: "right" }}>Total: {data.length}</div>
              <Divider />
              <CountByRegion rows={data} />
            </CardContent>
          </Card>
          <Sponsors />
        </Grid>
      </Grid>
    </Container>
  );
}
