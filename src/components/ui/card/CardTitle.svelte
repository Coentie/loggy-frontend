<script>
export let classNames = '';
export let hasDot = true;
export let tabIndex = 0;

export let url;

const onKeyDownHandler = () => {
    console.log('hi');
    if (url) {
        window.location.href = url;
    }
};
</script>

<div class="flex-col {url ?? 'cursor-pointer'}"
     role="link"
     tabindex="{tabIndex}"
     on:keydown={onKeyDownHandler}
     on:click={onKeyDownHandler}
>
    <h1 class="{classNames} text-xl font-bold flex-col">
        <slot></slot>
        {#if hasDot}
            <span class="text-secondary font-bold">.</span>
        {/if}
    </h1>
    <div class="-mt-1.5">
        <slot name="subtitle"></slot>
    </div>
</div>

