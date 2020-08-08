import React from "react";
import { List, ListItem, ListItemText, Typography, Container, Grid } from "@material-ui/core";
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip,
  Legend
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import moment from 'moment';

const gloveManufacturers = [
  { id: 1, name: "TP Glove", origin: "Thailand"},
  { id: 2, name: "Superior", origin: "Vetnam"},
  { id: 3, name: "VGlove", origin: "Vetname"},
  { id: 4, name: "SkyMed", origin: "Thailand"},
  { id: 5, name: "Hetalega", origin: "Thailand"},
  { id: 6, name: "MyMed Care", origin: "Thailand"},
  { id: 7, name: "S2 MOD", origin: "Thiland"},
  { id: 8, name: "Cranberry", origin: "South Africa"},
  { id: 9, name: "Top Glove", origin: "Malasia"},
  { id: 10, name: "Tech Glove", origin: "Thailand"},
  { id: 11, name: "Intco", origin: "China"},
  {
    id: 12,
    name: "Sri Trang Gloves Thailand (STGT)",
    locale: "诗董手套（泰国）有限公司"
  }, {
    id: 13,
    name: "Hongray",
    locale: "鸿锐",
  }, {
    id: 14,
    name: "Intco Medical",
    locale: "英科医疗"
  }].sort((a, b) => a.name.localeCompare(b.name));

function getIdByName(name) {
  return gloveManufacturers.find(item => item.name === name).id
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip" style={{
        backgroundColor: "rgba(200,200,200,0.5)",
        padding: "5px"
      }}>
        {/* <div className="label">{`${payload[2].name}: ${payload[2].value}`}</div> */}
        <div className="label">{`${payload[0].name}: ${moment(payload[0].value).format('MM-DD-YYYY')}`}</div>
        <div className="label">{`${payload[1].name}: ${payload[1].value}`}</div>
        {/* <div className="label">{`brand: ${getBrandByDataId(payload[2].value)}`}</div>
        {getNoteByDataId(payload[2].value) && <div className="label">{`note: ${getNoteByDataId(payload[2].value)}`}</div>} */}
        
      </div>
    );
  }

  return null;
};

export default function Gloves() {

  const colors = scaleOrdinal(schemeCategory10).range();
  const data1 = [
    { id: Date.now() + Math.floor(Math.random() * 1000), 
      price: 12.6, date: moment("2020-08-01").valueOf(), brand: "Intco" },
    { id: Date.now() + Math.floor(Math.random() * 1000), price: 13, date: moment("2020-08-08").valueOf(), brand: "Intco" },
  ];
  const data2 = [
    { id: Date.now() + Math.floor(Math.random() * 1000), price: 7.33, date: moment("2020-07-28").valueOf(), brand: "VGlove" },
    { id: Date.now() + Math.floor(Math.random() * 1000), price: 6.33, date: moment("2020-08-08").valueOf(), brand: "VGlove" },
    { id: Date.now() + Math.floor(Math.random() * 1000), price: 8.33, date: moment("2020-08-08").valueOf(), brand: "VGlove" },
  ];
  const dataCranberry = [
    {
      id: Date.now() + Math.floor(Math.random() * 1000), 
      price: 6.3, 
      date: moment("2020-07-08").valueOf(), 
      brand: "Cranberry",
      description: "5 Million boxes OTG Stock"
    },
  ];

  return (
    <Container>
      <Typography variant="h2">Gloves</Typography>
      <Grid container>
        <Grid item md={3}>
          <List>
            {gloveManufacturers.map((item, idx) => 
            <ListItem key={idx}>
              <ListItemText
              primary={item.name}
              secondary={item.locale}
            />
            </ListItem>
            )}
        </List>
        </Grid>
        <Grid item md={9}>
        <ScatterChart
          width={800}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="date" name="date" domain={['auto', 'auto']} tickFormatter={timeStr => moment(timeStr).format('MM-DD')}/>
          <YAxis type="number" dataKey="price" name="price" unit="usd" domain={['auto', 'auto']} />
          <ZAxis dataKey="id" name="id" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />}/>
          <Legend />
          <Scatter onClick={() => {console.log("Click")}} name="VGlove" data={data1} fillOpacity={0.5} fill={colors[getIdByName("VGlove") % colors.length]} />
          <Scatter name="Intco" data={data2} fillOpacity={0.5} fill={colors[getIdByName("Intco") % colors.length]} />
          <Scatter name="Cranberry" data={dataCranberry} fillOpacity={0.5} fill={colors[getIdByName("Cranberry") % colors.length]} />
        </ScatterChart>
        <center style={{margin: "40px"}}>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="7LN33PXGD66Y4" />
<input type="image" src="https://aomwwf.org/images/home/support-donate1.jpg" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form></center>
        </Grid>
      </Grid>
      
    </Container>
  );
}
