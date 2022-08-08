import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Paypal() {

  const options = {
    "client-id": "AfoUfcZJm9xH7qY-t-FeXv3sI1090_xFp7PEucMpOHgBnsCCuIscyJ4TEXmWLh1lIuC1McDVN-nt2vA-" 
  }

  const createOrder = (data, actions) => {
    console.log("data", data)
    console.log("actions", actions)

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "10",
          },
        },
      ],
    });
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    });
  }

  return (
    <PayPalScriptProvider options={options}>
      <PayPalButtons 
        style={{ layout: "horizontal" }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  )
}

export default Paypal