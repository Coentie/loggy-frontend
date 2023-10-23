import {writable} from 'svelte/store';

export const store = writable({
    projects: [],
});

export const projectStore = {
    subscribe: (fn) => store.subscribe(fn),
    setProjects: (projects) => {
        store.update((prevValue) => ({
            ...prevValue,
            projects,
        }));
    },
}
