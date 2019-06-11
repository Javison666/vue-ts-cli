/* eslint-disable */
<template>
    <div class="pos-abs-cover">
        <!-- 背景图 -->
        <zoom-bg :src="`/static/img/bg/bg4.jpg`" :percent="50"></zoom-bg>
        <div class="content-box">
            <transition appear appear-to-class="animated fadeInDown">
                <!-- <a
                    href="/"
                    style="font-size:12px;color:#787878;text-align:left;padding-bottom:10px;display:block;"
                ><< 回到首页</a> -->
            </transition>
            <transition appear appear-to-class="animated fadeInRight">
                <b-card no-body>
                    <b-tabs pills card vertical>
                        <b-tab title="小工具" active>
                            <micro-utils></micro-utils>
                        </b-tab>
                        <b-tab title="小生活">
                            <micro-life></micro-life>
                        </b-tab>
                        <b-tab title="小视频">
                            <!-- <transition name="animated fadeInRight"> -->
                            <micro-video></micro-video>
                            <!-- </transition> -->
                        </b-tab>
                        <!-- <b-tab title="小游戏">
                        <micro-game></micro-game>
                        </b-tab>-->
                    </b-tabs>
                </b-card>
            </transition>
            <transition appear appear-to-class="animated fadeInUp">
                <a
                    href="https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2018103161900501&scope=auth_user&redirect_uri=http%3a%2f%2fwww.jiweiqing.cn&state=init"
                    style="margin-top:1rem;display:block;color:#787878;font-size:12px;text-align:right;"
                    target="_blank"
                >微后台(暂时只支持管理员) >></a>
            </transition>
        </div>
    </div>
</template>

<script>
import ZoomBg from "_c/bg/zoomBg";
import MicroVideo from "./part/video";
import MicroLife from "./part/life";
import MicroGame from "./part/game";
import MicroUtils from "./part/utils";
export default {
    components: {
        ZoomBg,
        MicroVideo,
        MicroLife,
        MicroGame,
        MicroUtils
    }
};
</script>

<style lang="scss" scoped>
.content-box {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}
@media screen and (max-width: 900px) {
    .content-box {
        min-width: 82%;
    }
}

.card {
    background: rgba(255, 255, 255, 0.7);
}
</style>
<style lang="scss">
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
    background-color: #f75088;
}
.nav-link {
    color: #f75088;
    &:hover {
        color: #f75088;
    }
}
.tab-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    a {
        margin-right: 20px;
    }
}
@media screen and (min-width: 900px) {
    .content-box {
        min-width: 700px;
    }
}
@media screen and (max-width: 500px) {
    .col-auto {
        width: 100%;
    }
}

</style>

