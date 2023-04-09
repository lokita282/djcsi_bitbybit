import httpCommon from 'http-common';
let data = '';

const seonPhoneData = (data) => {
    return httpCommon.get(`https://seon.onrender.com/seon/phone/91${data}`, {
        headers: {
            // 'X-API-KEY': '6e7236ee-06a3-4046-aba8-35943eba2f17',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
};

const seonEmailData = (data) => {
    return httpCommon.get(`https://seon.onrender.com/seon/email/${data}`, {
        headers: {
            // 'X-API-KEY': '6e7236ee-06a3-4046-aba8-35943eba2f17',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
};

const seonEmailCategoryData = (data) => {
    return httpCommon.get(`https://seon.onrender.com/seon/email/regiTrue/${data}`, {
        headers: {
            // 'X-API-KEY': '6e7236ee-06a3-4046-aba8-35943eba2f17',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
};

const seonPhoneCategoryData = (data) => {
    return httpCommon.get(`https://seon.onrender.com/seon/phone/regiTrue/91${data}`, {
        headers: {
            // 'X-API-KEY': '6e7236ee-06a3-4046-aba8-35943eba2f17',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
};

const seonIPData = (data) => {
    return httpCommon.get(`https://seon.onrender.com/seon/ip/${data}`, {
        headers: {
            // 'X-API-KEY': '6e7236ee-06a3-4046-aba8-35943eba2f17',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
};
export default { seonPhoneData, seonEmailData, seonIPData, seonEmailCategoryData, seonPhoneCategoryData };
