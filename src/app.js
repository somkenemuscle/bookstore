import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRoutes from './routes/user.routes.js'
import bookRoutes from './routes/book.routes.js'
import cartRoutes from './routes/cart.routes.js';


// Load environment variables if not in production
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}


// Initialize Express application
const app = express();


// Use Morgan for logging HTTP requests
app.use(morgan('dev'));


//parsing data from form
app.use(express.urlencoded({ extended: true }));

//allow access from all origins 
app.use(cors({
    origin: '*',
}));

// To parse incoming JSON in POST request body
app.use(express.json({ limit: '2mb' }));

//Routes
app.use('/api/auth', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/cart', cartRoutes);




// Error handling middleware
app.use((err, res) => {
    // Extract status and message from the error object, defaulting to 500 and a generic message
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';

    // Log the error details to the console for debugging
    console.error(err);

    // Send the error response to the client
    res.status(status).json({ message });
});

export default app;