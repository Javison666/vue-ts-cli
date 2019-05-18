<template>
    <div class="home-layout">
        <Layout>
            <Header>
                <Menu mode="horizontal"
                    theme="light">
                    <div class="layout-logo">
                        <img src="@/assets//logo.png"
                            style="height:36px;position:relative;top:-2px;" />
                    </div>
                    <div class="layout-nav">
                        <!-- <li>
                            <Button @click.prevent.stop="$fn.toOpen('/login')"
                                type=text>菜单</Button>
                        </li> -->
                        <Submenu name="4"
                            class="nav-user">
                            <template slot="title">
                                <span>{{ $store.state.user.info.passportName }}</span>
                                <!-- <img src="/static/image/common/head_icon.png" /> -->
                            </template>
                            <!-- <MenuItem name="5-1">用户信息</MenuItem> -->
                            <MenuItem name="5-1"
                                @click.prevent.native="$fn.toRoute('/logout')">
                            <a href=#
                                class=theme-txt
                                @click.prevent>注销</a>
                            </MenuItem>
                        </Submenu>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger
                    :style="{background: '#2A3542'}"
                    class="home-sider">
                    <Menu theme="light"
                        :active-name="activeMenu"
                        @on-select="navigateTo"
                        accordion
                        ref=menu
                        width="auto">
                        <div v-for="(item,index) in $store.state.user.menu"
                            :key="index">
                            <MenuItem v-show="!item.list||item.list.length==0"
                                :name="item.path?item.path:''">
                            <router-link :to="item.path?item.path:''">
                                <!-- <Icon :type="item.icon"></Icon> -->
                                <Icon :custom="'i-icon i-icon-'+item.icon "></Icon>
                                <span>{{item.name}}</span>
                            </router-link>
                            </MenuItem>
                            <Submenu v-show="item.list&&item.list.length>0"
                                :name="item.path?item.path:''">
                                <template slot="title">
                                    <Icon :custom="'i-icon i-icon-'+item.icon " />
                                    <span>{{item.name}}</span>
                                </template>
                                <MenuItem v-for="(im,idx) in item.list"
                                    :key="idx"
                                    :name="im.path">
                                    <router-link :to="item.path?item.path:''">&nbsp;&nbsp;&nbsp;&nbsp;{{im.name}}</router-link></MenuItem>
                            </Submenu>
                        </div>
                    </Menu>
                </Sider>
                <Layout style="overflow-x:auto;padding: 0px;">
                    <router-view />
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
    components: {},
})
export default class Home extends Vue {
    public activeMenu = ''
    public mounted() {
        this.refreshSiderMenu()
        window.refreshSiderMenu = () => {
            this.refreshSiderMenu()
        }
    }
    public refreshSiderMenu() {
        this.$nextTick(() => {
            // iview的api手册中不能解决路由切换问题,通过currentActiveName可以解决
            (this.$refs.menu as any).currentActiveName = this.activeMenu = this.$route.path;
            (this.$refs.menu as any).updateActiveName();
            (this.$refs.menu as any).updateOpened();
            setTimeout(() => {
                const cls = '.home-sider .ivu-menu-item-active .ivu-menu-submenu-title'
                const subDom = document.querySelector(cls)
                const subList = document.querySelector(`${cls}+ul`)
                if (subDom && subList && (subList as any).style.display === 'none') {
                    subDom.click()
                }
            })
        })
    }
    public navigateTo(path) {
            this.toPage(path, this.$store.state.user.menu)
    }
    public toPage(path, list) {
            for (const item of list) {
                if (item.list && item.list.length > 0) {
                    this.toPage(path, item.list)
                } else {
                    if (item.path === path) {
                        if (item.type === 0) {
                            return this.$router.push({
                                path,
                            })
                        } else if (item.type === 1) {
                            return window.location.href = item.path
                            // return window.open(item.path)
                        }
                    }
                }
            }
        }
}
</script>
<style lang="scss" scoped>
@import "@/assets/style/global/_color.scss";
.home-layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    overflow-x: auto;
}
.layout-logo {
    height: 30px;
    float: left;
    color: #fff;
    position: relative;
    top: 15px;
    left: 20px;
    h2 {
        position: relative;
        border-radius: 10px;
        padding: 0 20px;
        top: -15px;
        color: $theme-color;
        // background: #d7dde4;
    }
    span {
        float: left;
        position: relative;
        top: -15px;
        margin-left: 30px;
    }
}
.layout-nav {
    margin: 0 auto;
    float: right;
    li {
        float: left;
    }
}
</style>
<style lang="scss">
@import "@/assets/style/global/_color.scss";
$sider-bg-color: #2a3542;

.home-layout {
    height: 100%;
    .ivu-layout-header {
        padding-left: 10px;
        padding-right: 10px;
        background: #fff;
        height: 60px;
        box-shadow: 0 0 8px #f5f5f5;
        z-index: 10;
        .ivu-menu-horizontal.ivu-menu-light:after {
            display: none;
        }
    }
    .ivu-layout {
        height: 100%;
        overflow: auto;
    }
    .ivu-layout-content {
        flex: none;
    }
    .ivu-menu-horizontal .ivu-menu-item {
        // float: left;
    }
    .ivu-menu-vertical .ivu-menu-item,
    .ivu-menu-vertical .ivu-menu-submenu-title {
        text-align: left;
        padding-left: 40px;
    }
}
.home-sider {
    width: 175px !important;
    min-width: 175px !important;
    max-width: 175px !important;
    flex: 0 0 175px !important;
    background: rgb(42, 53, 66);
    li {
        width: 92%;
        margin: auto;
        text-align: left;
        span {
            font-size: 14px;
            margin-left: 4px;
        }
        li.ivu-menu-item {
            padding-left: 23px !important;
        }
        &:hover a,
        a.router-link-active {
            color: $theme-color;
        }
    }
    a {
        color: #8b9199;
        span {
            font-size: 14px;
            margin-left: 6px;
        }
    }
    .ivu-menu {
        color: #8b9199;
    }
    .ivu-menu-light {
        background: $sider-bg-color;
        padding-top: 10px;
    }
    .ivu-menu-item-active.ivu-menu-submenu {
        background: rgba(53, 64, 77, 1);
        border-radius: 8px;
        color: #fff;
    }
    .ivu-menu-light.ivu-menu-vertical
        .ivu-menu-item-active:not(.ivu-menu-submenu) {
        background: rgba(53, 64, 77, 1);
        border-radius: 8px;
        color: $theme-color;
    }
    .ivu-menu-light.ivu-menu-vertical
        .ivu-menu-item-active:not(.ivu-menu-submenu):after {
        display: none;
    }
    .ivu-menu-vertical .ivu-menu-item,
    .ivu-menu-vertical .ivu-menu-submenu-title {
        padding-left: 20px;
    }
    .ivu-menu-vertical.ivu-menu-light:after {
        background: $sider-bg-color;
    }
}
.home-layout {
    // 悬浮样式
    .ivu-menu-vertical .ivu-menu-item:hover,
    .ivu-menu-vertical .ivu-menu-submenu-title:hover {
        color: $theme-color;
    }
}
.nav-user {
    img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
        margin-left: 10px;
    }
    img + i {
        display: none;
    }
}

</style>
