const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const { response } = require("express");
const strip = require("stripe")(
    "sk_test_51KdNfbBd7ynsOSRY1TW17bPzB9LM19wp9PHfnWfpYvAUQj8xwrv1cU4IKdvNaWVagUYlj6AcwNMceaxgYKE5NZoQ00ssubPPVX"
  );
//API

//APP Config
const app = express();
//Middleware
app.use(cors({origin: true}));
app.use(express.json());
//API route
app.get('/',(request,response) => response.status(200).send('hello world'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved for this amount >>> ", total);
  
    const paymentIntent = await strip.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  
//Listen command
exports.api = functions.https.onRequest(app)