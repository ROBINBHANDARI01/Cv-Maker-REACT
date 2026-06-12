import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import resumeRoutes from './routes/resume.js';

dotenv.config();
const app = express();

app.use(cors({ 
    origin: ['http://localhost:5173',
    'https://cv-maker-react-vert.vercel.app'
    ]
}));
app.use(express.json());

//Routes 
app.use('/api/auth', authRoutes);
app.use('/api/resume', resumeRoutes);

//Test route 
app.get('/', (req, res) => res.send('API running...'));

//Database Connection

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () =>
console.log(`server is running on port ${process.env.PORT}`)
);
}).catch((err) => console.error('DB connection failed: ', err));

