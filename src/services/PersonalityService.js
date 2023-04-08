import httpCommon from 'http-common';

const personality = (data) => {
    return httpCommon.post('https://41c3-136-232-1-174.ngrok-free.app/personality', data, {
        headers: {
            // 'X-API-KEY': '6e7236ee-06a3-4046-aba8-35943eba2f17',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
};

export default { personality };
