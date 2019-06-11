<template>
    <div class="login-page">
        <div class="login-bg"></div>
        <div class="login-box">
            <h3 style="margin-bottom:.8rem;">一起创造美好</h3>
            <div class="row">
                <input
                    type="text"
                    ref="className"
                    v-model.trim="username"
                    class="jj-input"
                    placeholder="请输入用户名或邮箱"
                >
            </div>
            <div class="row">
                <input
                    type="password"
                    ref="className"
                    v-model.trim="password"
                    class="jj-input"
                    placeholder="请输入密码"
                >
            </div>
            <div class="row">
                <input
                    type="text"
                    ref="className"
                    v-model.trim="imgCode"
                    class="jj-input"
                    style="width:7.5rem;"
                    placeholder="请输入图形验证码"
                >
                <img :src="imgCodeSrc" @click="changeImgCode" style="height:1.8rem;cursor:pointer;">
            </div>
            <j-button @click.native="login" style="margin-top:.8rem;" value="登录"></j-button>
            <div class="other-way">
                <a :href="$PAGE_API.alipay.login">支付宝登录</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { toLogin } from "@/req/user";

@Component({})
export default class Home extends Vue {
    public username = "";
    public password = "";
    public imgCodeSrc = "";
    public imgCode = "";

    public wrong = "";
    public success = "";

    public created() {
        this.changeImgCode();
    }
    public changeImgCode() {
        this.imgCodeSrc = `/api/login/imgCode?${new Date().getTime()}`;
    }
    public async login() {
        let vdt = this.$vdt.checkLoginAccount(this.username);
        if (!vdt.res) {
            return this.$msg.error(vdt.msg);
        }
        vdt = this.$vdt.checkPassword(this.password);
        if (!vdt.res) {
            return this.$msg.error(vdt.msg);
        }
        vdt = this.$vdt.checkImgCode(this.imgCode);
        if (!vdt.res) {
            return this.$msg.error(vdt.msg);
        }
        const res = await toLogin({
            account: this.username,
            password: encodeURIComponent(this.password),
            imgCode: this.imgCode
        });
        if (this.$fn.n(res.code) === 200) {
            this.$router.push({
                path: "/home"
            });
        } else {
            this.$msg.error(res.msg);
        }
    }
}
</script>
<style lang="scss" scoped>
.login-bg {
    background-image: url("/static/img/bg.jpg");
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    z-index: -1;
}
.row {
    margin-bottom: 12px;
}
.login-default {
    padding-top: 18%;
}
</style>

