import React from "react";
import { TextField, Typography, Box } from "@material-ui/core";
import { emailHelpText } from "./listAdd";
import { useSelector } from "react-redux";

export function ContactSection({
  disableEmail,
  disablePhoneNumber,
  emailError,
  formData,
  handleChange,
}) {
  const user = useSelector(({ auth }) => auth);

  return (
    <Box>
      <Typography variant="subtitle1">Contact</Typography>
      <div>
        {disableEmail ? (
          <TextField
            variant="filled"
            label="Email"
            value={formData["email"]}
            InputProps={{ readOnly: true }}
          />
        ) : (
          <TextField
            label="Email"
            error={emailError}
            defaultValue={localStorage.getItem("email") || ""}
            onChange={handleChange("email")}
            helperText={
              emailError
                ? emailHelpText.NOLOGIN_EXITED_EMAIL
                : emailHelpText.NOLOGIN_DEFAULT
            }
          />
        )}
      </div>
      <div>
        {disablePhoneNumber ? (
          <TextField
            variant="filled"
            label="Phone Number"
            value={formData["phoneNumber"]}
            InputProps={{ readOnly: true }}
          />
        ) : (
          <TextField
            label="Phone Number"
            error={emailError}
            defaultValue={localStorage.getItem("email") || ""}
            onChange={handleChange("email")}
            helperText={
              emailError
                ? emailHelpText.NOLOGIN_EXITED_EMAIL
                : emailHelpText.NOLOGIN_DEFAULT
            }
          />
        )}
      </div>
    </Box>
  );
}
