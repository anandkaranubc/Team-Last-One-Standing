const express = require('express');
const axios = require('axios');
const router = express.Router();

require('dotenv').config();
const accessToken = process.env.ACCESS_TOKEN;

router.post('/',
    async (req, res) => {
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
            console.log(response.data.verificationResult);
        } catch(error) {
            console.error('Error calling location verification API:', error);
            res.status(500).json({ message: 'Error calling location verification API', error });
        }
    }
);



module.exports = router;