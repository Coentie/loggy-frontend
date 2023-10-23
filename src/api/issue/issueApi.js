import axios from '../../utils/axios/axios.js';

export default {
    /**
     * Fetches all the projects.
     *
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    get: async (id) => await axios.get('issues/' + id),
}
