<script>
import Logo from '../Logo.svelte';
import Circle from '$lib/svg/circle.svg';
import Url from './Url.svelte';
import SidebarSection from './SidebarSection.svelte';

import IoMdHome from 'svelte-icons/io/IoMdHome.svelte';
import IoIosStats from 'svelte-icons/io/IoIosStats.svelte'
import IoIosListBox from 'svelte-icons/io/IoIosListBox.svelte'
import IoIosJournal from 'svelte-icons/io/IoIosJournal.svelte'
import IoIosCog from 'svelte-icons/io/IoIosCog.svelte'
import IoIosLogOut from 'svelte-icons/io/IoIosLogOut.svelte'
export let width = 'w-1/6';

const routes = [
    {
        icon: IoMdHome,
        name: 'Home'
    },
    {
        icon: IoIosStats,
        name: 'Server status'
    },
    {
        icon: IoIosJournal,
        name: 'Cron statuses'
    },
    {
        icon: IoIosListBox,
        name: 'Commands'
    },
];
</script>

<div class="{width} sticky top-0 h-screen flex flex-col overflow-hidden border-r border-gray-300 rounded-r-2xl shadow-2xl"
     style="background-color: rgba(0, 50, 98, 0.2)">

    <Logo/>

    <div class="w-4/5 mx-auto">
        <hr>
    </div>

    <SidebarSection classNames="flex-1">
        {#each routes as route}
            <Url route="{route.name}" name="{route.name}">
                <div class="w-6 flex-shrink-0 mr-2">
                    <svelte:component this={route.icon}/>
                </div>
            </Url>
        {/each}
    </SidebarSection>

    <div class="w-4/5 mx-auto">
        <hr>
    </div>

    <SidebarSection classNames="z-10">
        <Url route="logout" name="Logout">
            <div class="w-6 flex-shrink-0 mr-2">
                <IoIosLogOut />
            </div>
        </Url>
        <Url route="config" name="Configuration">
            <div class="w-6 flex-shrink-0 mr-2">
                <IoIosCog />
            </div>
        </Url>
    </SidebarSection>

    <img src="{Circle}" alt="circle" class="absolute scale-150 -left-4 -bottom-12 opacity-50 "/>
</div>
