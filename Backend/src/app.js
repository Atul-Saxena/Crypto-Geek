import express from 'express';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import bodyParser from 'body-parser';


const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/users",userRoutes);

// Error handler
app.use(errorHandler);

export default app;
