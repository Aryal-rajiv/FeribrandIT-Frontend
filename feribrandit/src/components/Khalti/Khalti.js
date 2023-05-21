import React from 'react';
import KhaltiCheckout from "khalti-checkout-web";
import  config from './Khalticonfig.js';

export default function Khalti() {
    let checkout = new KhaltiCheckout(config);
  return (

    <div>
       <button onClick={() =>  checkout.show({amount: 1099}) }>KhaltiPay</button>
    </div>
  )
}
