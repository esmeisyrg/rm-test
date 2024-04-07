import axios from "axios";
import { API_BASE_URL } from '../../config.js';


export const getRealEstates = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/v2/realestates`);
        return response.data;
    } catch (error) {
        console.error('Error fetching real estates', error);
        throw error;
    }
};

export const getRealEstatesById = async (id : number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/v2/realestates/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching real estate with id ${id}`, error);
        throw error;
    }
};
