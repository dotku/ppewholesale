import React from "react";
import { List, ListItem, ListItemText, Container, Typography} from "@material-ui/core";

function GeneralProviders() {
  const items = [
    { title: "Yuejie (KN95, N95, Disposiable Chidren Mask)", subtitle: "月洁" },
    {
      title: "Xnyee (Disposible Mask, Disposible Children Mask)",
      subtitle: "心怡医疗",
    },
    { title: "Ruimaishu (KN95)", subtitle: "瑞迈舒" },
    { title: "Fengle (Child Disposible Mask)", subtitle: "丰乐医疗" },
    { title: "Zhilianbao (Disposible Protective Mask)", subtitle: "智联宝" },
    { title: "NutriVsta (Disposible Medical Mask)" },
    { title: "RealTone (Disposiable Medial Mask)", subtitle: "通华伟业" },
    {
      title:
        "Jiutianlv (KN95, Disposiable Medical Mask, Disposible Children Mask)",
      subtitle: "九天绿",
    },
    { title: "Changzhang (Disposible Children Mask)", subtitle: "常展" },
    { title: "Taidakang (KN95, N95)", subtitle: "泰达康" },
    { title: "Daddy Baby (KN95)", subtitle: "爹地宝贝" },
    { title: "Page (KN95)", subtitle: "佩吉" },
  ];
  const listItems = items.map((item, idx) => {
    const bodyContent = `number of need:%0D%0Alocation of need:%0D%0Atargeted price:%0D%0A`;
    const hrefContent = `mailto:jay.lin@ppewholesale?subject=Query ${item.title}&body=${bodyContent}`;
    return (
      <ListItem button component="a" href={hrefContent} key={idx}>
        <ListItemText
          primary={item.title}
          secondary={item.subtitle}
        ></ListItemText>
      </ListItem>
    );
  });
  return <List>{listItems}</List>;
}
export default function Providers() {
  return (
    <Container>
      <Typography variant="h6">Providers</Typography>
        <p>### EUA (Emergency Use Authorizations) Channel</p>
        <a href="https://www.fda.gov/media/136663/download">
          https://www.fda.gov/media/136663/download
        </a>
        <p>Updated: June 11, 2020</p>
        <List>
          <ListItem button>
            <ListItemText primary="3M Company" secondary="" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="AOK Tooling Ltd." secondary="" />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="BYD Precision Manufacture Co. Ltd."
              secondary="比亚迪"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Dongguan Arun Industrial Co., LTD "
              secondary="海陆通"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="ESound Medical Device Co., Ltd."
              secondary="亿信"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Guangzhou Harley Commodity Company Limited"
              secondary="哈雷"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Guangzhou Powecom Labor Insurance Supplies Co., LTD"
              secondary="保为康"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Jiande Chaomei Daily Chemicals Co."
              secondary="朝美"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Qingdao Miuton Medical Co., Ltd"
              secondary="明药堂"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Rizhao Sanqi Medical & Health Articles Co., Ltd"
              secondary="日照三奇"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Shanghai Dasheng Health Products Manufacture Company, Ltd."
              secondary="上海大胜"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Weini Technology Development Co., Ltd"
              secondary="威尼科技"
            />
          </ListItem>
        </List>
        <p>### Niosh</p>
        <List>
          <ListItem button>
            <ListItemText>3M Company</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>AOK Tooling Ltd.</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="BYD Precision Manufacture Co. Ltd."
              secondary="比亚迪"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Guangzhou Harley Commodity Company Limited"
              secondary="广州哈雷"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Rizhao Sanqi Medical &amp; Health Articles Co., Ltd"
              secondary="日照三奇"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primayr="Shanghai Dasheng Health Products Manufacture Company, Ltd."
              secondary="上海大胜"
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primayr="Makrite Industries, Inc."
              secondary="麦特瑞"
            />
          </ListItem>
          <ListItem button>
            <ListItemText>Jinfuyu Industrial Company, Ltd.</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              Xiantao Zhongyi Safety Protection Products Company, Ltd.
            </ListItemText>
          </ListItem>
        </List>
        <p>### General</p>
        <p>** not in the Niosh or EUA listed</p>
        <GeneralProviders />
    </Container>
  );
}
