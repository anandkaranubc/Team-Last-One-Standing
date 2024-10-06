const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const {polling} = require('./routes/getData')
const cors = require('cors');

dotenv.config(); // Load environment variables

const locationVerificationRoutes = require('./routes/locationVerification');
const numberVerificationRoutes = require('./routes/numberVerification');
const signupUserRoutes = require('./routes/signupUser');
const loginUserRoutes = require('./routes/loginUser');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
// const uri = "mongodb://localhost:27017";

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const user = {
//     phone: 14372314302,
//     consent: false,
//     coordinates: []
// };

// async function run() {
//     try {
//         // Connect the client to the server
//         await client.connect();
//         console.log("Connected successfully to MongoDB server");

//         const database = client.db("lastTeamStanding");
//         const collection = database.collection("user");

//         // Insert one document
//         await collection.insertOne(user);
//     } catch (error) {
//         console.error('Error in run():', error);
//     }
// }

// async function getUser(phoneNumber) {
//     try {
//         if (!client.isConnected()) {
//             await client.connect(); // Ensure the client is connected
//             console.log("Connected successfully to MongoDB server for getUser()");
//         }

//         const database = client.db("lastTeamStanding");
//         const collection = database.collection("user");
//         console.log(phoneNumber);

//         // Find one document
//         const foundUser = await collection.findOne({ phone: phoneNumber }); // Changed 'phoneNumber' to 'phone'
//         console.log(foundUser);
//         return foundUser;
//     } catch (error) {
//         console.error('Error in getUser():', error);
//     }
// }

// Define routes
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})
app.use('/api/location-verification', locationVerificationRoutes);
app.use('/api/number-verification', numberVerificationRoutes);
app.use('/api/signupUser', signupUserRoutes);
app.use('/api/loginUser', loginUserRoutes);

// Start the server
 app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

  await polling();
});

// Make sure to close the client when exiting
process.on('SIGINT', async () => {
    
    console.log("MongoDB connection closed.");
    process.exit(0);
});


