// const express = require("express");
// var axios = require('axios');
// var data = JSON.stringify({
//     "collection": "Data",
//     "database": "Social_Justice",
//     "dataSource": "Cluster0",
// });
            
// var config = {
//     method: 'post',
//     url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-bnaaz/endpoint/data/v1/action/find',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Request-Headers': '*',
//       'api-key': 'qYzSBBEPTC9ySRtQvh5zIIh5udSoWDDCySHbNcbCnoRSADehUTGLBlkMkAJBM32M',
//     },
//     data: data
// };
// var dataSend = null       
// axios(config)
//     .then(function (response) {
//         dataSend = JSON.stringify(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// const PORT = process.env.PORT || 3001;

// const app = express();

// app.get("/api", (req, res) => {
//     res.json({message: dataSend});
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });



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