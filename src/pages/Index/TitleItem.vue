<template>
    <div>
        <h3>
            <slot/>
        </h3>
    </div>
</template>
<style lang="scss" scoped>
h3 {
    max-width: 600px;
    margin:auto;
    padding: 8px;
    padding-right:2%;
    padding-bottom:.6em;
    font-size: 14px;
    font-weight: 500;
    text-align:right;
    color:rgba(60, 161, 1, 1);
    border-bottom:1px solid #eaeaea;
}
</style>