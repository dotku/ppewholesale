import React, {useState, useEffect}from 'react';
import axios from "axios";
import { Typography, Container, List, ListItemText, ListItem} from '@material-ui/core';
import PleaseShare from './common/pleaseshare';

export default function Mask() {
  const [values, setValues] = useState({});
  useEffect(() => {
    async function fetchData() {
      const maskRsp = await axios("https://raw.githubusercontent.com/dotku/ppedb/master/data/mask.json");
      setValues({
        mask: maskRsp.data
      });
    }
    fetchData();
  }, [])
  console.log(values);
  const {OTGLots, popularProducts, productionRun, stableOTG} = values.mask || {};
  
  return values.mask ? <Container>
    <Typography variant="h2">Mask</Typography>
    <PleaseShare />
    <Typography variant="h4">到岸库存 OTG Lots</Typography>
    <List>
      {OTGLots.map((item, idx) => 
        <ListItem key={idx}>
            <ListItemText secondary={item.sku}>
              {`${item.brand ? item.brand : ""} ${item.name}`}
              {
                item.ifNew && 
                <Typography color="secondary" display="inline">【新】</Typography>
              }
            </ListItemText>
        </ListItem>
        
      )}
    </List>
    <Typography variant="h4">热门产品 Popular</Typography>
    <List>
      {popularProducts.map((item, idx) => 
        <ListItem key={idx}>
          <ListItemText primary={item.name} secondary={item.sku} />
        </ListItem>
      )}
    </List>
    <Typography variant="h4">期货排期 Production Run</Typography>
    <List>
      {productionRun.map((item, idx) => 
        <ListItem key={idx}>
          <ListItemText primary={item.name} secondary={item.sku} />
        </ListItem>
      )}
    </List>
    <Typography variant="h4">稳定现货 Stable OTG</Typography>
    <List>
      {stableOTG.map((item, idx) => 
        <ListItem key={idx}>
          <ListItemText primary={item.name} secondary={item.sku} />
        </ListItem>
      )}
    </List>
    <Typography>上架方式: 请联系管理员，我们将手动为您上架，会写代码的，<a href="https://github.com/dotku/ppedb">请访问这里</a>自行上架</Typography>

  </Container> : null;
}