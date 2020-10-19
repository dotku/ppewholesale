import { TextField } from "@material-ui/core";
import React from "react";
import { getNoCircleStringify } from "../common/utility";

export default function UserProfileUpdateForm(props) {
  const { email, metadata } = props;
  console.log("user props", JSON.parse(getNoCircleStringify(props)));
  return (
    <form>
      <div>
        <TextField label="Email" value={email} style={{ margin: "8px" }} />
      </div>
      <div>
        <TextField
          label="Last Login"
          value={new Date(metadata.lastSignInTime).toLocaleDateString()}
          InputProps={{ readOnly: true }}
          style={{ margin: "8px" }}
        />
      </div>
      <div>
        <TextField
          label="Registered Day"
          value={new Date(metadata.creationTime).toLocaleDateString()}
          InputProps={{ readOnly: true }}
          style={{ margin: "8px" }}
        />
      </div>
    </form>
  );
}
