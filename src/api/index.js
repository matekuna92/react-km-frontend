import axios from 'axios';

//const apiURL = process.env.FRONTEND_URL;
//console.log('CURRENT URL IS : ', apiURL);

function getDevices()
{
    return axios.get('http://localhost:3005/devices');
    //return axios.get(`${apiURL}/devices`)  // return nélkül nincs axiosPromise visszatérési érték, 
                                                        // így nincs response, és a .then(..response.data) az App.js-ben undefined error-t dob!
}

function addDevice(device)
{
    return axios.post('http://localhost:3005/devices', device);
    //return axios.post(`${apiURL}/devices`, device);
}

async function getDevice(id)
{
   const resp = await axios.get(`http://localhost:3005/devices/${id}`);
   return resp.data;
}

export {
    getDevices,
    addDevice,
    getDevice
} 
