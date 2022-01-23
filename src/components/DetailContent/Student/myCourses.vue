<template>
  <div class="courses-container">
    <div class="hello">
      <a>你好同学， 这是你选择的课程</a>
    </div>
    <a-divider />
    <a-list item-layout="vertical" :pagination="pagination" :data-source="listData"> 
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #actions>
            <a @click="showDetail()">详情</a>
            <a @click="quitCourse()">退课</a>
          </template>
          <CourseDetail placement="right" :closable="false" :visible="detailVisible" @close="onClose()" />
          <a-list-item-meta :description="item.description">
            <template #title>
              <a :href="item.href">{{ item.title }}</a>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script>
import { inject, ref } from 'vue';
import CourseDetail from './CourseDetail.vue'
const listData = [];

for (let i = 0; i < 23; i++) {
  listData.push({
    title: `test ${i}`,
    description: 'test',
  });
}

export default({
  components: {
    CourseDetail,
  },
  activated() {
    const s = inject('currSelected');
    s.value[0] = 'mycourses';
  },
  setup() {
    const pagination = {
      onChange: page => {
        console.log(page);
      },
      pageSize: 9,
    };
    /* 课程相关 */
    const detailVisible = ref(false);
    function quitCourse() {
      console.log("quit course");
    }
    function showDetail() {
      detailVisible.value = true;
      console.log(detailVisible.value)
    }
    function onClose() {
      detailVisible.value = false;
    }
    return {
      detailVisible,
      listData,
      pagination,
      quitCourse,
      showDetail,
      onClose
    };
  },

});
</script>

<style scoped>
.courses-container {
  flex: 1 1 80%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  height: 100%;
  width: 100%;
}

.ant-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hello {
  flex: 0 0 6%;
  padding-top: 5px;
  padding-left: 5px;
}

.ant-list-item, .ant-list-item-no-flex{
  display: flex;
  flex-direction: row;
  padding-top: 2px;
  padding-bottom: 2px;
}
.ant-divider {
  flex: 0 0 1px;
  margin-top: 6px;
  margin-bottom: 6px;
}
</style>