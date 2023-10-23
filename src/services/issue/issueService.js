import { mapAll, mapTo } from '../../utils/util/utility.js';
import { Issue } from '../../models/issue/Issue.js';
import issueApi from '../../api/issue/issueApi.js';

export default {
    /**
     * Fetches all the projects from the database.
     *
     * @returns {Promise<void>}
     */
    get: async (id) => {
        let res = await issueApi.get(id);
        res = mapTo(res.data.data, Issue);
        return res;
    }
}
