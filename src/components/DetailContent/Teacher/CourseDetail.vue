<template>
  <a-drawer width="640" placement="right" :closable="false" :visible="visible" @close="close" :maskStyle="drawerStyle">
  </a-drawer>
</template>

<script>
export default {
  props:['visible','close'],
  setup() {
    const drawerStyle = {
      'background-color' : 'rgba(0, 0, 0, 0.05)',
    }
    return {
      drawerStyle,
    }
  }
}
</script>

<style>

</style>