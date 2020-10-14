import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { MoreHoriz as More } from "@material-ui/icons";
import { useDispatch } from "react-redux";

export default function UserAvatarLibrary({ user }) {
  const { currentUser } = firebase.auth();
  const { providerData } = currentUser;
  const [images, setImages] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [currentSource, setCurrentSource] = useState("");
  const storage = firebase.storage();
  const dispatch = useDispatch();

  useEffect(() => {
    genImages();
  }, []);
  const getImagesFromProviders = () => {
    return providerData.map(({ photoURL, providerId }) => ({
      photoURL,
      source: providerId,
    }));
  };
  const genImages = async () => {
    const storageRef = storage.ref();
    const res = await storageRef.child(`users/${user.uid}/avatars`).listAll();
    const newImages = res.items.map(async (item) => {
      const url = await item.getDownloadURL();
      return url;
    });

    await Promise.all(newImages).then((values) => {
      setImages([
        ...values.map((photoURL) => ({
          photoURL,
          source: "firebase",
        })),
        ...getImagesFromProviders(),
      ]);
    });
  };
  const handleMoreClick = (e) => {
    setAnchorEl(e.currentTarget);
    const { image, source } = e.currentTarget.dataset;
    setCurrentImage(image);
    setCurrentSource(source);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const handleAvatarSet = () => {
    currentUser
      .updateProfile({
        photoURL: currentImage,
      })
      .then(() => {
        handleClose();
        dispatch({ type: "UPDATE_USER", payload: { photoURL: currentImage } });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleAvatarDelete = async () => {
    const imageRef = storage.refFromURL(currentImage);
    imageRef
      .delete()
      .then(() => {
        handleClose();
        genImages();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <Box>
      <Typography variant="h6">Avatars Library</Typography>
      {images.length ? (
        <Grid container>
          {images.map(({ photoURL, source }, idx) => (
            <Grid item md={3} key={idx}>
              <Card style={{ margin: "8px" }} variant="outlined">
                <CardContent>
                  <div
                    style={{
                      height: "178px",
                      overflowY: "hidden",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={photoURL} width="100%" />
                  </div>
                </CardContent>
                <CardActions style={{ justifyContent: "flex-end" }}>
                  <IconButton
                    onClick={handleMoreClick}
                    data-image={photoURL}
                    data-source={source}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                  >
                    <More />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
          <Menu
            id={`simple-menu`}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleAvatarSet}>Set As Profile Avatar</MenuItem>
            {currentSource === "firebase" && (
              <MenuItem onClick={handleAvatarDelete}>Delete</MenuItem>
            )}
          </Menu>
        </Grid>
      ) : (
        <div>No Content</div>
      )}
    </Box>
  );
}
