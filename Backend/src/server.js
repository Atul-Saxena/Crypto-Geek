import app from './app.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
// import {port} from './config/env.js'

dotenv.config();

// Connect to MongoDB
connectDB();

// Define port
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
