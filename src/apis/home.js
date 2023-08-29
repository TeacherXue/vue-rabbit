import http from '@/utils/http'

// 获取首页banner
export function getBanner() {
    return http.get('/home/banner')
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const getNewGoods = () => {
    return http.get('/home/new')
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotGoods = () => {
    return http.get('/home/hot')
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsList = () => {
    return http.get('/home/goods')
}