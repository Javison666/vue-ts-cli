<template>
    <div
        style="position:relative;overflow:hidden;position:relative;overflow:hidden;width:100%;height:100%"
    >
        <b-img
            :src="src"
            style="min-width:1000px;position:fixed;z-index:-1;left:50%;transform:translateX(-50%);width:100%;height:100%"
        />
    </div>
</template>

<script>
export default {
    props: ["src"]
};
</script>

<style lang="scss" scoped>
</style>
