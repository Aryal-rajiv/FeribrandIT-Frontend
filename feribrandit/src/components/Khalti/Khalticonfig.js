import myKey from './Khaltikey.js';
import axios from 'axios';


const config = {
    // replace this key with yours
    "publicKey": myKey.publicTestKey,
    "productIdentity": "123",
    "productName": "FeribrandIt",
    "productUrl": "http://localhost:3000",
    "eventHandler": {
        onSuccess (payload) {
            const axios = require(axios);

            let data = {
              "token": payload.token,
              "amount": payload.amount
            };
            
            axios
            .get('https://meslaforum.herokuapp.com/khal...{data.token}/${data.amount}/${myKey.secretKey')
            .then(response => {
              console.log(response.data);
              alert("The transaction is sucessful");
            })
            .catch(error => {
              console.log(error);
            });
            console.log(payload);
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};
export default config;