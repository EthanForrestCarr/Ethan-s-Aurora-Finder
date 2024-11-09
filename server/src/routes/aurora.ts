import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

// Endpoint to fetch aurora data
router.get('/data', async (req: Request, res: Response) => {
    const { lat, long } = req.query;

    // Validate latitude and longitude
    if (!lat || !long) {
        return res.status(400).json({ message: 'Latitude and Longitude are required' });
    }

    try {
        // Construct the auroras.live API URL
        const apiUrl = `http://api.auroras.live/v1/?type=all&lat=${lat}&long=${long}&forecast=false&threeday=false&ace=true&probability=true&images=true`;

        // Fetch data from auroras.live API
        const response = await axios.get(apiUrl);

        // Send the API response data to the frontend
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching aurora data:', error);
        res.status(500).json({ message: 'Failed to retrieve aurora data' });
    }
    return;
});

export default router;
