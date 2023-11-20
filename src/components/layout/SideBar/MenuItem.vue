<script setup lang="ts">
import { toRefs } from 'vue'

const props = withDefaults(
    defineProps<{
        icon: string
        name: string
        active?: boolean
        badge?: string
    }>(),
    {
        badge: undefined,
        active: false
    },
)

const { icon, name, badge } = toRefs(props)
</script>

<template>
    <div :class="`menu-item ${active ? 'active' : ''}`">
        <Icon :icon="icon" class="icon" />
        <p class="text">
            <span>{{ name }}</span>
            <span v-if="badge" class="item-badge">{{ badge }}</span>
        </p>
    </div>
</template>