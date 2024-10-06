const fs = require('fs');
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



// async function polling(phoneNumber) {
//   // Retrieve users from your database or API
//   const users = await getAllUsers();

//   // Retrieve businesses from your database or API
//   const businesses = await getAllBusinesses();

//   // Initialize an empty array to store successful responses
//   let allVerificationDetails = [];

//   const intervalFunction = async () => {
//       for (const business of businesses) {
//           for (const user of users) {
//               const location = { latitude: business.latitude, longitude: business.longitude };

//               let verificationSuccess = false;
//               let timestamp;

//               try {
//                   // Perform verification for the primary location only
//                   const response = await axios.post('https://pplx.azurewebsites.net/api/rapid/v0/location-verification/verify', {
//                       device: { phoneNumber: user.phoneNumber },
//                       area: {
//                           type: 'Circle',
//                           location: {
//                               latitude: location.latitude,
//                               longitude: location.longitude
//                           },
//                           accuracy: 0.001
//                       },
//                       maxAge: 0
//                   }, {
//                       headers: {
//                           'Authorization': `Bearer ${user.accessToken}`,
//                           'Cache-Control': 'no-cache',
//                           'accept': 'application/json',
//                           'Content-Type': 'application/json'
//                       }
//                   });

//                   // console.log(response.data);
//                   if (response.data.verificationResult) {
//                       timestamp = response.data.lastLocationTime;
//                       verificationSuccess = true;
//                       // break; // Exit the loop on successful verification
//                   }
//               } catch (error) {
//                   console.error(`Error processing user ${user.id}:`, error);
//               }

//               if (verificationSuccess) {
//                   // Loop over all variations to save them, as required
//                   const locations = [
//                       { latitude: business.latitude, longitude: business.longitude },
//                       // { latitude: business.latitude + 0.0005, longitude: business.longitude },
//                       // { latitude: business.latitude, longitude: business.longitude + 0.0005 },
//                       // { latitude: business.latitude - 0.0005, longitude: business.longitude },
//                       // { latitude: business.latitude, longitude: business.longitude - 0.0005 }
//                   ];

//                   for (const loc of locations) {
//                       const verificationDetails = {
//                           userId: user._id.toString(),
//                           latitude: loc.latitude,
//                           longitude: loc.longitude,
//                           business: business.name,
//                           category: business.category,
//                           timestamp: timestamp,
//                       };

//                       allVerificationDetails.push(verificationDetails);
//                   }

//                   // Stop further polling as soon as a successful verification is found
//                   clearTimeout(timeoutId);
//                   console.log("Verification successful. Stopping polling.");
//                   // return; // Exit all loops if verification successful
//               }
//           }
//       }

//       // Save the results if any were found
//       console.log(allVerificationDetails.length);
//       if (allVerificationDetails.length > 0) {
//           await save(allVerificationDetails);
//       }

//       // Schedule the next polling attempt after 1 minute
//       timeoutId = setTimeout(intervalFunction, 1000);
//   };

//   // Start the initial polling attempt
//   let timeoutId = setTimeout(intervalFunction, 1000);
// }

// PREV CODE - USE IF CURRENT NOT WORKING

// async function polling(phoneNumber) {
//   // Retrieve users from your database or API
//   const users = await getAllUsers();

//   // Retrieve businesses from your database or API
//   const businesses = await getAllBusinesses();

//   // Initialize an empty array to store successful responses
//   let allVerificationDetails = [];

//   // Define the log file path
//   const logFilePath = './api_logs.txt';

//   const intervalFunction = async () => {
//       for (const business of businesses) {
//           for (const user of users) {
//               const location = { latitude: business.latitude, longitude: business.longitude };

//               let verificationSuccess = false;
//               let timestamp;

//               try {
//                   // Perform verification for the primary location only
//                   const response = await axios.post('https://pplx.azurewebsites.net/api/rapid/v0/location-verification/verify', {
//                       device: { phoneNumber: user.phoneNumber },
//                       area: {
//                           type: 'Circle',
//                           location: {
//                               latitude: location.latitude,
//                               longitude: location.longitude
//                           },
//                           accuracy: 0.001
//                       },
//                       maxAge: 0
//                   }, {
//                       headers: {
//                           'Authorization': `Bearer ${user.accessToken}`,
//                           'Cache-Control': 'no-cache',
//                           'accept': 'application/json',
//                           'Content-Type': 'application/json'
//                       }
//                   });

