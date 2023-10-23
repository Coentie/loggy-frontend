<script>
import { onMount } from 'svelte';
import Chart from 'chart.js/auto';

export let id;
export let data;
export let label;
export let chartData = {
    labels: data.labels,
    datasets: [{
        label: label,
        data: data.values,
        backgroundColor: [
            'rgba(244, 114, 2, 0.4)',
        ],
    }]
};

const config = {
    type: 'bar',
    data: chartData,
    options: {
        barPercentage: 1.0,
        categoryPercentage: 1.0,
    }
};
onMount(() => {
    (async function() {
        new Chart(
            document.getElementById(id),
            config,
        );
    })();
})

</script>

<canvas id="{id}"></canvas>
