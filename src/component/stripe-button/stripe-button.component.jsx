import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IzGh7LnCGG7fDgfuDtMw4menVPXqGAhhFU2VLBckOoXnE0hpWWhSL8nMesMlpha7lzKWGrAyVtcEPR4UNUoRfBB00P4pGGi7C'
    const onToken = token =>{

        alert('Payment Successful ');
    }


    return (
        <StripeCheckout
            label='Pay Now'
            name='Fun Shop Ltd.'
            billingAddress
            shipingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />

    );
};

export default StripeCheckoutButton;