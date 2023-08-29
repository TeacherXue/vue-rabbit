import { useIntersectionObserver } from '@vueuse/core'

//定义懒加载插件
export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                //判断元素是否进入视口
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            el.src = binding.value
                            stop() //停止监听
                        }
                    },
                )
            }
        })
    }
}
