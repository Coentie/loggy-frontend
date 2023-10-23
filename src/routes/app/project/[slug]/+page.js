import { projectStore } from '../../../../store/project/projectStore.js';
import axios from '../../../../utils/axios/axios.js';
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    let projects = [];
    projectStore.subscribe(p => projects = p.projects);

    // If there are no projects in the store we load them here.
   if(projects.length <= 0) {
        const res = await axios.get('projects');
        projectStore.setProjects(res.data.data);
   }

   // Load project
   const project = projects.find(proj => proj.slug === params.slug);

   return {
       project
   }
}
