import axios from 'axios';

export default axios.create({
    baseURL: '',

    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    mode: 'cors'
});
