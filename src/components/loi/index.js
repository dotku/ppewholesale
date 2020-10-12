import {
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  TextField,
  Button,
} from "@material-ui/core";
import moment from "moment";
import { Business, DateRange } from "@material-ui/icons";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function LOI() {
  const defaultBody =
    "We are here looking for Exam Nitrile Gloves with the following spec:\n" +
    "\n" +
    "Total Quantity:……………………………………(Boxes) Which Divide into the Following Sizes:\n" +
    "Small……………( % ) Medium……………( % ) Large……………( % ) XL……………( % )\n" +
    "Final Price Per Box Agreed Between Buyer and Agent: …................(USD)\n" +
    "Total Order Amount……………………………………(USD)\n" +
    "Advance Payment by T/T of Total Order Amount…………….…………………………………( % )\n" +
    "Advance Payment by L/C of Total Order Amount…………….……..…….( % )\n" +
    "Proposed Term of Payment:…………………………………………...………………………………….\n" +
    "………………………………………………………………………………………………………………..\n" +
    "Proposed Delivery Schedule: ………………………………………….………………………………….\n" +
    "………………………………………………………………………………………………………………..\n" +
    "Shipping Method:  Via Air  Via Ocean\n" +
    "Buying/Selling Term:  FOB  CIF  EXW\n" +
    "Certification(s) required (check only necessary): \n" +
    " FDA Registration \n" +
    " 510(k) \n" +
    " CE \n" +
    " EN455\n" +
    " (Others, specify)";
  const [signitureId, setSignatureId] = useState(uuid());
  return (
    <Container className="main">
      <div>
        <TextField
          multiline
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Business />
              </InputAdornment>
            ),
          }}
          label="From"
          defaultValue={"Company Name A\nAddress"}
          style={{ margin: "8px" }}
        />
      </div>
      <div>
        <TextField
          multiline
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Business />
              </InputAdornment>
            ),
          }}
          label="To"
          defaultValue={"Company Name B\nAddress"}
          style={{ margin: "8px" }}
        />
      </div>
      <div>
        <TextField
          style={{ margin: "8px" }}
          multiline
          fullWidth
          defaultValue={defaultBody}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <TextField
          label="Signature"
          style={{ margin: "8px" }}
          inputProps={{
            style: { fontFamily: "cursive", fontSize: "1.5em" },
          }}
          onChange={() => {
            setSignatureId(uuid());
          }}
          multiline
          defaultValue={"First Last"}
          helperText={signitureId}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <FormControl style={{ margin: "8px" }}>
          <InputLabel>Date</InputLabel>
          <Input defaultValue={moment().format("L")}></Input>
        </FormControl>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          className="no-print"
          onClick={() => {
            window.print();
          }}
          variant="outlined"
          color="primary"
        >
          Print PDF
        </Button>
      </div>
    </Container>
  );
}
