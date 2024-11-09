import express from 'express';
import auroraRouter from './src/routes/aurora.js';
import authRouter from './src/routes/userAuth.js';
import mapsRouter from './src/routes/maps.js';

const app = express();

// Middleware setup
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/aurora', auroraRouter);
app.use('/api/maps', mapsRouter);

export default app;
