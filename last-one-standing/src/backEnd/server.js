const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());

app.post('api/location-verification', async (req, res) => {
    const {phoneNumber, latitude, longitude, accuracy, maxAge} = req.body;

    try {
        const response = await axios.post('https://pplx.azurewebsites.net/api/rapid/v0/location-verification/verify', {
          device: {
            phoneNumber: phoneNumber
          },
          area: {
            type: 'Circle',
            location: {
              latitude: latitude,
              longitude: longitude
            },
            accuracy: accuracy
          },
          maxAge: maxAge
        }, {
          headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Add your access token here
            'Cache-Control': 'no-cache',
            'accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
});

