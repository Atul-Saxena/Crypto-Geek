import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;
const clientOptions = { serverApi: { version: '1', strict: false, deprecationErrors: true } };

async function connectDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.error(error);
  }
}

export default connectDB;
