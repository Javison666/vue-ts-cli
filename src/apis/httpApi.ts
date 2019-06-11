const baseUrl = `api`
export default {
	user: {
		isLogin: `/${baseUrl}/login/isLogin`,
		login: `/${baseUrl}/user/login`,
		logout: `/${baseUrl}/logout`,
		getInfo: `/${baseUrl}/user/getInfo`
	},
	edc: {
		auth: `/${baseUrl}/edc/shr1210/auth`
	},
	crc: {
		login: `/${baseUrl}/crc/login`,
		getUser: `/${baseUrl}/crc/getUser`,
		getCheck: `/${baseUrl}/crc/getCheck`,
		getTest: `/${baseUrl}/crc/getTest`,
		getTestList: `/${baseUrl}/crc/getTestList`,
	},
	webCollection: {
		getData: `/${baseUrl}/webCollection/getData`,
		addClass: `/${baseUrl}/webCollection/addClass`,
		delClass: `/${baseUrl}/webCollection/delClass`,
		addItem: `/${baseUrl}/webCollection/addItem`,
		delItem: `/${baseUrl}/webCollection/delItem`,
	},
	public: {
		getNpmStat: `/${baseUrl}/public/npmStat`
	}
}
