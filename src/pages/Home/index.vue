<template>
    <div>
        <header-user></header-user>
        <router-view/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderUser from '_sc/HeaderUser.vue';
@Component({
    components: {
        HeaderUser
    }
})
export default class Home extends Vue {}
</script>