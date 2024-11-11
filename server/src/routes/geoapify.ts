// /api/geoapify.ts
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/geoapify-key', (_req: Request, res: Response) => {
    try {
        const apiKey = process.env.GEOAPIFY_API_KEY;

        if (!apiKey) {
            console.error('Geoapify API key is missing from environment variables');
            return res.status(500).json({ message: 'Geoapify API key is missing' });
        }

        res.json({ apiKey });
    } catch (error) {
        console.error('Error retrieving Geoapify API key:', error);
        res.status(500).json({ message: 'Failed to retrieve Geoapify API key' });
    }
    return;
});

export default router;