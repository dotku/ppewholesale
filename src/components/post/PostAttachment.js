import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";

function PostAttachment() {
  const [files, setFiles] = useState([]);
  const handleChange = (files) => {
    setFiles(files);
  };
  return <DropzoneArea onChange={handleChange} />;
}

export default PostAttachment;
