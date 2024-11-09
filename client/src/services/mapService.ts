import axios from 'axios';

export const fetchGoogleMapsApiKey = async () => {
    try {
        const response = await axios.get('/api/config/google-maps-key');
        return response.data.apiKey;
    } catch (error) {
        console.error("Failed to fetch Google Maps API key:", error);
        throw error;
    }
};
