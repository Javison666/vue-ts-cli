<template>
    <div style="min-height:56px;">
        <transition appear appear-to-class="animated fadeInDown">
            <div style="background:#000;">
                <div style="max-width:1200px;margin:0 auto;">
                    <b-navbar toggleable="md" type="dark" variant="transparent">
                        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                        <b-navbar-brand href="#/ability" style="color:#fff;">吉伟庆的技术栈</b-navbar-brand>
                        <b-collapse is-nav id="nav_collapse">
                            <!-- Right aligned nav items -->
                            <b-navbar-nav class="ml-auto">
                                <b-nav-form>
                                    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                                    <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="success">Search</b-button>
                                </b-nav-form>
                            </b-navbar-nav>
                        </b-collapse>
                    </b-navbar>
                </div>
            </div>
        </transition>
    </div>

</template>

<script>
    export default {

    }
</script>

<style lang="postcss">
    .navbar-dark .navbar-nav .nav-link {
        color: #fff;
    }
</style>