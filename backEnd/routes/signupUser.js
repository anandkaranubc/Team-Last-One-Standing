const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a MongoClient instance outside the function to reuse the connection
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// POST route for user registration
router.post('/', async (req, res) => {
    const { firstName, lastName, password, phoneNumber } = req.body;


    try {
        // Call the addUser function and wait for the result
        await addUser(firstName, lastName, password, phoneNumber);
        return res.status(200).json({ message: 'User added successfully.' });
    } catch (error) {
        // Catch any errors and return a 500 status
        console.error(error);
        return res.status(500).json({ message: 'Server error.', error });
    }
});

// Function to add a user to the MongoDB database
async function addUser(firstName, lastName, password, phoneNumber) {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log("Connected successfully to MongoDB server");

        const database = client.db("lastTeamStanding");
        const collection = database.collection("user");

        // Placeholder access token (CAMARA token API not implemented yet)
        const accessToken = "29daf7";

        // Insert the user document into the collection
        const user = await collection.insertOne({
            firstName: firstName,
            lastName: lastName,
            password: password,   // Note: You should hash the password in production for security.
            phoneNumber: phoneNumber,
            accessToken: accessToken
        });

        console.log("User added:", user);
        return user;
    } catch (error) {
        console.error("Error adding user:", error);
        throw error;  // Rethrow the error to be handled in the route
    }
}

module.exports = router;
