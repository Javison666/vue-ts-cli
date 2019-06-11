<template>
    <div class="app-box">
        <transition name="slide-fade">
            <router-view v-if="!$route.meta.keepAlive"/>
        </transition>
        <transition name="slide-fade">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
export default {
}
</script>

<style lang="scss" scoped>
.app-box{
    position: fixed;
    width: 100%;
    min-height: 100%;
}
.slide-fade {
    position: fixed;
    width: 100%;
    height: 100%;
}
.slide-fade-enter-active {
    transition: all 1.2s ease;
}
.slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(2, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
    position: fixed;
    width: 100%;
    height: 100%;
    transform: translateX(50px);
    opacity: 0;
}
</style>

