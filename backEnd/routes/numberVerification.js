const express = require('express');
const axios = require('axios');
const router = express.Router();

require('dotenv').config();
const accessToken = process.env.ACCESS_TOKEN;

router.post('/',
    async (req, res) => {
        const {phoneNumber} = req.body;
    
        try {
            const response = await axios.post('https://pplx.azurewebsites.net/api/rapid/v0/number-verification/verify', {
              phoneNumber: phoneNumber
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
        } catch(error) {
            console.error('Error calling location verification API:', error);
            res.status(500).json({ message: 'Error calling location verification API', error });
        }
    }
);

module.exports = router;