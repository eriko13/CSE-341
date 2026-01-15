const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

// Declares the database variable
let database;

// Initializes the database
const initDatabase = async () => {
    // Checks if the database is already initialized
    if (database) {
        console.log('Database already initialized');
        return database;
    }   

    // Connects to the database
    const client = await MongoClient.connect(process.env.MONGO_DB_CONNECTION_STRING);

    // Sets the database to the CSE341 database
    database = client.db('CSE341');
    
    return database;
}

module.exports = { initDatabase };