
import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
 
const PayPalButton = ({ totalAmount }) => {
  const [paymentDetails, setPaymentDetails] = useState(null);
 
  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      setPaymentDetails(details);
    });
  };
 
  return (
    <div>
      <PayPalScriptProvider options={{ "client-id": "AZRimq2CpfwpOUifCkn3CUpj0p4oGGY7qimIHAlP7cH1Rs7B_S022yon5C05uzvIKdvhi9mXwuWKbnmj" }}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalAmount, // Set the total amount from your cart
                  },
                },
              ],
            });
          }}
          onApprove={handleApprove}
        />
      </PayPalScriptProvider>
 
      {paymentDetails && (
        <div className="payment-details">
          <h3>Payment Successful!</h3>
          <p>Payment ID: {paymentDetails.id}</p>
          <p>Payer ID: {paymentDetails.payer.payer_id}</p>
          <p>Payment Amount: ₹{paymentDetails.purchase_units[0].amount.value}</p>
          <p>Payment Status: {paymentDetails.status}</p>
        </div>
      )}
    </div>
  );
};
 
export default PayPalButton;
 