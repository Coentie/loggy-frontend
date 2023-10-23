<script>
export let classNames = ''
export let status = 'alive';
</script>

<div class="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-xl flex items-center">
    <div class="w-2 h-2 bg-green-600 rounded-full mr-2">&nbsp;</div>
    <slot></slot>
</div>
