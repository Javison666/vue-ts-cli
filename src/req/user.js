import $fn from '@/utils/fn'
import httpApi from '@/apis/httpApi'
// 判断是否登录
export const isLogin = () => $fn.httpPost({
    url: httpApi.user.isLogin
})
// 登出
export const logout = async () => {
    let res = await $fn.httpPost({
        url: httpApi.user.logout
    })
    if (res.code == 200 && window.App) {
        window.App.$store.dispatch('global/actionSetAuth', 0)
        window.App.$router.push({
            path: '/'
        })
    }
}

// 判断是否登录
export const getUserInfo = () => $fn.httpPost({
    url: httpApi.user.getInfo
})

// 进行登录
export const toLogin = ({
    account,
    password,
    imgCode
}) => {
    return $fn.httpPost({
        url: httpApi.user.login,
        json: {
            account,
            password,
            imgCode
        }
    })
}