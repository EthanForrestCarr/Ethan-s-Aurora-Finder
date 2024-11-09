import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Route to get the Google Maps API key
router.get('/google-maps-key', (_req: Request, res: Response) => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key not found' });
    }
    res.json({ apiKey });
    return;
});

export default router;
