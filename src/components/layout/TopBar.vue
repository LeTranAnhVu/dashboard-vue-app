<script setup lang="ts">
import Switch from '@/components/Switch.vue'
import avatar from '@/assets/avatar.png'
</script>

<template>
    <div class="topbar">
        <div class="search-field">
            <Icon icon="fa-solid fa-magnifying-glass" />
            <input type="text" placeholder="Type to search..." />
        </div>
        <div class="switch">
            <Switch />
        </div>
        <div class="notification">
            <Icon icon="fa-regular fa-bell" />
        </div>
        
        <div class="message">
            <Icon icon="fa-regular fa-comment-dots" />
        </div>
        
        <div class="flex items-center ml-10 mr-10">
            <div class="text-right mr-2 text-gray-600">
                <p class="text-sm font-semibold">Thomas Anree</p>
                <p class="text-xs">Developer</p>
            </div>
            <img :src="avatar" alt="user's avatar">
        </div>
    </div>
</template>

<style scoped>
.topbar {
    @apply flex flex-nowrap items-center;

    .search-field {
        @apply flex items-center pl-10 grow;

        input {
            @apply h-[80px] ml-5 w-full focus:outline-none;
        }
    }

    .switch {
        @apply mr-10;
    }

    .message,
    .notification {
        @apply bg-slate-100 rounded-full w-[34px] h-[34px] flex items-center justify-center mr-2;
        
        svg {
            @apply text-gray-500
        }
    }
}
</style>