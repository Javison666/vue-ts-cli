import Fn from 'jj-browser-fn/main.js';

class ProjFn {
    // 跳转路由
    public toRoute(route: string) {
        window.App.$router.push({
            path: route,
        })
    }
    // 添加全局公共方法
    public checkResponse(res: any, fn: any) {
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

(ProjFn.prototype as any).__proto__ = Fn.prototype

const projFn = new ProjFn() as any;
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

export default projFn as any


