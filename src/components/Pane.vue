<template>
    <div class="pane">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<style scoped>
.pane {
    @apply py-10 px-16 accent-slate-300;
    
    .header {
        @apply font-bold text-xl mb-10;
    }
}
</style>
