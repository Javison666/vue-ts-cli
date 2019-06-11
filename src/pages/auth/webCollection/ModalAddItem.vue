<template>
    <modal ref="modal" :title="this.editState?'修改收藏':'添加收藏'" @confirm="confirm">
        <div>
            <p style="padding:10px;">
                <span style="margin-right:10px;">名称:</span>
                <input
                    ref="name"
                    type="text"
                    v-model.trim="name"
                    class="jj-input"
                    placeholder="请输入名称"
                >
            </p>
            <p style="padding:0 0 10px;">
                <span style="margin-right:10px;">链接:</span>
                <input type="text" v-model.trim="url" class="jj-input" placeholder="请输入链接">
            </p>
        </div>
    </modal>
</template>
<script>
import { addItem } from "@/req/webCollection";
export default {
    data: () => ({
        showState: false,
        name: "",
        url: "",
        confirmFn: null,
        classId: null,
        id: null,
        editState: 0
    }),
    methods: {
        show(item) {
            if (item.name || item.url) {
                // 修改
                this.classId = item.classId;
                this.id = item.id;
                this.name = item.name;
                this.url = item.url;
                this.editState = 1;
            } else {
                // 添加
                this.classId = item.classId;
                this.name = "";
                this.url = "";
                this.editState = 0;
            }
            this.$refs.modal.show();
            this.$nextTick(() => {
                this.$refs.name.focus();
            });
            return new Promise(resolve => {
                this.confirmFn = () => {
                    resolve();
                };
            });
        },
        async confirm() {
            if (this.name === "") {
                return this.$msg.error("请输入名称");
            }
            if (this.name.length > 50) {
                return this.$msg.error("名称不能超过50个字");
            }
            if (this.url === "") {
                return this.$msg.error("请输入链接地址");
            }
            if (this.url.length > 500) {
                return this.$msg.error("链接过长");
            }
            const l = this.$msg.loading("处理中");
            try {
                const res = await addItem({
                    name: this.name,
                    url: this.url,
                    id: this.editState ? this.id : null,
                    classId: this.classId
                });
                l.close();
                if (this.$fn.n(res.code) === 200) {
                    this.$msg.success(this.editState ? "修改成功" : "添加成功");
                    this.$refs.modal.hide();
                    this.confirmFn();
                } else {
                    if (res.msg) {
                        this.$msg.error(res.msg);
                    }
                }
            } catch (err) {
                l.close();
                // eslint-disable-next-line
            }
        }
    }
};
</script>
<style lang="scss" scoped>
</style>

