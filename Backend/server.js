import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js';
import cors from 'cors';  // Import cors module



const port = process.env.PORT;

connectDB();
const app = express();

// Enable CORS for all origins
app.use(cors());  // Allow all origins, you can configure this more specifically

app.get('/', (req, res) => {
    res.send('API is running..');
});

app.use('/api/products',productRoutes)

app.listen(port, () => console.log(`server running on port ${port}`));
