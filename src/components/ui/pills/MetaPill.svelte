<script>
export let title;
export let data;

export let bg = 'bg-gray-200';
export let borderColor = 'border-gray-300'
export let color = 'text-gray-800';
</script>

<div class="text-[0.6rem] flex mx-1 items-center">
    <p class="p-0.5 flex {bg} {color} {borderColor} flex-1 text-center justify-center items-center rounded-l-lg border item-center" style="height: 100%">
        {title}
    </p>
    <p class="p-0.5 flex  flex-1 text-center justify-center items-center rounded-r-lg border border-gray-300 item-center" style="height: 100%">
        {data}
    </p>
</div>
