import axios from 'axios';

function getDevices()
{
    return axios.get('http://localhost:3005/devices');  // return nélkül nincs axiosPromise visszatérési érték, 
                                                        // így nincs response, és a .then(..response.data) az App.js-ben undefined error-t dob!
}

export {
    getDevices
} 
