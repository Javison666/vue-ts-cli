<template>
    <div class="t-box">
        <div class="w12" flex-center>
            <span style="margin-left:.8rem">
                <i class="fa fa-home" @click="goHome"></i>
                你好, {{$store.state.user.info.username}}
            </span>
            <span style="margin-left:.8rem" v-show="$store.state.user.info.clinical">
                <a href="/home/edc">临研测试</a>
            </span>
            <span class="logout-btn" style="margin-right:.8rem" @click="logout">
                退出
                <i class="fa fa-power-off"></i>
            </span>
        </div>
    </div>
</template>
<script>
import { logout } from "@/req/user";
export default {
    methods: {
        logout,
        goHome() {
            this.$router.push({
                path: "/"
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.fa-home {
    font-size: 20px;
    position: relative;
    top: 2px;
    margin-right: 0.2rem;
    cursor: pointer;
}
.t-box {
    font-size: 14px;
    color: rgba(60, 161, 1, 1);
    a {
        color: rgba(60, 161, 1, 1);
    }
    background-image: linear-gradient(
        to right,
        #fafafa,
        rgba(139, 255, 72, 0.8)
    );
}
.w12 {
    height: 2.4rem;
    justify-content: space-between;
}
.logout-btn {
    cursor: pointer;
}
</style>
