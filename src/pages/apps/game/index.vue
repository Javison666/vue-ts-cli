<template>
    <div class=game-box>
        <div class=header>
            <router-link to="/"
                tag="li">
                <i class="fa fa-home"
                    style="color:#fff;font-size:2rem;"></i>
            </router-link>
        </div>
        <p style="color:#586069;font-size:.8rem;margin-top:.3rem;">备注：游戏资源需要，可能需要加载一点时间。</p>
        <ul>
            <li>
                <a href="/game/popstar/src/popstar.htm">消除星星</a>
            </li>
            <li>
                <a href="/game/phaser-games/p2ball/index.htm">p2ball</a>
            </li>
            <!-- <li>
                <a href="/game/phaser-games/2048/index.htm">2048</a>
            </li> -->
            <li>
                <a href="/game/phaser-games/4096/index.htm">4096</a>
            </li>
            <li>
                <a href="/game/phaser-games/plane/index.htm">打飞机</a>
            </li>
            <li>
                <a href="/game/phaser-games/flappybird/index.htm">flappybird</a>
            </li>
            <li>
                <a href="/game/phaser-games/candy/index.htm">怪兽要糖果</a>
            </li>
            <li>
                <a href="/game/phaser-games/circlepath/index.htm">往上走</a>
            </li>
            <li>
                <a href="/game/phaser-games/hitball/index.htm">弹珠</a>
            </li>
            <li>
                <a href="/game/phaser-games/kite/index.htm">放风筝</a>
            </li>
            <li>
                <a href="/game/phaser-games/bike/index.htm">骑单车</a>
            </li>
            <li>
                <a href="/game/phaser-games/ballgame/index.htm">撞球</a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.game-box {
    width: 100%;
    height: 100%;
    position: absolute;
    .header {
        background: rgba(139, 255, 72, 0.6);
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
    }
}
ul {
    padding-top: 1rem;
    a {
        color: rgba(38, 19, 90, 0.9);
    }
    li{
        margin-bottom:.3rem;
    }
}
</style>

