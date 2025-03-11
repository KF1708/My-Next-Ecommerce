"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalPayment({ amount }) {
  const initialOptions = {
    clientId:
      "AQgpKyXK9x__XWgq1_g83M5KvbgCdCP4vHWVcSnJZoHU-LppNI9DwA1AHsqA1Ad53VFqGPxZa8-coDlE",
    // Add other options as needed
  };
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount || "10.00", // Replace with the actual amount
          },
        },
      ],
    });
  };
  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons createOrder={createOrder} />
      </PayPalScriptProvider>
    </div>
  );
}
