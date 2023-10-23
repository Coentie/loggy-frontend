import {writable} from 'svelte/store';

export const store = writable({
    token: null,
    user: null,
});

export const authStore = {
    subscribe: (fn) => store.subscribe(fn),
    setToken: (token) => store.update(store => {
        store.token = token
        return store;
    }),
    setUser: (user) => store.update(store => {
        store.user = user
        return store;
    }),
}
