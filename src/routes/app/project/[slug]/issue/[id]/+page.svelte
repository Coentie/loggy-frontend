<script>
import { onMount } from 'svelte';
import issueService from '../../../../services/issue/issueService.js';
import { issueStore } from '../../../../store/issue/issueStore.js';
import { page } from '$app/stores';
import MetaPill from '../../../../components/ui/pills/MetaPill.svelte';

let loadingIssue = true;
let issue = null;

issueStore.subscribe(i => issue = i.issue);

onMount(() => {
    (async function () {
        const res = await issueService.get($page.params.id);
        issueStore.setCurrentIssue(res);
        loadingIssue = false;
    })();
});
</script>


<div class="mb-4 bg-gray-200 rounded-xl p-4">
    <h1 class="text-xl font-bold">{issue?.getTitle()}.</h1>
</div>

<div class="grid grid-cols-8 gap-4 mb-4">
    <MetaPill
            bg="bg-blue-600"
            borderColor="border-blue-600"
            color="text-white"
            title="Env."
            data="{issue?.occurrence.environment}"
    />

    <MetaPill
            bg="bg-blue-600"
            borderColor="border-blue-600"
            color="text-white"
            title="User"
            data="{issue?.occurrence.username ?? 'none'}"
    />

    <MetaPill
            bg="bg-orange-600"
            borderColor="border-orange-600"
            color="text-white"
            title="Language"
            data="PHP"
    />

    <MetaPill
            bg="bg-orange-600"
            borderColor="border-orange-600"
            color="text-white"
            title="Language version"
            data="{issue?.occurrence.language_version}"
    />

    <MetaPill
            bg="bg-purple-600"
            borderColor="border-purple-600"
            color="text-white"
            title="Operating system"
            data="{issue?.occurrence.operating_system}"
    />

    <MetaPill
            bg="bg-purple-600"
            borderColor="border-purple-600"
            color="text-white"
            title="Release version"
            data="{issue?.occurrence.operating_release}"
    />
</div>

<div class="space-y-2 flex flex-col bg-gray-200 p-2 rounded-xl">
    <h2 class="font-bold">Stackstrace</h2>
    {#each issue?.getStacktrace() || [] as line}
        <div class="hover:bg-gray-300 rounded-xl p-2">
            <p>{line.file} on line {line.line}</p>
            <p>{line.class}{line.type}{line.function}</p>
        </div>
    {/each}
</div>

