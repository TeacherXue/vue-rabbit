//封装banner数据业务逻辑
import { getBanner } from "@/apis/home";
import { ref, onMounted } from 'vue'

export function useBanner() {
    //获取 banner
    const bannerList = ref([]);
    const getBannerList = () => {
        getBanner({ distributionSite: "2" }).then((res) => {
            bannerList.value = res.result
        });
    }

    onMounted(() => {
        getBannerList()
    })

    return {
        bannerList
    }
}