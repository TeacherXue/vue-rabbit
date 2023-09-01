import http from '@/utils/http'


//获取商品详情
export const getGoodsDetail = (id) => {
    return http.get('/goods', {
        params: {
            id
        }
    })
}