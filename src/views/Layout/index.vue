<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutSticky from './components/LayoutSticky.vue';
import { onMounted } from 'vue'

import { useCategroyStore } from '@/stores/categroy'

const categroyStore = useCategroyStore()

onMounted(() => {
    categroyStore.getNavList()
})

</script>

<template>
    <LayoutNav />
    <LayoutSticky />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
</template>