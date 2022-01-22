<template>
  <a-drawer width="640" placement="right" :closable="false" :visible="visible" @close="close" maskStyle="background-color:rgba(0,0,0,0.1)">
  </a-drawer>
</template>

<script>
export default {
  props:['visible'],
  setup() {
  }
}
</script>

<style>

</style>