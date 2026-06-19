const axios = require('axios');

const AUTH_SERVICE = process.env.AUTH_SERVICE_URI;

exports.validateToken = async token => {
    const res = await axios.post(`${AUTH_SERVICE}/api/auth/internal/validate-token`,{},{
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })

    return res.data.data.user;
}