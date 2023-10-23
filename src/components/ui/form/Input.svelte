<script>
export let label;
export let placeholder;
export let name;
export let value;
</script>

<div class="flex flex-col space-y-1">
    <label for="{name}">{label}</label>
    <input class="px-4 py-2 rounded-xl border border-gray-100 border-1 bg-transparent font-thin"
           bind:value={value}
           type="text"
           id="{name}"
           name="{name}"
           placeholder="{placeholder || label}"
    />
</div>
