import Fn from 'jj-browser-fn';

const ProjFn={
    // 跳转路由
    toRoute(route:string): void {
        window.App.$router.push({
            path: route,
        })
    },
    // 添加全局公共方法
    checkResponse(res:any): void {
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
ProjFn.setRequestTestFn = ((data:any): void => {
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
export default ProjFn


