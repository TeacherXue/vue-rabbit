import http from "@/utils/http"

export function getCart() {
    return http({
        url: "home/category/head"
    })
}

