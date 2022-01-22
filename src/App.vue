<template>
  <router-view/>
</template>

<script>
import {reactive, provide} from 'vue'
export default {
  component: {
  },
  setup() {
    const info = reactive({
      uid:'',
      username:'',
      usertype:'',
      session:'',
      login: false,
    })
    provide('info',info);
  }
}
</script>

<style>

</style>