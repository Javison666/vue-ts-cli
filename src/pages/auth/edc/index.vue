<template>
    <div style="padding-top:20px;">
        <h4>登录edc</h4>
        <div>
            <p style="padding:20px;">
                <span style="margin-right:10px;">账号:</span>
                <input
                    type="text"
                    ref="userName"
                    v-model.trim="userName"
                    class="jj-input"
                    placeholder="请输入账号"
                >
            </p>
            <p style="padding:20px;">
                <span style="margin-right:10px;">密码:</span>
                <input
                    type="text"
                    ref="password"
                    v-model.trim="password"
                    class="jj-input"
                    placeholder="请输入密码"
                >
            </p>
            <p style="padding:20px;">
                <img src="/api/edc/shr1210/checkcodeimg">
                <input
                    type="text"
                    ref="checkcode"
                    v-model.trim="checkcode"
                    class="jj-input"
                    placeholder="请输入验证码"
                >
            </p>
            <j-button @click.native="toLogin" value="登录"></j-button>
        </div>
    </div>
</template>
<script>
import JButton from "_c/button/default";
import { auth } from "@/req/edc";
export default {
    components: {
        JButton
    },
    data: () => ({
        userName: "leixh",
        password: "xh818181",
        projectid: "shr_1210_ii_iii_hcc",
        checkcode: ""
    }),
    methods: {
        async toLogin() {
            const res = await auth({
                userName: this.userName,
                password: this.password,
                projectid: this.projectid,
                checkcode: this.checkcode
            });
        }
    }
};
</script>