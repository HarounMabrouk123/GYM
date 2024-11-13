import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';  // Import cors module



const port = process.env.PORT;

connectDB();
const app = express();

// Body parser middlewara
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser())

// Enable CORS for all origins
app.use(cors());  // Allow all origins, you can configure this more specifically

app.get('/', (req, res) => {
    res.send('API is running..');
});

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)

app.listen(port, () => console.log(`server running on port ${port}`));
