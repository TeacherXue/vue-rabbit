//封装分类数据业务逻辑
import { ref, onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { getCategoryApi } from '@/apis/category'

export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
        const res = await getCategoryApi(id)
        categoryData.value = res.result
    }

    //当路由变化时候，重新获取数据
    onBeforeRouteUpdate((to) => {
        console.log("路由改变", to)
        getCategory(to.params.id)
    })

    onMounted(() => {
        getCategory()
    })

    return {
        categoryData
    }
}