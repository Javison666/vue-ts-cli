import Fn from 'jj-browser-fn';

const projFn = {
    ...Fn,
    // 跳转路由
    toRoute(route: string) {
        window.App.$router.push({
            path: route,
        })
    },
    checkResponse(res: any, fn: any) {
        return new Promise((resolve) => {
            if (res && res.code === 200) {
                resolve(res.data)
            } else {
                // tslint:disable-next-line:no-unused-expression
                fn ? fn() : '' ;
                window.App.$Message.error(res.msg)
            }
        })
    }
}
// 初始化请求拦截
projFn.setRequestTestFn((data) => {
    try {
        if (data.code === 80001) {
            if (window.location.href.indexOf('/login') === -1) {
                window.location.href = "/login"
            }
        }
    } catch (err) {
        // tslint:disable-next-line:no-console
        console.log(err)
    }
})

export default projFn ;


