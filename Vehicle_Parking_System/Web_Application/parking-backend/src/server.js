const express = require('express');
const mongoose = require('mongoose');
const router = require('./router'); // Assuming you have your routes defined here

const app = express();
const cors = require('cors');

const port = 3001;
const host = 'localhost';

app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = 'mongodb+srv://keshan:keshan123@cluster0.juyqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Function to establish connection to MongoDB
const connect = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

// Call the connect function to establish the connection
connect();

// Start the server
const server = app.listen(port, host, () => {
    const { address, port } = server.address(); // Access address and port from the server object
    console.log(`Node server is listening at http://${address}:${port}`);
});

// Use the router for API endpoints
app.use('/api', router);
