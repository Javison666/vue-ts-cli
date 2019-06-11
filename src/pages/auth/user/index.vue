<template>
    <div class="user-main">
        <ul class="user-list">
            <li>
                <span>姓名</span>
                <span>身份证</span>
                <span>病例号</span>
                <span>操作</span>
            </li>
            <li v-for="item in data">
                <span>{{item.compatName}}</span>
                <span>{{item.compatIdcard}}</span>
                <span>{{item.compatMedicalRecord}}</span>
                <span>
                    <button @click="getCheckInspect(item)">检查</button>
                    <button @click="getTestInspect(item)">检验</button>
                </span>
            </li>
        </ul>
        <div class="list-modal" v-show="isOpen" :style="{height:windowHeight+'px'}">
            <h4 class="w12">
                {{checkType==='check'?'检查':'检验'}}报告({{showDate(Time[0])}}-{{showDate(Time[1])}})
                <i
                    class="fa fa-power-off"
                    @click="isOpen=false;"
                ></i>
            </h4>
            <div class="list-main w12" style="height: 600px;overflow: hidden;overflow-y: auto;">
                <template v-if="checkType==='check'" v-for="item in checkData">
                    <div class="list-check">
                        <h5>{{item.checkName}}------{{item.sendTime}}</h5>
                        <div>
                            <h6>检查结果</h6>
                            <div>{{item.checkResult}}</div>
                            <h6>检查描述</h6>
                            <div>{{item.checkDetail}}</div>
                        </div>
                    </div>
                </template>
                <template v-if="checkType==='test'" v-for="item in TestData">
                    <div class="list-check">
                        <h5
                            @click="getTestInfo(item)"
                            style="cursor: pointer;"
                        >{{item.diagnosis}}------{{item.inspectType}}------{{item.inspectDate}}</h5>
                        <div class="list-test" v-if="item.data&&item.data.length>0">
                            <div class="check-sort">
                                <span v-for="items in testColumns">{{items.title}}</span>
                            </div>
                            <div v-if="item.data&&item.data.length>0">
                                <ul>
                                    <li v-for="(consultItem,index) in item.data">
                                        <span>{{index}}</span>
                                        <span>{{consultItem.expName}}</span>
                                        <span>
                                            {{consultItem.expResultNum}}
                                            <span
                                                style="color: red;font-weight: 600;"
                                            >{{consultItem.expResult}}</span>
                                        </span>
                                        <span>{{consultItem.consult}}</span>
                                        <span>{{consultItem.expUnit}}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { getUser, getCheck, getTest, getTestList } from "@/req/crc";
import { mapState } from "vuex";

export default {
    name: "user",
    mounted() {
        if (this.$fn.getCookie("token").length > 0) {
            this.toGetUser();
        } else {
            this.$router.push("/home/crc");
        }
    },
    data() {
        return {
            data: [],
            checkData: [],
            TestData: [],
            TestListData: [],
            Time: [],
            checkType: "",
            isOpen: false,
            testColumns: [
                { title: "序号" },
                {
                    title: "项目",
                    key: "expName"
                },
                {
                    title: "结果",
                    // key: "expResultNum"
                    slot: "expResult"
                },
                {
                    title: "参考值",
                    key: "consult"
                },
                {
                    title: "单位",
                    key: "expUnit"
                }
            ]
        };
    },
    methods: {
        async toGetUser() {
            const res = await getUser({
                token: Cookie.get("token"),
                patId: Cookie.get("patId")
            });
            if (res.code === "0") {
                this.data = res.list;
            }
        },
        async getCheckInspect(row) {
            this.checkType = "check";
            this.currentRow = row;
            this.isOpen = true;
            this.Time = [
                new Date().getTime() - 365 * 24 * 3600 * 1000,
                new Date().getTime()
            ];
            const res = await getCheck({
                token: Cookie.get("token"),
                patName: row.compatName,
                patCard: row.patCard,
                compatId: row.compatId,
                startDate: this.$fn.showDate("Y-M-D", this.Time[0]),
                endDate: this.$fn.showDate("Y-M-D", this.Time[1])
            });
            if (res.code === "0") {
                this.checkData = res.list;
            } else {
                this.checkData = [];
            }
        },
        async getTestInspect(row) {
            this.checkType = "test";
            this.currentRow = row;
            this.isOpen = true;
            this.Time = [
                new Date().getTime() - 365 * 24 * 3600 * 1000,
                new Date().getTime()
            ];
            const res = await getTest({
                token: Cookie.get("token"),
                patName: row.compatName,
                patCard: row.patCard,
                compatId: row.compatId,
                startDate: showDate("Y-M-D", this.Time[0]),
                endDate: showDate("Y-M-D", this.Time[1])
            });
            if (res.code === "0") {
                this.TestData = res.list;
            } else {
                this.TestData = [];
            }
        },
        async getTestInfo(row) {
            const res = await getTestList({
                token: Cookie.get("token"),
                recordId: row.recordId
            });
            if (res.code === "0") {
                if (!row.data) {
                    this.$set(row, "data", res.list);
                }
            }
        },
        showDate(time) {
            return showDate("Y-M-D", time);
        }
    },
    computed: {
        ...mapState({
            windowWidth: state => state.global.windowWidth,
            windowHeight: state => state.global.windowHeight
        })
    }
};
</script>

<style scoped lang="scss">
.user-list {
    list-style: none;
    width: 60%;
    margin: 20px auto;
    li {
        &:hover {
            background: #eeeeee;
        }
        span {
            display: inline-block;
            width: 25%;
            button {
                display: inline-block;
                width: 60px;
                height: 30px;
                border-radius: 8px;
                margin: 10px;
                &:hover {
                    cursor: pointer;
                    background: #6190e8;
                    color: white;
                }
            }
        }
    }
    li:first-child {
        background: #6ed48d;
        color: white;
    }
}

.list-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
    background-image: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#fafafa),
        to(rgba(139, 255, 72, 1))
    );
    background-image: linear-gradient(to right, #fafafa, rgba(139, 255, 72, 1));
    h4 {
        text-align: left;
        color: #000000;
        padding: 10px;
        i {
            float: right;
            cursor: pointer;
        }
    }
    .list-check {
        margin-top: 20px;
        text-align: left;
        h5 {
            background: #eeeeee;
            padding: 5px;
        }
        h6 {
            background: #000000;
            color: white;
            padding: 5px;
        }
    }
    .list-test {
        li {
            border-bottom: 1px dotted #308edd;
            padding: 10px 0;
        }
        span {
            display: inline-block;
            width: 20%;
        }
    }
}
</style>