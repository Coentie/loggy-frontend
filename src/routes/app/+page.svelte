<script>
import { onMount, onDestroy } from 'svelte';
import Card from '../../components/ui/card/Card.svelte';
import SkeletonCard from '../../components/ui/card/SkeletonCard.svelte';
import CardSection from '../../components/ui/card/CardSection.svelte';
import CardTitle from '../../components/ui/card/CardTitle.svelte';
import BarChart from '../../components/charts/BarChart.svelte';
import { authStore } from '../../store/user/authStore.js';
import { projectStore } from '../../store/project/projectStore.js';
import projectService from '../../services/project/projectService.js';
import { Project } from '../../models/project/Project.js';
import { User } from '../../models/user/User.js';
import stringUtility from '../../utils/util/stringUtility.js';

/**
 * @param {User} signedInuser
 */
let signedInUser;
/**
 * @param {Array<Project>} projects
 */
let projects = [];

// Store subbing.
const unsubAuthStore = authStore.subscribe(store => signedInUser = store.user);
const unsubProjectStore = projectStore.subscribe(p => projects = p.projects);

// Unsub from the stores in order to prevent memory leaks.
onDestroy(() => {
    unsubProjectStore();
    unsubAuthStore();
});
</script>

<div class="mb-8">
    <h1 class="text-2xl text-primary font-bold">Hi, { signedInUser?.name || 'Ghost' }.</h1>
    <p class="text-gray-600">It is a wonderful day today, I hope you are doing fine.</p>
</div>

<div class="grid grid-cols-2 gap-2">
    {#each projects as project, index (index)}
        <Card>
            <CardSection>
                <CardTitle tabIndex="{index}"
                           classNames="text-gray-600"
                           url="app/project/{project.slug}">
                    { project.getName() }
                    <span slot="subtitle" class="text-sm text-gray-500">Amount of issues raised last 30 days</span>
                </CardTitle>
            </CardSection>
            <CardSection>
                <BarChart
                        label="Amount of issues last 30 days."
                        data="{project.getIssueData()}"
                        id="{stringUtility.generateUniqueId('project_')}"
                />
            </CardSection>
        </Card>
    {/each}
</div>

