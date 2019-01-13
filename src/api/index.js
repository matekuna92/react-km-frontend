import axios from 'axios';

function getDevices()
{
    return axios.get('http://localhost:3005/devices');
}

export {
    getDevices
} 
