<template>
    <modal ref="modal" :title="this.editState?'修改类目':'添加类目'" @confirm="confirm">
        <div>
            <p style="padding:20px;">
                <span style="margin-right:10px;">类别名称:</span>
                <input
                    type="text"
                    ref="className"
                    v-model.trim="className"
                    class="jj-input"
                    placeholder="请输入类别名称"
                >
            </p>
        </div>
    </modal>
</template>
<script>
import { addClass } from "@/req/webCollection";
export default {
    data: () => ({
        showState: false,
        className: "",
        confirmFn: null,
        classId: "",
        editState: 0
    }),
    methods: {
        show(item) {
            if (item) {
                // 修改
                this.classId = item.classId;
                this.className = item.className;
                this.editState = 1;
            } else {
                // 添加
                this.className = "";
                this.editState = 0;
            }
            this.$refs.modal.show();
            this.$nextTick(() => {
                this.$refs.className.focus();
            });
            return new Promise(resolve => {
                this.confirmFn = () => {
                    resolve();
                };
            });
        },
        async confirm() {
            if (this.className === "") {
                return this.$msg.error("请输入类目名称");
            }
            if (this.className.length > 50) {
                return this.$msg.error("不能超过50个字");
            }
            const l = this.$msg.loading("处理中");
            try {
                const res = await addClass({
                    className: this.className,
                    classId: this.editState ? this.classId : null
                });
                l.close();
                if (this.$fn.n(res.code) === 200) {
                    this.$refs.modal.hide();
                    this.$msg.success(this.editState ? "修改成功" : "添加成功");
                    this.confirmFn();
                } else {
                    if (res.msg) {
                        this.$msg.error(res.msg);
                    }
                }
            } catch (err) {
                l.close();
            }
        }
    }
};
</script>
<style lang="scss" scoped>
</style>

