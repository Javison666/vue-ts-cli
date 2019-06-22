<template>
    <div>
        <div class="login-bg"></div>
        <div class="login-default">
            <div class="row">
                <h2 style="color:#fff;text-shadow:0 0 8px #000;">
                    web基础平台
                </h2>
            </div>
            <div class="row">
                <Input
                    prefix="logo-usd"
                    ref="username"
                    v-model="username"
                    style="width:280px;"
                    placeholder="请输入账号"
                >
                    <Icon type="ios-contact" :size="22" slot="prefix" />
                </Input>
            </div>
            <div class="row">
                <Input
                    type="password"
                    prefix="md-key"
                    v-model="password"
                    style="width:280px;"
                    placeholder="请输入密码"
                >
                    <Icon type="ios-key" :size="20" slot="prefix" />
                </Input>
            </div>
            <div class="row">
                <Input
                    v-model="imageCode"
                    style="width:156px;"
                    placeholder="请输入图形验证码"
                    @on-enter="toLogin"
                />
                <img
                    :src="imgCodeSrc"
                    style="cursor:pointer;height:36px;width:114px;display:inline-block;vertical-align:middle;margin-left:10px;"
                    @click="updateImgCode"
                    alt="图形验证码"
                />
            </div>
            <!-- <div class="row" v-show="isNeedSms">
                <Input
                    v-model="securityCode"
                    style="width:280px;"
                    ref="securityCode"
                    placeholder="请输入短信验证码"
                    @on-enter="toLogin"
                />
                <div>
                    <span v-show="smsCountTime!=0">{{smsCountTime}}秒后重新获取</span>
                    <Button v-show="smsCountTime==0" @click="getSmsCode">获取短信验证码</Button>
                </div>
            </div> -->
            <div style="min-height:30px;padding-left:30px;padding-right:30px;">
                <p
                    style="text-align:left;"
                    class="wrong"
                    ref="wrong"
                    v-show="wrong"
                >
                    {{ wrong }}
                </p>
                <p
                    style="text-align:left;"
                    class="success"
                    ref="success"
                    v-show="success"
                >
                    {{ success }}
                </p>
            </div>
            <div>
                <Button
                    type="primary"
                    style="width:240px;margin-top:10px;"
                    @click="toLogin"
                    >登录</Button
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { login, getUserInfoDemo } from "@/req/user";

@Component
export default class Home extends Vue {
    public username = "";
    public password = "";
    public imgCodeSrc = "";
    public imageCode = "";
    public isNeedSms = false;
    public smsCountTime = 0;
    public securityCode = "";
    public wrong = "";
    public success = "";

    public mounted() {
       this.getInfo()
    }

    public async getInfo() {
        try {
            const res = await getUserInfoDemo({
                id: '324'
            })
            this.username = res.msg
        } catch (err) {
            this.$$Message.error(err)
        }
    }

    public wrongMsg(txt) {
        this.success = "";
        this.wrong = txt;
        this.$fn.shake(this.$refs.wrong);
    }
    public successMsg(txt) {
        this.wrong = "";
        this.success = txt;
    }
    public updateImgCode() {
        this.imgCodeSrc =
            this.$HTTP_API.user.imgCodeForLogin +
            "?time=" +
            new Date().getTime();
    }
    // 短信验证码倒计时
    // public smsCountDown() {
    //     if (this.smsCountTime !== 0) {
    //         this.smsCountTime--;
    //         setTimeout(() => {
    //             this.smsCountDown();
    //         }, 1000);
    //     }
    // }
    // public getSmsCode() {}
    public async toLogin() {
        await this.$fn.showMsgResponse(
            await login({
                username: this.username,
                password: encodeURIComponent(this.password),
                imageCode: this.imageCode,
                smsCode: this.securityCode
            })
        );
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
