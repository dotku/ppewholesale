import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
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
  Badge,
} from "@material-ui/core";
import {
  Check,
  CheckCircleRounded,
  MoreHoriz as More,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";

function AvatarImage({ photoURL }) {
  return (
    <div
      style={{
        height: "178px",
        width: "100%",
        overflowY: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={photoURL} width="100%" />
    </div>
  );
}

function UserAvatarLibrary({ user }, ref) {
  const { currentUser } = firebase.auth();
  const { providerData } = currentUser;
  const [images, setImages] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [ifDelete, setIfDelete] = useState(false);
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
  useImperativeHandle(ref, () => ({
    genImages,
  }));
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
    const { url, source } = e.currentTarget.dataset;
    setCurrentImage(url);
    if (source === "firebase" && user.photoURL !== url) {
      setIfDelete(true);
    } else {
      setIfDelete(false);
    }
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
                  <AvatarImage photoURL={photoURL} />
                </CardContent>
                <CardActions style={{ justifyContent: "flex-end" }}>
                  {user.photoURL !== photoURL ? (
                    <IconButton
                      onClick={handleMoreClick}
                      data-url={photoURL}
                      data-source={source}
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                    >
                      <More />
                    </IconButton>
                  ) : (
                    <IconButton disabled>
                      <More />
                    </IconButton>
                  )}
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
            {ifDelete && (
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

export default forwardRef(UserAvatarLibrary);
