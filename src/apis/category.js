import http from '@/utils/http'

//获取二级分类
export const getCategoryApi = (id) => {
    return http.get('/category', {
        params: {
            id
        }
    })
}

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
    return http.get('/category/sub/filter', {
        params: {
            id
        }
    })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
    return http.post('/category/goods/temporary', {
        method: 'post',
        data: data
    })
}