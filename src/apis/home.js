import http from '@/utils/http'

// 获取首页banner
export function getBanner() {
    return http.get('/home/banner')
}