//                   // Log the API response to a file
//                   const logEntry = `User ID: ${user.id}, Business: ${business.name}, Response: ${JSON.stringify(response.data)}\n`;
//                   fs.appendFileSync(logFilePath, logEntry);

//                   if (response.data.verificationResult) {
//                       timestamp = response.data.lastLocationTime;
//                       verificationSuccess = true;
//                   }
//               } catch (error) {
//                   // Log the error to a file
//                   const logEntry = `User ID: ${user.id}, Business: ${business.name}, Error: ${error.message}\n`;
//                   fs.appendFileSync(logFilePath, logEntry);

//                   console.error(`Error processing user ${user.id}:`, error);
//               }

//               if (verificationSuccess) {
//                   // Loop over all variations to save them, as required
//                   const locations = [
//                       { latitude: business.latitude, longitude: business.longitude },
//                   ];

//                   for (const loc of locations) {
//                       const verificationDetails = {
//                           userId: user._id.toString(),
//                           latitude: loc.latitude,
//                           longitude: loc.longitude,
//                           business: business.name,
//                           category: business.category,
//                           timestamp: timestamp,
//                       };

//                       allVerificationDetails.push(verificationDetails);
//                   }

//                   // Stop further polling as soon as a successful verification is found
//                   clearTimeout(timeoutId);
//                   console.log("Verification successful. Stopping polling.");
//                   break;
//               }
//               if (verificationSuccess) {
//                 break;
//               }
//           }
//       }

//       // Save the results if any were found
//       console.log(allVerificationDetails.length);
//       if (allVerificationDetails.length > 0) {
//           await save(allVerificationDetails);
//       }

//       // Schedule the next polling attempt after 1 minute
//       timeoutId = setTimeout(intervalFunction, 1000);
//   };

//   // Start the initial polling attempt
//   let timeoutId = setTimeout(intervalFunction, 1000);
// }

// with json logging
async function polling() {
  // Retrieve users from your database or API
  const users = await getAllUsers();

  // Retrieve businesses from your database or API
  const businesses = await getAllBusinesses();

  // Initialize an empty array to store successful responses
  let allVerificationDetails = [];

  // Define the log file path
  const logFilePath = './api_logs.json';

  // Initialize the log file with an empty array if it doesn't exist
  if (!fs.existsSync(logFilePath)) {
      fs.writeFileSync(logFilePath, JSON.stringify([]));
  }

  // Flag to control polling
  let isPolling = true;

  const intervalFunction = async () => {
      if (!isPolling) return; // Prevent further execution if polling is stopped

      for (const business of businesses) {
          for (const user of users) {
              const location = { latitude: business.latitude, longitude: business.longitude };

              let verificationSuccess = false;
              let timestamp;

              try {
                  // Perform verification for the primary location only
                  const response = await axios.post('https://pplx.azurewebsites.net/api/rapid/v0/location-verification/verify', {
                      device: { phoneNumber: user.phoneNumber },
                      area: {
                          type: 'Circle',
                          location: {
                              latitude: location.latitude,
                              longitude: location.longitude
                          },
                          accuracy: 0.001
                      },
                      maxAge: 0
                  }, {
                      headers: {
                          'Authorization': `Bearer ${user.accessToken}`,
                          'Cache-Control': 'no-cache',
                          'accept': 'application/json',
                          'Content-Type': 'application/json'
                      }
                  });

                  // Append the API response to the JSON log file
                  const logEntry = {
                      userId: user.id,
                      business: business.name,
                      response: response.data,
                      timestamp: new Date().toISOString()
                  };
                  const logs = JSON.parse(fs.readFileSync(logFilePath));
                  logs.push(logEntry);
                  fs.writeFileSync(logFilePath, JSON.stringify(logs, null, 2)); // Pretty-print JSON

                  if (response.data.verificationResult) {
                      timestamp = response.data.lastLocationTime;
                      verificationSuccess = true;
                  }
              } catch (error) {
                  // Append the error to the JSON log file
                  const logEntry = {
                      userId: user.id,
                      business: business.name,
                      error: error.message,
                      timestamp: new Date().toISOString()
                  };
                  const logs = JSON.parse(fs.readFileSync(logFilePath));
                  logs.push(logEntry);
                  fs.writeFileSync(logFilePath, JSON.stringify(logs, null, 2)); // Pretty-print JSON

                  console.error(`Error processing user ${user.id}:`, error);
              }

              if (verificationSuccess) {
                  // Loop over all variations to save them, as required
                  const locations = [
                      { latitude: business.latitude, longitude: business.longitude },
                  ];

                  for (const loc of locations) {
                      const verificationDetails = {
                          userId: user._id.toString(),
                          latitude: loc.latitude,
                          longitude: loc.longitude,
                          business: business.name,
                          category: business.category,
                          timestamp: timestamp,
                      };

                      allVerificationDetails.push(verificationDetails);
                  }

                  // Stop further polling as soon as a successful verification is found
                  isPolling = false;
                  clearTimeout(timeoutId);
                  console.log("Verification successful. Stopping polling.");
                  break;
              }
          }
          if (!isPolling) break; // Exit the outer loop as well
      }

      // Save the results if any were found
      console.log(allVerificationDetails.length);
      if (allVerificationDetails.length > 0) {
          await save(allVerificationDetails);
      }

      // Schedule the next polling attempt after 1 minute
      if (isPolling) {
          timeoutId = setTimeout(intervalFunction, 1000);
      }
  };

  // Start the initial polling attempt
  let timeoutId = setTimeout(intervalFunction, 1000);
}

