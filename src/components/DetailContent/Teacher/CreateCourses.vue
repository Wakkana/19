<template>
  <div class="courses-container">
    <div class="hello">


    </div>
    <a-divider />
    <a-form layout="vertical" :model="formState" class="form">
      <a-form-item label="课程名称">
        <a-input class="name-field" v-model:value="formState.courseName" />
      </a-form-item>
      <a-form-item label="课程容量">
        <a-input-number  v-model:value="formState.capacity" placeholder="(1~200)" />
      </a-form-item>
      <a-form-item label="任课老师">
        <a-input class="teacher-field" v-model:value="formState.teacher" :disabled="true" />
      </a-form-item>
      <a-form-item >
        <a-button type="primary">创建</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import {  defineComponent, reactive, inject } from 'vue';
export default defineComponent({
  activated() {
    const s = inject('currSelected');
    s.value[0] = 'createcourses';
  },
  setup() {
    const formState = reactive({
      courseName: '',
      capacity: '',
      teacher:'等待获取',
    });

    return {
      formState,
    };
  },

});
</script>

<style scoped>
.hello{
  flex: 0 0 6%;
  padding-top: 5px;
  padding-left: 5px;
}
.courses-container {
  flex: 1 1 80%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  height: 100%;
  width: 100%;
}
.ant-divider {
  flex: 0 0 1px;
  margin-top: 6px;
  margin-bottom: 6px;
}
.form {
  padding: 10px 20px;
}
.name-field {
  width: 270px;
}
.teacher-field {
  width: 90px;
}
</style>