import axios from "axios";

export function genPostFilesUpload(files) {
  console.log("files", files);
  // files.map((file) => this.genPostFileUpload(file));
  return (dispatch) => {
    for (let i = 0; i < files.length; i++) {
      _genPostFileUpload(dispatch, files.item(i));
    }
  };
}

function _genPostFileUpload(dispatch, file) {
  const data = new FormData();
  data.append("image", file);
  axios
    .post(
      `https://api.imgur.com/3/image?client_id=${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
      data,
      {
        headers: {
          // Authorization: `Bearer ${query.get("access_token")}`,
          Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
        },
      }
    )
    .then((rsp) => {
      console.log("rsp", rsp);
      dispatch({ type: "FILES_ADD", payload: rsp.data });
    });
}

export function genPostFileUpload(file) {
  return (dispatch) => {
    _genPostFileUpload(dispatch, file);
  };
}
