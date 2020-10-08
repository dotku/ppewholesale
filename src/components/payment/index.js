import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";


export default function Payment({value: valueDefault = 10}) {
  let {value} = useParams();
  let PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

  const createOrder = (data, actions) => {
    return actions.order.create({
        purchase_units: [{
            amount: {
                value
            }
        }]
    });
}

const onApprove  = (data, actions) =>  {
    return actions.order.capture();
}
  
  useEffect(() => {
    console.log(value);

  }, [value])
  return (
    <Container className="main">
      <PayPalButton 
      createOrder={ (data, actions) => createOrder(data, actions) }
      onApprove={ (data, actions) => onApprove(data, actions) }/>
    </Container>
  );
}
