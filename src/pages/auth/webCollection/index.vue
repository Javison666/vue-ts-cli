
<template>
    <div class="t-box">
        <div class="w12">
            <div v-for="(item,index) in list" :key="index">
                <!-- 类目 -->
                <div class="card-tip">
                    <span>
                        {{item.className}}
                        <div class="btn">
                            <i
                                @click="addClass({classId:item.classId,className:item.className})"
                                class="fa fa-pencil-square-o"
                            ></i>
                            <i @click="delClass(item)" class="fa fa-trash"></i>
                        </div>
                    </span>
                </div>
                <!-- 链接列表 -->
                <div flex-center>
                    <div v-for="(one,index1) in item.list" :key="index1">
                        <div class="btn">
                            <i @click="addItem(one)" class="fa fa-pencil-square-o"></i>
                            <i @click="delItem(one)" class="fa fa-trash"></i>
                        </div>
                        <p>{{one.name}}</p>
                        <p>
                            <a :href="one.url" target="_blank">{{one.url}}</a>
                        </p>
                    </div>
                    <div
                        style="cursor:pointer;min-width:auto;opacity:.6;"
                        @click="addItem({classId:item.classId})"
                    >
                        <i class="fa fa-plus"></i>
                    </div>
                </div>
            </div>
            <div style="margin-top:40px;">
                <div class="card-tip add">
                    <span @click="addClass(null)">
                        添加类目
                        <i class="fa fa-plus"></i>
                    </span>
                </div>
            </div>
        </div>
        <modal-add-class ref="modalAddClass"></modal-add-class>
        <modal-add-item ref="modalAddItem"></modal-add-item>
    </div>
</template>

<script>
import ModalAddClass from "./ModalAddClass";
import ModalAddItem from "./ModalAddItem";
import { delItem, delClass, getData } from "@/req/webCollection";
export default {
    data: () => ({
        list: [
            // {
            //     classId: "123",
            //     className: "默认",
            //     list: [
            //         {
            //             id: "12",
            //             name: "jiweiqing",
            //             url: "https://www.jiweiqing.com"
            //         }
            //     ]
            // }
        ]
    }),
    components: {
        ModalAddClass,
        ModalAddItem
    },
    beforeRouteEnter: (to, from, next) => {
        next(vm => {
            vm.getData();
        });
    },
    methods: {
        async getData() {
            const res = await getData();
            if (this.$fn.n(res.code) === 200) {
                this.list = res.data;
            } else {
                if (res.msg) {
                    this.$msg.error(res.msg);
                }
            }
        },
        async addClass(item) {
            await this.$refs.modalAddClass.show(item);
            this.getData();
        },
        async addItem(item) {
            await this.$refs.modalAddItem.show(item);
            this.getData();
        },
        async delClass(item) {
            await this.$confirm({
                title: "确定删除该类目吗"
            });
            const l = this.$msg.loading("处理中...");
            try {
                const res = await delClass({
                    id: item.classId
                });
                l.close();
                if (this.$fn.n(res.code) === 200) {
                    this.$msg.success("类目删除成功");
                    this.getData();
                } else {
                    if (res.msg) {
                        this.$msg.error(res.msg);
                    }
                }
            } catch (err) {
                l.close();
            }
        },
        async delItem(item) {
            await this.$confirm({
                title: "确定删除链接吗"
            });
            const l = this.$msg.loading("处理中...");
            try {
                const res = await delItem({
                    id: item.id
                });
                l.close();
                if (this.$fn.n(res.code) === 200) {
                    this.$msg.success("收藏删除成功");
                    this.getData();
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
div {
    text-align: left;
}
.t-box {
    font-size: 14px;
    padding-top: 20px;
    .card-tip {
        text-align: center;
        > span {
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
            background: rgba(228, 252, 228, 0.5);
            margin-bottom: 12px;
            border-radius: 3px;
            margin-left: 2px;
            margin-right: 2px;
            display: inline-block;
            padding: 4px 10px;
        }

        & + div {
            flex-wrap: wrap;
            > div {
                min-width: 4rem;
                max-width: 20rem;
                padding: 4px 10px;
                margin: 4px 10px 8px;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
                position: relative;
                p {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                a {
                    color: #333;
                    transition: all 0.2s;
                    &:hover {
                        color: rgb(134, 199, 37);
                    }
                }
                &:hover {
                    .btn {
                        opacity: 1;
                    }
                }
                .btn {
                    position: absolute;
                    right: 4px;
                    top: 4px;
                    opacity: 0;
                    transition: all 0.2s;
                    z-index: 1;
                    i {
                        margin-left: 4px;
                        font-size: 16px;
                        cursor: pointer;
                        color: rgb(134, 199, 37);
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 750px) {
    .t-box .card-tip + div > div {
        width: 80%;
    }
}
.card-tip {
    position: relative;
    span {
        position: relative;
        &:hover {
            .btn {
                opacity: 1;
            }
        }
    }
    .btn {
        opacity: 0;
        transition: all 0.2s;
        z-index: 1;
        position: absolute;
        left: 100%;
        padding-left: 10px;
        width: calc(100% + 80px);
        top: 0;
        i {
            cursor: pointer;
            color: rgb(134, 199, 37);
            margin-right: 10px;
        }
    }
}
.card-tip.add span {
    cursor: pointer;
    opacity: 0.4;
    transition: all 0.2s;
    &:hover {
        opacity: 1;
    }
}
.card-tip + div {
    margin-bottom: 20px;
}
</style>
