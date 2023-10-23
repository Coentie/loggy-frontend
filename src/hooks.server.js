import { authStore } from './store/user/authStore.js';
import { redirect } from '@sveltejs/kit';

let user;
authStore.subscribe(s => user = s.user);

export const handle = async({event, resolve}) => {
    if (event.url.pathname.startsWith('/app') && ! user) {
        throw redirect(302, '/');
    }

    return resolve(event);
}
