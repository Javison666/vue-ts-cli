<template>
    <div>
        <album-author style="position:relative;z-index:100;"></album-author>
        <works style="margin-bottom:20px;"></works>
        <entry></entry>
        <list-type></list-type>
        <copy-footer style="margin-top:20px;"></copy-footer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AlbumAuthor from "./AlbumAuthor.vue";
import Works from "./Works.vue";
import Entry from './Entry.vue'
import ListType from "./ListType.vue";
import CopyFooter from "_sc/CopyFooter.vue";

@Component({
    components: {
        AlbumAuthor,
        Works,
        Entry,
        ListType,
        CopyFooter
    }
})
export default class Index extends Vue {
    public beforeRouteEnter(to, from, next) {
        next(async (vm) => {
            vm.$store.dispatch('user/udtInfo')
        })
    }
}
</script>

<style lang="scss" scoped>

</style>