<script>
import '../../app.css';
import Sidebar from '../../components/ui/layout/sidebar/Sidebar.svelte';

import IoMdPerson from 'svelte-icons/io/IoMdPerson.svelte'
import IoMdNotifications from 'svelte-icons/io/IoMdNotifications.svelte'

import { authStore } from '../../store/user/authStore.js';

let signedInUser;
authStore.subscribe(store => signedInUser = store.user);
</script>

<div class="min-h-screen flex" >
    <Sidebar />
    <div class="flex flex-1 flex-col bg-gray-100">
        <div class="w-full py-4 px-8 flex justify-between border-b border-gray-200">
            <p>{signedInUser?.name || 'Ghost'}</p>

            <div class="flex space-x-4 text-gray-600">
                <div class="w-6 cursor-pointer hover:text-gray-800">
                    <IoMdPerson />
                </div>

                <div class="w-6 cursor-pointer hover:text-gray-800">
                    <IoMdNotifications />
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col p-8 ">
        <slot></slot>
        </div>
    </div>
</div>
