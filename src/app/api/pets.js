import axios from 'axios';

const url = 'http://localhost:4000/api/pets';

export async function getPets() {
    try {
        const response = await axios.get(`${url}`);
        console.log(response.data);
        console.log('----------------------------------');
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function postPet(petData) {
    try {
        const response = await axios.post(`${url}/post`, petData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

