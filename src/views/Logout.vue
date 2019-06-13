<template>
    <div></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
    logout,
} from '@/req/user'
@Component({
    components: {},
    beforeRouteEnter(to, from, next) {
        next(async (vm) => {
            await logout()
            window.top.location.href = "/login"
        })
    },
})
export default class Logout extends Vue {}
</script>
