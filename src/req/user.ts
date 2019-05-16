import $fn from '@/utils/fn.ts';
import httpApi from '@/apis/httpApi'

// 登录
interface LoginData {
	username: string,
	password: string,
	imageCode: string,
	smsCode: string
}
export const login = async (data: LoginData) => $fn.httpPost({
	url: httpApi.user.login,
	data,
})

// 登出
export const logout = () => $fn.httpPost({
	url: httpApi.user.logout,
})

// 获取用户信息
export const getUserInfo = async () => {
	return $fn.httpPost({
		url: httpApi.user.getInfo,
	})
}

// 获取用户信息
export const getMenu = async () => {
	return $fn.httpPost({
		url: httpApi.user.getMenu,
	})
}
