<template>
    <div>
        <title-item>
            <i class="fa fa-star-o"></i> 触手可及应用
        </title-item>
        <div class="apps" style="font-size:.8rem;padding:1.8rem .6rem 2rem;">
            <ul>
                <router-link to="/apps/coin" tag="li">掷硬币</router-link>
                <router-link to="/apps/game" tag="li">游戏</router-link>
                <li @click="toLogin">
                    更多
                    <span v-if="$store.state.user.info !== null">(在线)</span>>>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleItem from "./TitleItem.vue";
import { isLogin } from "@/req/user";
@Component({
    components: {
        TitleItem
    }
})
export default class Index extends Vue {
    public async toLogin() {
        const res = await isLogin();
        if (res.data) {
            this.$router.push({
                path: "/home"
            });
        } else {
            window.location.href = this.$PAGE_API.alipay.login;
        }
    }
}
</script>
<style lang="scss" scoped>
.apps {
    max-width: 600px;
    margin: auto;

    ul {
        text-align: left;
        padding-left: 13%;
    }
    li {
        display: inline-block;
        padding: 0.2rem 0.8rem;
        border-radius: 0.4rem;
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        margin-left: 10px;
        background-image: linear-gradient(
            to bottom,
            #fafafa,
            rgba(139, 255, 72, 0.6)
        );
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
