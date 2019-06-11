<template>
  <div>
    <transition appear appear-to-class="animated fadeInLeft">
      <b-list-group>
        <b-list-group-item v-for=" (item, index) in list " href="/ " :key="index " class="d-flex justify-content-between align-items-center ">
          <span v-text="item.name "></span>
          <b-badge variant="primary " pill v-text="item.num "></b-badge>
        </b-list-group-item>
      </b-list-group>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'slideBar',
    props: {
      list: Array
    }
  }
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style lang="postcss " scoped>
</style>