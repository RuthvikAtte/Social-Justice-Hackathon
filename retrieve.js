const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'https://us-east-1.aws.data.mongodb-api.com/app/data-bnaaz/endpoint/data/v1/action/find';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongo() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongo();
