import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

import Alert from "@material-ui/lab/Alert";
import React from "react";
import ReputationAddEditForm from "./ReputationAddEditForm";
import ReputationContentItem from "./ReputationContentItem";
const data = [
  { name: "Titan Medico Pte Ltd", region: "Singapore" },
  { name: "Nakawat Ptd Ltd", region: "Singapore" },
  { name: "Diamond Prosperity", region: "Singapore" },
  { name: "Real Eden", region: "Singapore" },
  { name: "Plus Point", region: "Hong Kong" },
  { name: "PT Metro Timur Indonesia: Indonesia", region: "" },
  { name: "Treasure & Infinity: Thailand", region: "" },
  { name: "Duria Manufacturing: Malaysia", region: "" },
  { name: "Sram Mram Resources Bhd: Malaysia ", region: "" },
  { name: "Monosa Holdings Kedah: Malaysia (under investigation)", region: "" },
  { name: "Emaas Marketing: Malaysia (under investigation)", region: "" },
  { name: "Ptd Ltd (Singapore)", region: "" },
  { name: "gayrimenkul yatrimilari Turkey ", region: "" },
  { name: "World Tech?? (very suspicious)", region: "" },
  { name: "Profil Sdn Bhd (Msia)", region: "" },
  { name: "Group Company Ltd (Thailand)", region: "" },
  { name: "honkong", region: "" },
  { name: "International Corporation (under investigation)", region: "" },
  { name: "Chain Ltd Bhd (suspicious)", region: "" },
  { name: "pharma dubai", region: "" },
  { name: "Plus Enterprise- Dr Wan", region: "" },
  { name: "Security & Electronic Systems (Switzerland)", region: "" },
  { name: "Mro industrial supply( Multiple frauds )", region: "" },
  { name: "Europe BV (Netherlands)", region: "" },
  { name: "Core Limited (Malta) ( under investigation )", region: "" },
  { name: "International Sdn Bhd", region: "" },
  { name: "Bigger Picture- London", region: "" },
  { name: "clothing limited bcl ( Indonesia )", region: "" },
  { name: "Management Services", region: "" },
  { name: "Berhad", region: "" },
  { name: "Global International Sdn Bhd", region: "" },
  { name: "Metamorphosis Sdn Bhd (multiple   fraud) (scamster ) ", region: "" },
  { name: "Asn holding uk ", region: "" },
  { name: "ICC best consulting ( malaysia)", region: "" },
  { name: "Rintiz Group Berhad", region: "" },
  { name: "Trinities Cagesst Cambodia Co Ltd", region: "" },
  { name: "IHD marketplace ", region: "" },
  { name: "Abhay Jay International (India)", region: "" },
  { name: "KH Eco Works", region: "" },
  { name: "Biomed UK", region: "" },
  { name: "IB Century Global (Msia", region: "" },
  { name: "Multi Mech Doha        ", region: "" },
  { name: "Z Empire Sdn Bhd", region: "" },
  { name: "Healthy solution usa ", region: "" },
  { name: "Agl Freight Services Sdn Bhd", region: "" },
  { name: "Talasco Dgang ", region: "" },
  { name: "Teknik teras sdn bhd", region: "" },
  { name: "Orbit life science ", region: "" },
  { name: "Sher medical solution ", region: "" },
  { name: "jc world wide consultants ", region: "" },
  { name: "Wooi Tong Global Sdn Bhd", region: "" },
  { name: "Eagle success limited (Singapore )", region: "" },
  { name: "Diamedica", region: "" },
  { name: "Prodec Resources International Pte Ltd.", region: "" },
  { name: "Numen Healthcare Pvt Ltd", region: "" },
  { name: "Demure International Trading ", region: "" },
  { name: "Talasco general trading ", region: "" },
  { name: "Big foot inc usa ( suspicious ) ", region: "" },
  { name: "Ennat Manufacturing", region: "" },
  { name: "R Republic sdn bhd ( under investigation ) ", region: "" },
  { name: "Almanyagomenlick Germany ", region: "" },
  { name: "Aftrr health link ", region: "" },
  { name: "Karotex sdn bhd ", region: "" },
  { name: "Semboyan Group", region: "" },
  { name: "Monat partner ", region: "" },
  { name: "E sand & gravel sdn bhd ( fake and scamster) ", region: "" },
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
  { name: "Nazcare medical supplies ( malaysia ) ", region: "" },
  { name: "Siam star group ", region: "" },
  { name: "Rungkit gloves ", region: "" },
  { name: "Sufficiency economy city ", region: "" },
  { name: "Mercator group", region: "" },
  { name: "Osmotec (Australia)", region: "" },
  { name: "Noble C Beauty", region: "" },
];
export default function ReputationIndex() {
  return (
    <Container className="main">
      <Alert severity="warning">
        Beware of these companies are under scanner and under investigation. Be
        careful while dealing for gloves.
      </Alert>
      <Grid container spacing={2} style={{ marginTop: "8px" }}>
        <Grid item md={8}>
          {data.map((item, idx) => (
            <ReputationContentItem {...item} key={idx} />
          ))}
        </Grid>
        <Grid item md={4}>
          <Card variant="outlined">
            <CardContent>
              <ReputationAddEditForm />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
