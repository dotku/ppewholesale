import { Container, Grid, Input, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";

export default function Payment({ value: valueDefault = 10 }) {
  let { value } = useParams();
  let PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
  const [money, setMoney] = useState(value);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            money,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <Container className="main">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "100px" }}>
          <div style={{ marginBottom: "10px" }}>
            <TextField
              value={money}
              autoFocus
              label="Amount"
              variant="outlined"
            />
          </div>
          <div>
            <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
