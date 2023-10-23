import projectApi from '../../api/project/projectApi.js';
import { projectStore } from '../../store/project/projectStore.js';
import {mapAll} from '../../utils/util/utility.js';
import { Project } from '../../models/project/Project.js';

export default {
    /**
     * Fetches all the projects from the database.
     *
     * @returns {Promise<void>}
     */
    all: async () => {
        let res = await projectApi.all();
        res = mapAll(res.data.data, Project);
        projectStore.setProjects(res);
    },
    /**
     * Fetches a project by slug
     *
     * @param slug
     */
    findBySlug: (slug) => {

    }
}
