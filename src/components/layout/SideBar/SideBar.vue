<script setup lang="ts">
import logo from '@/assets/logo.svg'
import { ref } from 'vue'
import MenuItem from '@/components/layout/SideBar/MenuItem.vue'
import Menu from '@/components/layout/SideBar/Menu.vue'

const isCollapsed = ref(false)
const handleCollapse = () => {
    isCollapsed.value = !isCollapsed.value
}

</script>
<template>
    <div :class="`sidebar ${isCollapsed ? 'collapsed' : ''}`">
        <div class="brand">
            <img :src="logo" alt="" />
            <h1 class="text">TailAdmin</h1>
        </div>
        <ul class="body">
            <Menu icon="fa-solid fa-grip" header="Dashboard">
                <MenuItem icon="fa-solid fa-shop" name="eCommerce" />
                <MenuItem icon="fa-solid fa-chart-simple" name="Analytics" badge="Pro" />
                <MenuItem icon="fa-solid fa-bullhorn" name="Marketing" active />
                <MenuItem icon="fa-solid fa-people-group" name="CRM" badge="Pro" />
            </Menu>
            <li class="single-menu">
                <MenuItem icon="fa-regular fa-calendar-days" name="Calendar" />
            </li>
            <Menu icon="fa-solid fa-id-card" header="Authentication">
                <MenuItem icon="fa-solid fa-arrow-right-to-bracket" name="Sign out" />
                <MenuItem icon="fa-solid fa-pen-to-square" name="Reset password" badge="Pro" />
            </Menu>
        </ul>

        <Icon
            :class="`collapse-btn ${isCollapsed ? 'right' : 'left'}`"
            icon="fa-solid fa-angles-left"
            size="lg"
            @click="handleCollapse"
        />
    </div>
</template>

<style lang="scss">
.sidebar {
    @apply border-2
    min-w-[280px]
    lg:w-1/6
    md:w-1/4
    h-screen
    fixed
    top-0
    left-0
    text-slate-300
    bg-slate-900
    p-4
    transition-all duration-200 ease-in-out
    select-none;

    .brand {
        @apply flex px-4 py-6 items-center justify-center gap-2;
        img {
            @apply w-[32px] h-[32px];
        }

        h1 {
            @apply text-2xl;
        }
    }

    .body {
        li {
            @apply flex flex-col
            [&:not(:last-child)]:mb-5
            [&:not(:last-child)]:after:content-[""]
            [&:not(:last-child)]:after:block
            [&:not(:last-child)]:after:h-[1px]
            [&:not(:last-child)]:after:w-full
            [&:not(:last-child)]:after:bg-gray-600
            [&:not(:last-child)]:after:mt-3;
        }
    }

    .menu {
        .menu-header {
            @apply flex items-center justify-end mb-2 px-2 py-2 cursor-pointer
            hover:text-gray-50 text-lg;

            .text {
                @apply flex justify-between items-center grow ml-2;
            }
        }

        &.dropped-down {
            .menu-items {
                @apply hidden;
            }
        }
    }

    .single-menu {
        .menu-item {
            @apply px-2;
        }
    }

    .menu-item {
        @apply text-slate-500 flex items-center pt-1 pb-2 pl-6 pr-2
        cursor-pointer
        hover:text-gray-50
        justify-end;
        &.active {
            @apply bg-slate-800 rounded text-slate-50;
        }

        .text {
            @apply flex justify-between items-center grow ml-2;
        }
    }

    .item-badge {
        @apply bg-blue-600 rounded px-1 py-[0.5px] text-xs text-gray-50;
    }

    .icon {
        @apply w-[20px];
    }

    .collapse-btn {
        @apply absolute top-[96%] right-5
        hover:text-gray-50 hover:cursor-pointer
        transition-transform;

        &.right {
            @apply rotate-180;
        }
    }

    &.collapsed {
        @apply w-[75px] min-w-[75px];

        .brand {
            @apply px-0;
            .text {
                @apply hidden;
            }
        }

        .menu {
            .menu-header {
                .text {
                    @apply hidden;
                }
            }
        }

        .menu-item {
            @apply justify-center pl-0 pr-0;
            .text {
                @apply hidden;
            }
        }
    }
}
</style>