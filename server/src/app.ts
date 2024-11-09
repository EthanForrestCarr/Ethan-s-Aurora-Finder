import express, { Request, Response, NextFunction } from 'express';
import auroraRouter from './routes/aurora.js';
import authRouter from './routes/userAuth.js';
import mapsRouter from './routes/maps.js';
import cors from 'cors';

const app = express();

app.use(cors());

// Middleware setup
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/aurora', auroraRouter);
app.use('/api/maps', mapsRouter);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err.stack); // Logs the error for debugging
    res.status(500).json({ message: 'Server error', error: err.message });
});

export default app;
