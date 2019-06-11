<template>
    <div style="padding-top:20px;" class="works-box">
        <title-item>
            <i class="fa fa-file-code-o"></i> 开发维护项目
        </title-item>
        <div style="padding-top: 1rem;">
            <p>
                <span @click="$fn.toOpen($PAGE_API.skillDocs.jjCoreFn.path)">jj-core-fn</span>
                <span v-show="jjCoreFnNo>0">下载量:{{ jjCoreFnNo }}次</span>
            </p>
            <p>
                <span @click="$fn.toOpen($PAGE_API.skillDocs.jjBrowserFn.path)">jj-browser-fn</span>
                <span v-show="jjBrowswerFnNo>0">下载量:{{ jjBrowswerFnNo }}次</span>
            </p>
            <p>
                <span @click="$fn.toOpen($PAGE_API.skillDocs.jjLearning.path)">jj-learning</span>
            </p>
            <p>
                <span @click="$fn.toOpen('https://github.com/Javison666/nginxConfig')">nginx可视化</span>
            </p>
            <p>
                <span @click="$fn.toOpen('https://github.com/Javison666/mac-ntfs')">mac开启ntfs</span>
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleItem from "./TitleItem.vue";
import {
    getNpmStat
} from '@/req/public'
@Component({
    components: {
        TitleItem
    }
})
export default class Index extends Vue {
    public jjBrowswerFnNo: number = 0 ;
    public jjCoreFnNo: number = 0 ;
    public mounted() {
        this.getDownloads()
    }
    public sumFn(data) {
        let sum: number = 0;
        for (const i in data) {
            sum += Number(data[i])
        }
        return sum;
    }
    public getDownloads() {
        const today = this.$fn.showDate('Y-M-D');
        getNpmStat({
            package: "jj-core-fn",
            from: "2019-05-01",
            until: today
        }).then(res => {
            this.jjCoreFnNo = this.sumFn(res.data);
        })
        getNpmStat({
            package: "jj-browser-fn",
            from: "2019-05-07",
            until: today
        }).then(res => {
            this.jjBrowswerFnNo = this.sumFn(res.data);
        })
    }
}
</script>
<style lang="scss" scoped>
.works-box {
    max-width: 600px;
    margin: auto;
}
p {
    padding: 8px;
    padding-bottom: 1.2rem;
    font-size: 14px;
    letter-spacing: 2px;
    text-align: left;
    padding-left: 16%;
    span:first-child{
        cursor: pointer;
        &:hover{
            color:rgba(60, 161, 1, 1);
        }
    }
    span + span {
        margin-left: 1.5rem;
        font-size:12px;
        color:rgba(60, 161, 1, .8);
    }
}
</style>
