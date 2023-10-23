<script>
import stringUtility from '../../../utils/util/stringUtility.js';
import Card from './Card.svelte';
import CardTitle from './CardTitle.svelte';
import CardSection from './CardSection.svelte';
import BarChart from '../../charts/BarChart.svelte';
</script>
<Card>
    <CardSection classNames="pb-0">
        <CardTitle classNames="text-gray-300 bg-gray-300 animate-pulse rounded-lg mb-2" hasDot="{false}">
            test title
            <span slot="subtitle" class="text-sm bg-gray-300 animate-pulse rounded-lg text-gray-300">
                Amount of issues raised last 30 days
            </span>
        </CardTitle>
    </CardSection>
    <CardSection classNames="pt-4">
        <div class="h-32 bg-gray-300 animate-pulse rounded-lg">
            &nbsp;
        </div>
    </CardSection>
</Card>
