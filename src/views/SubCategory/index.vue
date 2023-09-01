<script setup>
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category'


// 获取面包屑导航数据
const filterData = ref({})
const route = useRoute()
const getFilterData = async () => {
    const res = await getCategoryFilterAPI(route.params.id)
    filterData.value = res.result
}

onMounted(() => {
    getFilterData()
})

//获取商品列表数据
const goodList = ref([])
const reqData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
})

const getGoodList = async () => {
    const res = await getSubCategoryAPI(reqData.value)
    goodList.value = res.result.items
}

onMounted(() => {
    getGoodList()
})

//切换 tab
const onTabChange = () => {
    getGoodList()
}

//加载更多
const loading = ref(false)
const noMore = computed(() => goodList.value.length >= 100)
const disabledLoadMore = computed(() => loading.value || noMore.value)
const loadMore = async () => {
    reqData.value.page++
    loading.value = true
    const res = await getSubCategoryAPI(reqData.value)
    loading.value = false
    if (res.result.items.length === 0) {
        disabledLoadMore.value = true
    } else {
        goodList.value = [...goodList.value, ...res.result.items]
    }
}

</script>

<template>
    <div class="container ">
        <!-- 面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }">{{ filterData.parentName }}
                </el-breadcrumb-item>
                <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <el-tabs v-model="reqData.sortField" @tab-change="onTabChange">
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body" v-infinite-scroll="loadMore" :infinite-scroll-disabled="disabledLoadMore">
                <!-- 商品列表-->
                <GoodsItem v-for="item in goodList" :key="item.id" :good="item"></GoodsItem>
            </div>
            <p v-if="loading">Loading...</p>
            <p v-if="noMore">No more</p>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.bread-container {
    padding: 25px 0;
    color: #666;
}

.sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }

    .goods-item {
        display: block;
        width: 220px;
        margin-right: 20px;
        padding: 20px 30px;
        text-align: center;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }

    .pagination-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }


}
</style>