const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const axios = require('axios');  // Use axios for API calls

// MongoDB connection URI
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// POST route for user login
router.post('/', async (req, res) => {

    console.dir(req.body);

    const phoneNumber = Number(req.body.phoneNumber);
    const password = req.body.password
    try {
        await client.connect();
        const db = client.db('lastTeamStanding');
        const collection = db.collection('user');
        console.dir("D32S");
        // Find user by phone number
        const user = await collection.findOne({ phoneNumber });
        console.dir("DS32");
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Check if password matches
        if (user.password !== password) {
            return res.status(401).json({ message: 'Incorrect password.' });
        }

        // Get access token from the user record


        console.dir("DS");
        // Call verifyPhoneNumber function to verify phone number
        const isVerified = await verifyPhoneNumber(phoneNumber);
console.log(isVerified);
        if (!isVerified) {
            return res.status(401).json({ message: 'Phone number verification failed.' });
        }

        // If everything is verified, return success
        return res.status(200).json({ message: 'Login successful.' });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server error.', error });
    } finally {
        await client.close();  // Close the MongoDB connection
    }
});

// Function to verify phone number using the Number Verification API
async function verifyPhoneNumber(phoneNumber,res) {

    try {
        const response = await axios.post('https://pplx.azurewebsites.net/api/rapid/v0/number-verification/verify', {
          phoneNumber: phoneNumber
        }, {
          headers: {
            'Authorization': "Bearer 29daf7",
            'Cache-Control': 'no-cache',
            'accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });


return true;
    } catch(error) {


        return false;
    }

    // try {
    //     const response = await axios.post('http://api.example.com/number-verification/v1/verify', {
    //         phoneNumber: phoneNumber
    //     }, {
    //         headers: {
    //             'Authorization': 'Bearer 29daf7',
    //             'Content-Type': 'application/json'
    //         }
    //     });

    //     // Return whether the phone number was verified or not
    //     return response.data.devicePhoneNumberVerified;
    // } catch (error) {
    //     console.error('Error during phone number verification:', error);
    //     return false;  // If there is an error, return false
    // }
}

module.exports = router;
