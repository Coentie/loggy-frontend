import axios from 'axios';
import { authStore } from '../../store/user/authStore.js';

let tokenData;

authStore.subscribe(store => tokenData = store.token);

axios.interceptors.request.use((cfg) => {
    cfg.baseURL = import.meta.env.VITE_SERVER_URI + '/api/'

    if(tokenData && tokenData.access_token) {
        cfg.headers.setAuthorization('bearer ' + tokenData.access_token);
    }

    return cfg;
})

export default axios;
