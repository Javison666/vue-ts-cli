<template>
    <div class="t-box flex-center">
        <div>
            <transition appear appear-to-class="animated bounceInLeft">
                <!-- 头像 -->
                <img
                    src="/static/img/icon/headicon.jpeg"
                    width="128rem"
                    style="opacity:0.95;box-shadow:0 0 12px rgba(60, 161, 1, 1);border-radius:50%;"
                    rounded="circle"
                    fluid
                    alt="Responsive image"
                >
            </transition>
        </div>
        <div class="center">
            <p style="font-size:22px;font-weight:500;margin-bottom:1.2rem;">会做药的coder</p>
            <div>
                <p style="font-size:12px;margin-bottom:.4rem;">
                    <span class="xs-none">一生</span>温暖纯良，不舍爱与自由
                </p>
                <!-- <p style="font-size:12px;margin-bottom:0;">
                    <a href="https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2018103161900501&scope=auth_user&redirect_uri=http%3a%2f%2fwww.jiweiqing.cn%2fapi%2fali%2flogin&state=login" target="_blank">更多应用>></a>
                </p>-->
            </div>
        </div>
        <div class="info">
            <transition appear appear-to-class="animated fadeInRight">
                <div>
                    <!-- <p
                        class="card-text text-black"
                        style="font-weight:600;padding-top:.2rem;margin-bottom:.2rem;"
                    >
                        <a :href="$PAGE_API.other.personalBlog.path" :title="$PAGE_API.other.personalBlog.title" target="_blank"><i class="fa fa-book"></i></a>
                    </p>-->
                    <p class="card-text text-black" style="font-weight:600;">
                        <a
                            :href="$PAGE_API.other.myGithub.path"
                            :title="$PAGE_API.other.myGithub.title"
                            target="_blank"
                        >
                            <i class="fa fa-github"></i>
                        </a>
                    </p>
                    <p class="card-text text-black" style="font-weight:600;">
                        <a
                            :href="$PAGE_API.other.weibo.path"
                            :title="$PAGE_API.other.weibo.title"
                            target="_blank"
                        >
                            <i class="fa fa-weibo"></i>
                        </a>
                    </p>
                    <p class="card-text text-black" style="font-weight:600;">
                        <a
                            :href="$PAGE_API.other.mail.path"
                            :title="$PAGE_API.other.mail.title"
                            target="_blank"
                        >
                            <i class="fa fa-envelope"></i>
                        </a>
                    </p>
                </div>
            </transition>
        </div>
    </div>
</template>
<script type="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Index extends Vue {}
</script>
<style lang="scss" scoped>
$box-height: 240px;
.t-box {
    height: $box-height;
    background-repeat: no-repeat;
    background-image: linear-gradient(to right, #fff, rgba(139, 255, 72, 0.8));
    background-position-x: 50%;
    animation: hue 6s infinite linear;
    > div {
        text-align: center;
    }
    .card-text {
        margin-bottom: 0.6rem !important;
    }
}
@keyframes hue {
    0% {
        background-position-x: 20rem;
    }
    50% {
        background-position-x: 0%;
    }
    100% {
        background-position-x: 20rem;
    }
}
.center {
    color: #6a6a6a;
    a {
        color: #6a6a6a;
    }
}
.info {
    text-align: left;
    a {
        color: rgba(60, 161, 1, 1);
    }
}
@media screen and (min-width: 700px) {
    .t-box {
        > div {
            min-width: 280px;
        }
    }
}
@media screen and (max-width: 750px) {
    .t-box {
        > div {
            padding: 1.4em;
        }
        > div:first-child {
            padding: 1.2em;
        }
        > div:nth-child(2) {
            padding: 1em;
        }
    }
    .xs-none {
        display: none;
    }
}
</style>
