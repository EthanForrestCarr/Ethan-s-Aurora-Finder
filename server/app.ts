import express from 'express';
import auroraRouter from './src/routes/aurora.js';
import authRouter from './src/routes/auth.js';

const app = express();

// Middleware setup
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/aurora', auroraRouter);

export default app;
