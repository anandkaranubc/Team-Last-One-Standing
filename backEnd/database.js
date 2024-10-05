const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const Locs = [
    {
      name: "Tim Horton's",
      latitude: 49.26908,
      longitude: -123.24872,
      category: "Food"
      
    },
    {
      name: "Starbucks",
      latitude: 49.26545,
      longitude: -123.24991,
      category: "Food"

    },
    {
      name: "LSK",
      latitude: 49.26908,
      longitude: -123.25514,
      category: "Study"

    },
    {
      name: "ESB",
      latitude: 49.26335,
      longitude: -123.24984,
      category: "Food"

    },
    {
      name: "ICICS",
      latitude: 49.26118,
      longitude: -123.24918,
      category: "Food"

    },
    {
      name: "Ponderosa",
      latitude: 49.26417,
      longitude: -123.25583,
      category: "Home"

    },
  ];

async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        // Establish and verify connection
        console.log("Connected successfully to MongoDB server");
        
        const database = client.db("lastTeamStanding");
        const collection = database.collection("partners");

        // Insert one document
        const result = await collection.insertMany(Locs);
    } finally {
        // Close the connection
        await client.close();
    }
}
run().catch(console.dir);

module.exports = {run};

