import projectService from '../../services/project/projectService.js';
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    // Load all the projects.
    await projectService.all();
}
