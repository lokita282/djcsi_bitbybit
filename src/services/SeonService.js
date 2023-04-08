import httpCommon from 'http-common';
let data = '';

const seonPhoneData = (data) => {
    return httpCommon.post('https://fa6b-2402-3a80-663-a351-25ba-8ca3-93-7d10.ngrok-free.app/seon', data, {
        headers: {
            // 'X-API-KEY': '6e7236ee-06a3-4046-aba8-35943eba2f17',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
};
export default { seonPhoneData };
