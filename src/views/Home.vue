<template>
    <div class="home">
        <!-- <img
            alt="Vue logo"
            src="@/assets/logo.png"
        > -->
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { login } from "@/req/user";
@Component({
	components: {
		HelloWorld,
	},
})
export default class Home extends Vue {
    public mounted() {
        login({
			username: "123",
            password: "123",
            imageCode: "123",
            smsCode: "123",
        });
    }
}
</script>
