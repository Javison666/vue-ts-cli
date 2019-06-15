<template>
    <div></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
    logout,
} from '@/req/user'
@Component
export default class Logout extends Vue {
    public beforeRouteEnter(to, from, next) {
        next(async (vm) => {
            await logout()
            window.top.location.href = "/login"
        })
    }
}
</script>
