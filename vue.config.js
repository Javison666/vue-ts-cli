const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/' :
    '/'

module.exports = {
    // 项目部署基础
    // 默认情况下，我们假设你的应用将被部署在域的根目录下,
    // 例如：https://www.my-app.com/
    // 默认：'/'
    // 如果您的应用程序部署在子路径中，则需要在这指定子路径
    // 例如：https://www.foobar.com/my-app/
    // 需要将它改为'/my-app/'
    publicPath: BASE_URL,

    // 打包路径配置
    outputDir: 'dist',

    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
            .set('_style', resolve('src/assets/style'))
            .set('_req', resolve('src/req'))
            .set('_sc', resolve('src/service/components'))
            .set('_slib', resolve('src/service/lib'))
            .set('_utils', resolve('src/utils'))
    },
    // 打包时不生成.map文件
    // productionSourceMap: false
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        port: 7201,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8082',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/app/mock/16/api',
                },
            },
        },
        // proxy: 'http://127.0.0.1:8082/app/mock/16'
    },
    transpileDependencies: ['vue-clamp', 'resize-detector']
}
