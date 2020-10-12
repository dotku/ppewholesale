import { Dialog, DialogTitle } from "@material-ui/core";
import React, { useEffect } from "react";

export default function LoginDialog({ open, onClose }) {
  // const ui = new firebaseui.auth.AuthUI(firebase.auth());
  useEffect(() => {
    // firebase.initializeApp(firebaseConfig);
    // ui.start("#firebaseui-auth-container", {
    //   signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    //   // Other config options...
    // });
  });
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login</DialogTitle>
      <div id="#firebaseui-auth-container" />
      <div>Login</div>
    </Dialog>
  );
}
