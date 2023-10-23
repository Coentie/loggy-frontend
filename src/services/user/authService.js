import { authStore } from '../../store/user/authStore.js';
import axios from '../../utils/axios/axios.js';
import { mapTo } from '../../utils/util/utility.js';
import { User } from '../../models/user/User.js';

export default {
    signIn: async (email, password) => {
        // Make the request.
        const res = await axios.post('/auth/login', {
            email, password
        });

        // If we don't have success response we return.
        if (res.status !== 200) return true;

        // set the auth token to the store
        authStore.setToken(res.data);

        // Fetch the user.
        const userRes = await axios.get('/auth/user');

        // Set the authenticated user to the store.
        authStore.setUser(
            mapTo(userRes.data, User)
        );
    }
};
