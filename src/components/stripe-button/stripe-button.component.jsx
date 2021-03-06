import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablKey = 'pk_test_51I6yTMK5ugPtyQBbBnDBAmpUMf1HnegmxT4PemlyjAVmDnifEaniVyLp7AZkNkGYtFuUJkZg2Vb9ciaD0zS9KGRm00sPsZZwjz';


    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey={publishablKey}
        />
    );
};

export default StripeCheckoutButton;
