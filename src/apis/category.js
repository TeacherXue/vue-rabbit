import http from '@/utils/http'

//获取二级分类
export const getCategoryApi = (id) => {
    return http.get('/category', {
        params: {
            id
        }
    })
}