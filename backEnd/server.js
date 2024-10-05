const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const { run} = require("./database");


const PORT = 3000;

require('dotenv').config();
const accessToken = "29daf7";


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
            'Authorization': `Bearer ${accessToken}`,
            'Cache-Control': 'no-cache',
            'accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        res.status(200).json(response.data);
        console.log(response.data);
    } catch {
        console.error('Error calling location verification API:', error);
        res.status(500).json({ message: 'Error calling location verification API', error });
    }
});
run();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
