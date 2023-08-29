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