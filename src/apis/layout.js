import http from '@/utils/http'

export function getLayoutData() {
    return http.get('/home/category/head')
}   