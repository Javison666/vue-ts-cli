<template>
    <div class="login-default">
        <div class="row">
            <Input
                prefix="logo-usd"
                ref="username"
                v-model="username"
                style="width:280px;"
                placeholder="请输入账号"
            >
                <Icon custom="i-icon i-icon-user" slot="prefix"/>
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
                <Icon custom="i-icon i-icon-pwd" slot="prefix"/>
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
            >
        </div>
        <div class="row" v-show="isNeedSms">
            <!-- <span>短信验证 : </span> -->
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
        </div>
        <div style="min-height:30px;padding-left:30px;padding-right:30px;">
            <p style="text-align:left;" class="wrong" ref="wrong" v-show="wrong">{{wrong}}</p>
            <p style="text-align:left;" class="success" ref="success" v-show="success">{{success}}</p>
        </div>
        <div>
            <Button type="primary" style="width:240px;margin-top:10px;" @click="toLogin">登录</Button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { login } from "@/req/user";

@Component({
    components: {},
    mounted() {
        login({
            username: "1234",
            password: "123",
            imageCode: "123",
            smsCode: "123",
        });
    },
})
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
    public smsCountDown() {
        if (this.smsCountTime !== 0) {
            this.smsCountTime--;
            setTimeout(() => {
                this.smsCountDown();
            }, 1000);
        }
    }
    public getSmsCode() {

    }
    public toLogin() {

    }
}
</script>
<style lang="scss" scoped>
.row{
    margin-bottom: 12px;
}
</style>

