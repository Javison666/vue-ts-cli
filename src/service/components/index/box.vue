<template>
    <div>
        <transition appear appear-to-class="animated fadeInDown">
            <p
                class="card-text text-black"
                style="font-weight:600;padding-top:1.8rem;margin-bottom:1rem;"
            >吉伟庆 前端工程师</p>
        </transition>
        <transition appear appear-to-class="animated fadeInRight">
            <p class="card-text text-black" style="font-weight:600;">
                mail :
                <a :href="$PAGE_API.other.mail.path" target="_blank">{{$PAGE_API.other.mail.title}}</a>
            </p>
        </transition>
        <transition appear appear-to-class="animated fadeInLeft">
            <p class="card-text text-black" style="font-weight:600;">
                weibo :
                <a :href="$PAGE_API.other.weibo.path" target="_blank">{{$PAGE_API.other.weibo.title}}</a>
            </p>
        </transition>
        <transition appear appear-to-class="animated fadeInUp">
            <!-- 按钮组 -->
            <div class="btns" style="padding-top:1.5rem;">
                <b-button size="sm" :href="$PAGE_API.other.personalBlog.path" target="_blank"
                >{{$PAGE_API.other.personalBlog.title}}</b-button>
                <b-button size="sm" :href="$PAGE_API.other.skillDocs.jsUtilsDoc.path" target="_blank" class=is-primary variant="warning">文档归纳</b-button>
                <b-button size="sm" :href="$PAGE_API.other.skillSummary.vueconf2Doc.path" target="_blank" class=is-success>会议总结</b-button>
                <b-button size="sm" :href="$PAGE_API.other.myGithub.path" class=is-warning target="_blank">{{$PAGE_API.other.myGithub.title}}</b-button>
            </div>
            
        </transition>
        <transition appear appear-to-class="animated fadeInUp">
            <div style="padding-top:1em;">
                <router-link :to="$PAGE_API.microApps.path" style="color:#333;font-size:12px;">微应用 >></router-link>
                <!-- <b-button size="sm" :to="$PAGE_API.login.path" variant="warning">文档归纳</b-button> -->
            </div>
        </transition>
        <transition appear appear-to-class="animated fadeInUp">
            <div style="padding-top:3em;color:#7b7b7b;font-size:12px;">
                一生温暖纯良，不舍爱与自由
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "index_box"
};
</script>

<style lang="scss" scoped>
@mixin word-shadow {
    // text-shadow: 0 0 2px #000;
    color: #333;
}
p{
    @include word-shadow();
}
.card-text {
    a {
        @include word-shadow();
    }
}
.btns a {
    margin-left: 10px;
}
.btns a:first-child {
    margin-left: 0;
}
</style>

