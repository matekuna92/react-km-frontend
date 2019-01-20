import axios from 'axios';
import store from '../store';
import { startLoading, stopLoading } from '../actions/loaderActions';

//const apiURL = process.env.FRONTEND_URL;
//console.log('CURRENT URL IS : ', apiURL);

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3005',
    timeout: 1000
  });

  // Add a request interceptor
  axiosInstance.interceptors.request.use(function (config) 
{
    // Do something before request is sent
    store.dispatch(startLoading());             // loading elkezdése, mikor elindul a request
    
    return config;
}, function (error) 
{
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) 
{
    // Do something with response data
    store.dispatch(stopLoading());      // ha sikeresen visszatér a response vagy a hibás, mindkét esetben megállítjuk a loading-ot

    return response;
}, function (error) 
{
    // Do something with response error
    store.dispatch(stopLoading());

    return Promise.reject(error);
});

function getDevices()
{
    return axiosInstance.get('/devices');
  //  return axios.get('http://localhost:3005/devices');
    //return axios.get(`${apiURL}/devices`)  // return nélkül nincs axiosPromise visszatérési érték, 
                                                        // így nincs response, és a .then(..response.data) az App.js-ben undefined error-t dob!
}

function addDevice(device)
{
    return axiosInstance.post('/devices', device);
   // return axios.post('http://localhost:3005/devices', device);
    //return axios.post(`${apiURL}/devices`, device);
}

async function getDevice(id)
{
   const resp = await axiosInstance.get(`/devices/${id}`);
   console.log(resp.data);
   return resp.data;
}

export {
    getDevices,
    addDevice,
    getDevice
} 
