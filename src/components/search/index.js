import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Card,
  LinearProgress,
  Button,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { routers } from "../../config/router";
import { useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";

const funResults = {
  ZY: "Do you know the Chinese name for My Little Pony is 紫悦(Zi Yue)?",
};

function ResultSection() {
  return <Card></Card>;
}

function FunResult({ keywords }) {
  console.log("FunResult", funResults[keywords.toUpperCase()]);
  return funResults[keywords.toUpperCase()] ? (
    <Alert severity="info">{funResults[keywords.toUpperCase()]}</Alert>
  ) : null;
}

function Alert404() {
  // @todo: add emoji to the content.
  return (
    <Alert severity="warning" style={{ marginBottom: "20px" }}>
      404: I'm sorry, I can't find exactly what you want, but let me forward to
      my partner Search to see if she can find something related to what you are
      looking for.
    </Alert>
  );
}

export default function Search() {
  const { pathname } = useLocation();
  const history = useHistory();
  const [keywords, setKeywords] = useState(pathname.substring(1));
  const [initialized, setInitialized] = useState(false);
  const [organizations, setOrganizations] = useState([]);

  const ifExisted = routers.find(
    ({ path }) => path && path.toLowerCase() === pathname.toLowerCase()
  );

  useEffect(() => {
    // setKeywords(pathname);
    async function genOrganizations() {
      const db = firebase.firestore();
      const docsRef = await db
        .collection("organizations")
        .orderBy("name")
        .limit(100)
        .get();
      const newOrgs = new Map();
      docsRef.docs.forEach((doc) => {
        const data = doc.data();
        let found = newOrgs.get(data.name.trim().toLowerCase());
        if (found) {
          let newOrg = {
            ...found,
            count: found.count ? ++found.count : 2,
          };
          console.log("found", newOrg);
          newOrgs.set(data.name.trim().toLowerCase(), newOrg);
        } else {
          newOrgs.set(data.name.trim().toLowerCase(), {
            id: doc.id,
            ...data,
          });
        }
      });
      console.log(newOrgs);
      setInitialized(true);
      // setOrganizations([...newOrgs.values()]);
    }
    genOrganizations();
  }, []);
  history.listen((location, action) => {
    console.log("setKeywords", location, action);
    setKeywords(location.pathname.substring(1));
  });

  // console.log("keywrods", keywords, useLocation());

  return (
    <Container className="main">
      {!ifExisted && <Alert404 />}
      {!initialized && <LinearProgress color="secondary" />}
      <TextField
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      {initialized && (
        <>
          {!organizations.length && (
            <Alert severity="warning">
              Search: Uh-oh, I can't help you either, maybe you want to
              contribute your content?
            </Alert>
          )}
        </>
      )}
      <form>
        <TextField
          multiline
          rows="5"
          placeholder={"What do you want to share?"}
        />
        <div>#Organziation #Post #Sell #Buy</div>
        <Button>Sbumit</Button>
      </form>

      {(Math.random() >= 0.8 || true) && (
        <div>
          <FunResult {...{ keywords }} />
        </div>
      )}
    </Container>
  );
}
