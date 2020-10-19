import { Button, Container, Typography, Input, Grid } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, useParams, useLocation } from "react-router-dom";

function useQuery() {
  console.log("useQuery", useLocation());
  console.log(
    "URLSearchParams",
    useLocation().search.substring(1),
    new URLSearchParams(useLocation().search.substring(1)).get("access_token")
  );
  return new URLSearchParams(useLocation().search.substring(1));
}

export default function ImgurTest() {
  const id = "49eb107b8b51638";
  const secret = "4181bec627a849c49008dff3bfce4df95ec8a305";
  const query = useQuery();
  const [imageSrc, setImageSrc] = useState(
    "https://dreamix.eu/blog/wp-content/uploads/2017/05/20150224test644-1508x706_c.jpg"
  );
  const [uploadedImageSrc, setUploadedImageSrc] = useState(
    "http://via.placeholder.com/150"
  );
  // const id = "2e714ce7f6dbb09";
  // const secret = "de15b62e5f912c2006bb81c27a3927a98788aac2";
  const apiUrl = `https://api.imgur.com/oauth2/authorize?client_id=${id}&response_type=token`;
  console.log("url", apiUrl);
  useEffect(() => {
    // console.log("url", url);
    // Axios.get(url).then((rsp) => {
    //   console.log("rsp", rsp);
    // });
  }, []);
  // window.location.href = apiUrl;

  //   curl --location --request POST 'https://api.imgur.com/3/image' \
  // --header 'Authorization: Client-ID {{clientId}}' \
  // --form 'image=R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

  const handleImageUpload = () => {
    if (query.get("access_token")) {
      Axios.post(
        "https://api.imgur.com/3/image?client_id=546c25a59c58ad7",
        {
          image: imageSrc,
        },
        {
          headers: {
            // Authorization: `Bearer ${query.get("access_token")}`,
            Authorization: `Client-ID ${id}`,
          },
        }
      )
        .then((rsp) => {
          console.log(rsp);
          setUploadedImageSrc(rsp.data.data.link);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.error("no access_token", query.get("access_token"));
      window.location.href = apiUrl;
    }
  };
  return (
    <Container className="main">
      <Typography variant="h5">IMGUR</Typography>
      <div>client id: 49eb107b8b51638</div>
      <div>client secret: 4181bec627a849c49008dff3bfce4df95ec8a305</div>
      <div>
        <Grid container spacing={1}>
          <Grid item md={6}>
            <Typography variant="h6">Preview</Typography>
            <div>
              <img src={imageSrc} style={{ maxWidth: "100%" }} />
            </div>
            <div>
              <Input fullWidth defaultValue={imageSrc} />
            </div>

            <div>
              <Button onClick={handleImageUpload}>Upload</Button>
            </div>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h6">Uploaded</Typography>
            <div>
              <img src={uploadedImageSrc} style={{ maxWidth: "100%" }} />
            </div>
            <div>
              <Input fullWidth value={uploadedImageSrc} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
