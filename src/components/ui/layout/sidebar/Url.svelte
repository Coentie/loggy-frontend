<script>
export let name;


</script>

<div class="rounded-2xl px-4 py-2 w-full text-sm text-gray-700
cursor-pointer flex items-center hover:text-primary hover:bg-gray-100">
    <slot></slot>
    <p>{name}</p>
</div>
