<script>
import { onMount } from 'svelte';
import Chart from 'chart.js/auto'

export let id;

const data = {
    labels: [
        'Sept 01 2023',
        'Sept 02 2023',
        'Sept 03 2023',
        'Sept 04 2023',
        'Sept 05 2023',
        'Sept 06 2023',
        'Sept 07 2023',
    ],
    datasets: [{
        label: 'Messages received',
        legendItem: {
            fillStyle:'#F47202'
        },
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(244, 114, 2, 0.2)',
        borderColor: '#F47202',
        tension: 0
    }]
};

const config = {
    type: 'line',
    data: data,
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
