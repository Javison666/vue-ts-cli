<template>
    <a class="jj-button">{{value}}</a>
</template>
<script>
export default {
    props: {
        value: {
            type: [String, Number],
            default: ""
        }
    }
};
</script>

<style lang="scss" scoped>
div {
    display: inline;
}
.jj-button {
    cursor: pointer;
    display: inline-block;
    padding: 0.2rem 0.6rem;
    color: #444;
    border: 0;
    border-radius: 0.2rem;
    background-color: #f0f9f0;
    box-shadow: 1px 1px #a0d6b0, 2px 2px #a0d6b0, 3px 3px #a0d6b0,
        4px 4px #a0d6b0;
    text-decoration: none;
    text-shadow: 1px 1px #f0f3f9;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    -webkit-transition: all 0.1s;
    transition: all 0.1s;
}
.jj-button:focus {
    outline: 0 none;
    background-color: rgb(232, 242, 227);
}
.jj-button:hover {
    background-color: rgb(232, 242, 227);
    color: #333;
}
.jj-button:active {
    -webkit-transform: translate(2px, 2px);
    -ms-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
    box-shadow: 1px 1px #a2d6a0, 2px 2px #a2d6a0;
}
</style>