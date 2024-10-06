const express = require('express');
const axios = require('axios');
const router = express.Router();
const {getUser} = require("../database");

require('dotenv').config();
const accessToken = process.env.ACCESS_TOKEN;
const { MongoClient, ObjectId } = require('mongodb');

// Replace the following with your MongoDB connection string
const url = 'mongodb://localhost:27017';  // Adjust based on your setup
const client = new MongoClient(url);


router.post('/getData',
    async (req, res) => {

    }
);




async function polling(phoneNumber) {
  // Retrieve users from your database or API
  const users = await getAllUsers();

  // Retrieve businesses from your database or API
  const businesses = await getAllBusinesses();

  // Initialize an empty array to store successful responses
  let allVerificationDetails = [];

  // Set an interval to perform the polling every minute
  const intervalId = setInterval(async () => {
      for (const business of businesses) {
          for (const user of users) {
              // Array of latitude and longitude variations to check
              const locations = [
                  { latitude: business.latitude, longitude: business.longitude },
                  // { latitude: business.latitude + 0.0005, longitude: business.longitude }, // Adding accuracy to latitude
                  // { latitude: business.latitude, longitude: business.longitude + 0.0005 }, // Adding accuracy to longitude
                  // { latitude: business.latitude - 0.0005, longitude: business.longitude }, // Subtracting accuracy from latitude
                  // { latitude: business.latitude, longitude: business.longitude - 0.0005 }  // Subtracting accuracy from longitude
              ];

              // Track whether any verification was successful
              let verificationSuccess = false;
              let timestamp;

              for (const location of locations) {
                  try {
                      // Make the location verification request
                      const response = await axios.post('https://pplx.azurewebsites.net/api/rapid/v0/location-verification/verify', {
                          device: {
                              phoneNumber: user.phoneNumber
                          },
                          area: {
                              type: 'Circle',
                              location: {
                                  latitude: location.latitude,
                                  longitude: location.longitude
                              },
                              accuracy: 0.0005 // Arbitrary accuracy value
                          },
                          maxAge: 0 // Arbitrary max age value
                      }, {
                          headers: {
                              'Authorization': `Bearer ${user.accessToken}`,
                              'Cache-Control': 'no-cache',
                              'accept': 'application/json',
                              'Content-Type': 'application/json'
                          }
                      });

                      // Check if the verification result is true
                      if (response.data.verificationResult) {
                          timestamp = response.data.lastLocationTime;
                          verificationSuccess = true;
                          break; // Break out of the locations loop
                      }
                  } catch (error) {
                      console.error(`Error processing user ${user.id} at location (${location.latitude}, ${location.longitude}):`, error);
                  }
              }

              // If any verification result was successful, store all location objects
              if (verificationSuccess) {
                  for (const location of locations) {
                      // Create a new object to store in successfulVerifications
                      const verificationDetails = {
                          userId: user._id.toString(),
                          latitude: location.latitude,
                          longitude: location.longitude,
                          business: business.name,
                          category: business.category,
                          timestamp: timestamp,
                      };

                      allVerificationDetails.push(verificationDetails);
                  }

                  // Stop further polling by clearing the interval
                  clearInterval(intervalId);
                  console.log("Verification successful. Stopping polling.");
                  break; // Break out of the users loop
              }
          }
      }

      // Save the results
      if(allVerificationDetails.length > 0) {
        save(allVerificationDetails);
      }
      
  }, 1000); // 60000 milliseconds = 1 minute
}


async function save(data) {
// Database and collection names
const dbName = 'lastTeamStanding';  // Replace with your database name
const collectionName = 'data';       // Replace with your collection name


  try {

    await client.connect();
    console.log('Connected successfully to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertMany(data);


    return;
  } catch (err) {
    console.error('Error fetching user data:', err);
  } finally {
    // Ensure client is closed
    await client.close();
  }


}

async function getAllUsers() {


// Database and collection names
const dbName = 'lastTeamStanding';  // Replace with your database name
const collectionName = 'user';       // Replace with your collection name


  try {

    await client.connect();
    console.log('Connected successfully to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);


    const allUsers = await collection.find({}).toArray();

    return allUsers;
  } catch (err) {
    console.error('Error fetching user data:', err);
  } finally {
    // Ensure client is closed
    await client.close();
  }



}


async function getAllBusinesses() {


    // Database and collection names
    const dbName = 'lastTeamStanding';  // Replace with your database name
    const collectionName = 'partners';       // Replace with your collection name
    
    
      try {
    
        await client.connect();
        console.log('Connected successfully to MongoDB');
    
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
    
    
        const partners = await collection.find({}).toArray();
    
        return partners;
      } catch (err) {
        console.error('Error fetching user data:', err);
      } finally {
        // Ensure client is closed
        await client.close();
      }
    
    
    
    }
module.exports = router;
module.exports = {polling};