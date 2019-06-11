<template>
    <div class="t-box" ref="box">
        <i class="fa fa-home" @click="goHome"></i>
        <div
            ref="coin"
            :class="{
            'euro-0':state==1&&val==0,
            'euro-1':state==1&&val==1,
            'static-0':state==0&&val==0,
            'static-1':state==0&&val==1}"
        >
            <article class="back"></article>
            <article class="middle" style="transform: translateZ(1px)"></article>
            <article class="middle" style="transform: translateZ(2px)"></article>
            <article class="middle" style="transform: translateZ(3px)"></article>
            <article class="middle" style="transform: translateZ(4px)"></article>
            <article class="middle" style="transform: translateZ(5px)"></article>
            <article class="middle" style="transform: translateZ(6px)"></article>
            <article class="middle" style="transform: translateZ(7px)"></article>
            <article class="middle" style="transform: translateZ(8px)"></article>
            <article class="middle" style="transform: translateZ(9px)"></article>
            <article class="front"></article>
        </div>
        <j-button class="start-btn" @click.native="start" value="投掷"></j-button>
    </div>
</template>
<script>
import JButton from "_c/button/default";
export default {
    components: {
        JButton
    },
    data: () => ({
        state: 0,
        val: 1
    }),
    methods: {
        goHome() {
            this.$router.push({
                path: "/"
            });
        },
        start() {
            this.state = 0;
            this.$refs.coin.style.transform = "rotateX(-90deg)";
            setTimeout(() => {
                this.state = 1;
                this.val = Math.random() < 0.5 ? 0 : 1;
            }, 80);
        }
    }
};
</script>

<style lang="scss" scoped>
.fa-home {
    color: rgba(72, 255, 209, 0.685);
    font-size: 2rem;
    margin-top: 8%;
}
.start-btn {
    position: fixed;
    bottom: 20%;
    left: 0;
    right: 0;
    width: 4rem;
    margin: auto;
}
.t-box {
    position: fixed;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    background-image: linear-gradient(
        to bottom,
        #fafafa,
        rgba(72, 255, 148, 0.685)
    );
}
.static-1 {
    width: 150px;
    height: 150px;
    margin-left: -75px;
    margin-top: -75px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
}
.static-0 {
    width: 150px;
    height: 150px;
    margin-left: -75px;
    margin-top: -75px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transform: rotateX(180deg);
}
.euro-0 {
    width: 150px;
    height: 150px;
    margin-left: -75px;
    margin-top: -75px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    animation: spin0 2.5s ease-out;
    animation-fill-mode: forwards;
}
.euro-1 {
    width: 150px;
    height: 150px;
    margin-left: -75px;
    margin-top: -75px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    animation: spin1 2.5s ease-out;
    animation-fill-mode: forwards;
}
.back {
    background-image: url("http://wow.techbrood.com/uploads/160101/backeuro.png");
    width: 150px;
    height: 150px;
}
.middle {
    background-image: url("http://wow.techbrood.com/uploads/160101/faceeuro.png");
    width: 150px;
    height: 150px;
    transform: translateZ(1px);
    position: absolute;
    top: 0;
}
.front {
    background-image: url("http://wow.techbrood.com/uploads/160101/faceeuro.png");
    height: 150px;
    position: absolute;
    top: 0;
    transform: translateZ(10px);
    width: 150px;
}
@keyframes spin0 {
    0% {
        transform: rotateX(90deg);
    }
    100% {
        transform: rotateX(5220deg);
    }
}
@keyframes spin1 {
    0% {
        transform: rotateX(-90deg);
    }
    // 60% {
    //     transform: rotateX(3600deg);
    // }
    // 80% {
    //     transform: rotateX(5400deg);
    // }
    // 90% {
    //     transform: rotateX(6300deg);
    // }
    100% {
        transform: rotateX(5400deg);
    }
}
</style>
