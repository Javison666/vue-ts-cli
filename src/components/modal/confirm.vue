<template>
    <transition name="dialog-fade">
        <div class="dialog modal" v-show="showState">
            <div>
                <div class="dialog-content">
                    <div>
                        <h3 style="text-align:center;">{{title}}</h3>
                    </div>
                    <div style="padding:10px;font-size:.8rem;">
                        <p>{{msg}}</p>
                    </div>
                    <div style="padding:9px 12px 9px;">
                        <j-button @click.native="confirm" value="确认" style="margin-right:20px;"></j-button>
                        <j-button @click.native="hide" value="取消"></j-button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import JButton from "_c/button/default";
export default {
    data: () => ({
        showState: false,
        confirmFn: null,
        title: "",
        msg: ""
    }),
    components: {
        JButton
    },
    methods: {
        show({ title, msg }) {
            this.title = title ? title : "确认执行操作？";
            this.msg = msg ? msg : "该操作无法撤销";
            this.showState = true;
            return new Promise(resolve => {
                this.confirmFn = () => {
                    resolve();
                };
            });
        },
        hide() {
            this.showState = false;
        },
        confirm() {
            this.showState = false;
            this.confirmFn();
        }
    }
};
</script>

<style lang="scss" scoped>
.dialog {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    text-align: center;
    transition: all 0.3s;
    z-index: 1000;
    > div {
        width: 100%;
        height: 100%;
        transform: translateY(40%);
    }
}

.dialog-content {
    background: #fff;
    border-radius: 8px;
    vertical-align: middle;
    padding: 10px 40px 10px;
    text-align: center;
    transform: translateY(-50%);
    display: inline-block;
    transition: all 0.2s;
    box-shadow: 0 0 4px #a0d6b0;
}
</style>
<style lang="scss">
.dialog-fade-enter,
.dialog-fade-leave {
    opacity: 0;
    .dialog-content {
        margin-top: -20px;
    }
}
</style>
