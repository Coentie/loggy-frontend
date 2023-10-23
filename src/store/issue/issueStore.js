import { writable } from 'svelte/store';

export const store = writable({
    issues: [],
    issue: null,
});

export const issueStore = {
    subscribe: (fn) => store.subscribe(fn),
    pushIssue: (issue) => {
        store.update((prevValue) => ({
            ...prevValue,
            issues: [...prevValue.issues, issue],
        }));
    },
    setCurrentIssue: (issue) => {
        store.update((prevValue) => ({
            ...prevValue,
            issue,
        }));
    }
};
