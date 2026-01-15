const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDatabase = async () => {
    if (database) {
        console.log('Database already initialized');
        return database;
    }   

    const client = await MongoClient.connect(process.env.MONGO_DB_CONNECTION_STRING);

    database = client.db('CSE341');
    
    return database;
}

module.exports = { initDatabase };