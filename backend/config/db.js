import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const uri = 'mongodb://localhost:27017'

if (!uri) {
    console.error('Mongo URI is not defined. Please set MONGO_URI environment variable.');
    process.exit(1);
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection error:', err));


export default ConnectDB;