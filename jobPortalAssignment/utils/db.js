const mongoose = require('mongoose');

const mongodbURL = "mongodb://localhost:27017/jobportalAssignment";

mongoose.connect(mongodbURL);

mongoose.connection.on('connected', () => {
    console.log('Successfully connected to DB');
});

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error:', error);
});