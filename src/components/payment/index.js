import { Container } from "@material-ui/core";
import React, { useEffect } from "react";

export default function Payment({value = 10}) {
  function initPayPalButton() {
    window.paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'pay',
        
      },
  
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"USD","value": value}}]
        });
      },
  
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
      },
  
      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container');
  }
  useEffect(() => {
    initPayPalButton();
  }, [])
  
  return (
    <Container className="main">
    <div id="smart-button-container">
      <div style={{textAlign: "center"}}>
        <div id="paypal-button-container"></div>
      </div>
    </div>
    </Container>
  );
}
