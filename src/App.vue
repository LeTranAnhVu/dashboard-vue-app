<script setup lang="ts">
import TopBar from './components/layout/TopBar.vue'
import SideBar from '@/components/layout/SideBar/SideBar.vue'
</script>

<template>
    <div class="layout">
        <div class="sidebar-wrapper">
            <SideBar></SideBar>
        </div>
        <div class="body-wrapper">
            <TopBar class="topbar"></TopBar>
            <div class="main-wrapper">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>
.layout {
    @apply flex flex-nowrap;
    
    .body-wrapper {
        @apply flex flex-col grow;
        
        .main-wrapper {
            @apply grow bg-slate-100;
        }
    }
    
}
</style>