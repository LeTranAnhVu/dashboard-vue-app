<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps({
    title: String,
    amount: Number,
    features: [String],
    highlight: Boolean
})

const { title, amount, features } = toRefs(props)
</script>

<template>
    <div class="bg-gray-50 rounded shadow p-7 relative">
        <p v-if="highlight" class="highlight-badge">Best value</p>
        
        <p class="text-lg font-semibold mb-5">{{ title }}</p>
        <p class="mb-6">
            <span class="font-semibold mr-2">$</span>
            <span class="font-semibold text-3xl mr-2">{{amount}}</span>
            <span class="text-slate-500 text-sm">Per month</span>
        </p>
        <p class="font-semibold text-lg mb-4">Features</p>
        <ul class="mb-7">
            <li v-for="feature in features" class="feature">{{feature}}</li>
        </ul>

        <button :class="highlight ? 'primary-btn' : 'outline-btn'">Purchase now</button>
    </div>
</template>

<style scoped>
.feature {
    @apply mb-2 text-slate-600 text-sm;
}

.outline-btn {
    @apply ring-1 px-5 py-2 rounded text-blue-700 ring-blue-700
    hover:bg-blue-600 hover:text-gray-50;
}

.primary-btn {
    @apply ring-1 px-5 py-2 rounded ring-blue-700 bg-blue-600 text-gray-50
    hover:bg-opacity-0 hover:text-blue-700;
}

.highlight-badge {
    @apply bg-blue-600 text-gray-50 text-xs
    absolute top-2 right-0 px-4 py-1;
}
</style>