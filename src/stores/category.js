import { defineStore } from 'pinia'
import { getLayoutData } from '@/apis/layout'
import { ref } from 'vue'


export const useCategoryStore = defineStore('category', () => {
    const navList = ref([])

    const getNavList = async () => {
        const { result } = await getLayoutData()
        navList.value = result
    }

    return {
        navList,
        getNavList
    }
})
