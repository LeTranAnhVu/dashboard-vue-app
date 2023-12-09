<script setup lang="ts">
import Pane from '@/components/Pane.vue'
import PricingCard from '@/components/PricingCard.vue'

const prices = [
    {
        title: 'Starter',
        amount: 25.0,
        features: [
            'Get Figma Source File',
            'Use on Unlimited Projects',
            'Personal & Commercial Use',
            'Downloadable Offline Files',
            'Lifetime Free Updates',
        ],
    },
    {
        title: 'Basic',
        amount: 59.0,
        highlight: true,
        features: [
            'Get Figma Source File',
            'Use on Unlimited Projects',
            'Personal & Commercial Use',
            'Downloadable Offline Files',
            'Lifetime Free Updates',
        ],
    },
    {
        title: 'Premium',
        amount: 99.0,
        features: [
            'Get Figma Source File',
            'Use on Unlimited Projects',
            'Personal & Commercial Use',
            'Downloadable Offline Files',
            'Lifetime Free Updates',
        ],
    },
]
</script>

<template>
    <Pane>
        <template #header>Pricing Table</template>
        <div class="cards">
            <PricingCard
                v-for="price in prices"
                :title="price.title"
                :amount="price.amount"
                :highlight="price.highlight"
                :features="price.features"
            />
        </div>
    </Pane>
</template>

<style scoped>
.cards {
    @apply flex flex-nowrap gap-5;
}
</style>