// use latest version #001 
// async function polling(phoneNumber) {
//   // Retrieve users from your database or API
//   const users = await getAllUsers();

//   // Retrieve businesses from your database or API
//   const businesses = await getAllBusinesses();

//   // Initialize an empty array to store successful responses
//   let allVerificationDetails = [];

//   // Define the log file path
//   const logFilePath = './api_logs.txt';

//   // Flag to control polling
//   let isPolling = true;

//   const intervalFunction = async () => {
//       if (!isPolling) return; // Prevent further execution if polling is stopped

//       for (const business of businesses) {
//           for (const user of users) {
//               const location = { latitude: business.latitude, longitude: business.longitude };

//               let verificationSuccess = false;
//               let timestamp;

//               try {
//                   // Perform verification for the primary location only
//                   const response = await axios.post('https://pplx.azurewebsites.net/api/rapid/v0/location-verification/verify', {
//                       device: { phoneNumber: user.phoneNumber },
//                       area: {
//                           type: 'Circle',
//                           location: {
//                               latitude: location.latitude,
//                               longitude: location.longitude
//                           },
//                           accuracy: 0.001
//                       },
//                       maxAge: 0
//                   }, {
//                       headers: {
//                           'Authorization': `Bearer ${user.accessToken}`,
//                           'Cache-Control': 'no-cache',
//                           'accept': 'application/json',
//                           'Content-Type': 'application/json'
//                       }
//                   });

//                   // Log the API response to a file
//                   const logEntry = `User ID: ${user.id}, Business: ${business.name}, Response: ${JSON.stringify(response.data)}\n`;
//                   fs.appendFileSync(logFilePath, logEntry);

//                   if (response.data.verificationResult) {
//                       timestamp = response.data.lastLocationTime;
//                       verificationSuccess = true;
//                   }
//               } catch (error) {
//                   // Log the error to a file
//                   const logEntry = `User ID: ${user.id}, Business: ${business.name}, Error: ${error.message}\n`;
//                   fs.appendFileSync(logFilePath, logEntry);

//                   console.error(`Error processing user ${user.id}:`, error);
//               }

//               if (verificationSuccess) {
//                   // Loop over all variations to save them, as required
//                   const locations = [
//                       { latitude: business.latitude, longitude: business.longitude },
//                   ];

//                   for (const loc of locations) {
//                       const verificationDetails = {
//                           userId: user._id.toString(),
//                           latitude: loc.latitude,
//                           longitude: loc.longitude,
//                           business: business.name,
//                           category: business.category,
//                           timestamp: timestamp,
//                       };

//                       allVerificationDetails.push(verificationDetails);
//                   }

//                   // Stop further polling as soon as a successful verification is found
//                   isPolling = false;
//                   clearTimeout(timeoutId);
//                   console.log("Verification successful. Stopping polling.");
//                   break;
//               }
//           }
//           if (!isPolling) break; // Exit the outer loop as well
//       }

//       // Save the results if any were found
//       console.log(allVerificationDetails.length);
//       if (allVerificationDetails.length > 0) {
//           await save(allVerificationDetails);
//       }

//       // Schedule the next polling attempt after 1 minute
//       if (isPolling) {
//           timeoutId = setTimeout(intervalFunction, 1000);
//       }
//   };

//   // Start the initial polling attempt
//   let timeoutId = setTimeout(intervalFunction, 1000);
// }

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