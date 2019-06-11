
<template>
    <div
        style="position:relative;overflow:hidden;position:relative;overflow:hidden;width:100%;height:100%"
    >
        <div
            class="zoom-image"
            :width="windowWidth"
            :style="{'background-image':'url('+src+')','padding-bottom':parseInt(windowHeight*100/windowWidth)+'%'}"
        ></div>
    </div>
</template>

<script>
import { mapState } from "vuex";
// 按照分辨率自适应居中
export default {
    props: ["src", "percent"],
    computed: {
        ...mapState({
            windowWidth: state => state.global.windowWidth,
            windowHeight: state => state.global.windowHeight
        })
    }
};
</script>

<style lang="scss" scoped>
.zoom-image {
    width: 100%;
    height: 100%;
    padding-bottom: 100%;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
