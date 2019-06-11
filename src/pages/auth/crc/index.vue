<template>
    <div style="padding-top:20px;">
        <h4>登录CRC入口</h4>
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
            <j-button @click.native="toLogin" value="登录"></j-button>
        </div>
    </div>
</template>
<script>
import JButton from "_c/button/default";
import { auth } from "@/req/crc";
export default {
    components: {
        JButton
    },
    data: () => ({
        // userName: "18868816185",
        // password: "mjk920129"
        userName: "",
        password: ""
    }),
    methods: {
        async toLogin() {
            const res = await auth({
                username: this.userName,
                pwd: this.password
            });
            if (res.code === "0") {
                this.$fn.setCookie("token", res.token);
                this.$fn.setCookie("patId", res.obj.patId);
                this.$router.push("/home/patient");
            }
        }
    },
    mounted() {
        Cookie.set("token", "");
    }
};
</script>