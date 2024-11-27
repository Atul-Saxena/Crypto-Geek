import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

export default { port, mongoURI };