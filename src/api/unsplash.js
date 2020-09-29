import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID rssrjOI6AcMPCeVoJFGOSUAlSyLtGCwQOk-1r_CL0hg" 
    }
})