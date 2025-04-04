import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import qrRoutes from './routes/qrRoutes.js'; // This should work now

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://<Username>:<DB_Password>@exam.npusmsm.mongodb.net/?retryWrites=true&w=majority&appName=exam', {
    ssl: true,
    tls: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));


app.use('/api/qr', qrRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
