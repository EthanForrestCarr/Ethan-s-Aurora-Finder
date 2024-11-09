import axios from 'axios';

export const fetchAuroraData = async (lat: number, long: number) => {
    try {
        const response = await axios.get(`/api/aurora/data?lat=${lat}&long=${long}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching aurora data:", error);
        throw error;
    }
};
