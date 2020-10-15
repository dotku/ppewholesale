import { Container, Typography, Box } from "@material-ui/core";
import React, { useState } from "react";

/**
 * This handler retrieves the images from the clipboard as a blob and returns it in a callback.
 *
 * @param pasteEvent
 * @param callback
 */
function retrieveImageFromClipboardAsBlob(pasteEvent, callback) {
  if (pasteEvent.clipboardData === false) {
    if (typeof callback === "function") {
      callback(undefined);
    }
  }

  var items = pasteEvent.clipboardData.items;

  if (items === undefined) {
    if (typeof callback === "function") {
      callback(undefined);
    }
  }

  if (items) {
    for (var i = 0; i < items.length; i++) {
      // Skip content if not image
      if (items[i].type.indexOf("image") === -1) continue;
      // Retrieve image on clipboard as blob
      var blob = items[i].getAsFile();

      if (typeof callback === "function") {
        callback(blob);
      }
    }
  }
}

export default function Clipboard() {
  const [src, setSrc] = useState();
  const handlePaste = (e) => {
    console.log(e.clipboardData.items);
    Object.values(e.clipboardData.items).forEach((item) => {
      console.log(item);
    });
    retrieveImageFromClipboardAsBlob(e, (imageBlob) => {
      // If there's an image, display it in the canvas
      if (imageBlob) {
        var canvas = document.getElementById("mycanvas");
        var ctx = canvas.getContext("2d");

        // Create an image to render the blob on the canvas
        var img = new Image();

        // Once the image loads, render the img on the canvas
        img.onload = function () {
          // Update dimensions of the canvas with the dimensions of the image
          canvas.width = this.width;
          canvas.height = this.height;

          // Draw the image
          ctx.drawImage(img, 0, 0);
        };

        // Crossbrowser support for URL
        var URLObj = window.URL || window.webkitURL;

        // Creates a DOMString containing a URL representing the object given in the parameter
        // namely the original Blob
        setSrc(URLObj.createObjectURL(imageBlob));
      }
    });
  };
  return (
    <Container className="main">
      <Typography variant="h2">Clipboard</Typography>
      {!src ? (
        <Box
          style={{ border: "dashed 1px gray", padding: "20px" }}
          onPaste={handlePaste}
        >
          Past Area
        </Box>
      ) : (
        <img src={src} />
      )}
      <canvas id="mycanvas" />
    </Container>
  );
}
