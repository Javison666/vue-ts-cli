<template>
    <div>
        <title-item>
            <i class="fa fa-smile-o"></i> 个人兴趣导航
        </title-item>
        <div class="t-box" style="padding-top: 1rem;">
            <!-- 图片 -->
            <div class="type-list">
                <ul class="flex-center">
                    <li>
                        <a href="https://www.iconfont.cn/" target="_blank">iconfont</a>
                    </li>
                    <li>
                        <a href="https://uimovement.com/" target="_blank">uimovement</a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/" target="_blank">dribbble</a>
                    </li>
                    <li>
                        <a href="http://www.chuangzaoshi.com/code" target="_blank">创造狮</a>
                    </li>
                </ul>
                <i class="fa fa-photo"></i>
            </div>
            <!-- 工具 -->
            <div class="type-list">
                <ul class="flex-center">
                    <li>
                        <a
                            href="https://minhaskamal.github.io/DownGit/#/home"
                            target="_blank"
                        >github文件夹下载</a>
                    </li>
                    <li>
                        <a href="http://f2er.club/" target="_blank">前端俱乐部</a>
                    </li>
                    <li>
                        <a href="mailto:hzez1110book@kindle.cn" target="_blank">kindle传书</a>
                    </li>
                    <li>
                        <a href="http://www.ruanyifeng.com/home.html" target="_blank">阮一峰</a>
                    </li>
                    <li>
                        <a href="https://www.zhangxinxu.com/" target="_blank">张鑫旭</a>
                    </li>
                    <li>
                        <a href="https://tool.lu/" target="_blank">coder工具箱</a>
                    </li>
                    <li>
                        <a href="http://rap2.taobao.org" target="_blank">rap</a>
                    </li>
                    <li>
                        <a href="http://www.atool.org/" target="_blank">atool</a>
                    </li>
                    <!-- <li><a href="https://123apps.com/cn/" target="_blank">123Apps</a></li> -->
                </ul>
                <i class="fa fa-wrench"></i>
            </div>
            <!-- 健康 -->
            <div class="type-list">
                <ul class="flex-center">
                    <li>
                        <a href="http://www.tiaooo.com/" target="_blank">跳跳</a>
                    </li>
                    <li>
                        <a href="https://www.gotokeep.com/" target="_blank">keep</a>
                    </li>
                    <!-- <li></li> -->
                </ul>
                <i class="fa fa-heartbeat"></i>
            </div>
            <!-- 音乐 -->
            <div class="type-list">
                <ul class="flex-center">
                    <li>
                        <a href="https://y.qq.com/" target="_blank">QQ音乐</a>
                    </li>
                    <li>
                        <a href="http://www.qupu123.com/" target="_blank">曲谱网</a>
                    </li>
                </ul>
                <i class="fa fa-music"></i>
            </div>
            <!-- 视频 -->
            <div class="type-list">
                <ul class="flex-center">
                    <li>
                        <a href="http://agmov.com/" target="_blank">agmov</a>
                    </li>
                    <li>
                        <a href="http://www.meijushe.cc/" target="_blank">meijushe</a>
                    </li>
                    <li>
                        <a href="http://www.yyetss.com/" target="_blank">人人影视</a>
                    </li>
                    <li>
                        <a href="http://i.youku.com/666dog" target="_blank">优酷</a>
                    </li>
                    <li>
                        <a href="http://tv.cctv.com/lm/bjjt/" target="_blank">百家讲坛</a>
                    </li>
                    <li>
                        <a href="https://www.iqiyi.com/v_19rqs6v9rw.html" target="_blank">海贼王</a>
                    </li>
                </ul>
                <i class="fa fa-play-circle"></i>
            </div>
            <!-- 生活 -->
            <div class="type-list">
                <ul class="flex-center">
                    <li>
                        <a href="https://www.douban.com/" target="_blank">豆瓣</a>
                    </li>
                    <li>
                        <a href="http://www.chongbuluo.com/" target="_blank">虫部落</a>
                    </li>
                    <li>
                        <a href="https://www.icourse163.org/" target="_blank">大学MOOC</a>
                    </li>
                    <li>
                        <a href="https://www.smzdm.com/" target="_blank">什么值得买</a>
                    </li>
                    <li>
                        <a href="http://www.hzlib.net/" target="_blank">杭州图书馆</a>
                    </li>
                    <li>
                        <a href="https://www.damai.cn/" target="_blank">大麦网</a>
                    </li>
                    <li>
                        <a href="https://www.mafengwo.cn/" target="_blank">马蜂窝</a>
                    </li>
                    <li>
                        <a href="http://hz.bendibao.com/" target="_blank">杭州本地宝</a>
                    </li>
                </ul>
                <i class="fa fa-tree"></i>
            </div>
        </div>
    </div>
</template>
<script type="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleItem from "./TitleItem";
@Component({
    components: {
        TitleItem
    }
})
export default class Index extends Vue {}
</script>
<style lang="scss" scoped>
.t-box {
    max-width: 600px;
    margin: auto;
}
.type-list {
    padding: 10px;
    margin-top: 10px;
    // max-height: 75px;
    transition: all 0.2s;

    overflow: auto;
    position: relative;
    margin: auto;
    margin-bottom: 8px;
    max-width: 700px;
    border-bottom: 1px solid #eaeaea;
    &:last-child {
        border-bottom: 0;
    }
    a {
        transition: all 0.2s;
    }
    &:hover {
        // max-height: initial;
        color: rgba(60, 161, 1, 1);
        a {
            color: rgba(60, 161, 1, 1);
        }
    }
    i {
        color: rgba(60, 161, 1, 1);
        font-size: 1.2rem;
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0;
        li {
            flex: 0 0 50%;
            line-height: 2.8rem;
            font-size: 14px;
            a {
                color: #333;
            }
        }
    }
}
</style>
