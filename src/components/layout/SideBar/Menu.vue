<script setup lang="ts">
import { ref, toRefs } from 'vue'

const props = withDefaults(
    defineProps<{
        header?: string
        icon: string
    }>(),
    {
        header: undefined,
    },
)

const { header } = toRefs(props)
const isDroppedDown = ref(false)

const handleDropdown = () => {
    isDroppedDown.value = !isDroppedDown.value
}
</script>

<template>
    <li :class="`menu ${isDroppedDown ? 'dropped-down' : ''}`">
        <div class="menu-header" @click="handleDropdown">
            <Icon :icon="icon" size="lg" class="icon" />
            <p v-if="header" class="text">
                {{ header }}
            </p>
        </div>
        <div class="menu-items">
            <slot></slot>
        </div>
    </li>
</template>