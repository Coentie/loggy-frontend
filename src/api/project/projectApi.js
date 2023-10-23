import axios from '../../utils/axios/axios.js';

export default {
    /**
     * Fetches all the projects.
     *
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    all: async () => await axios.get('projects'),
}
