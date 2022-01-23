<template>
  <div class="courses-container">
    <div class="search-courses">
      <a-select
      :value="selector"
      style="width: 120px"
      @change="handleChange"
      >
        <a-select-option value="courseId">课程编号</a-select-option>
        <a-select-option value="courseName">课程名称</a-select-option>
        <a-select-option value="courseTeacher">任课老师</a-select-option>
      </a-select>
      <a-input-search
        :value="searchText"
        placeholder="搜索内容"
        style="width: 200px"
      />
    </div>
    <a-divider />
    <a-list item-layout="vertical" :pagination="pagination" :data-source="courses"> 
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #actions>
            <a @click="showDetail()">详情</a>
            <a @click="chooseCourse()">选课</a>
          </template>
          <CourseDetail placement="right" :closable="false" :visible="detailVisible" @close="onClose()" />
          <a-list-item-meta :description="item.description">
            <template #title>
              <a :href="item.href">{{ item.title }}</a>
            </template>
              <a :href="item.href">{{ item.title }}</a>
          </a-list-item-meta>
          <div class="capacitynum">capacity</div>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script>
import { ref,inject } from 'vue';
import CourseDetail from './CourseDetail.vue';
export default ({
  components: {
    CourseDetail
  },
  activated() {
    const s = inject('currSelected');
    s.value[0] = 'courses';
  },
  setup() {
    /* 搜索相关 */
    const selector = ref("courseId");
    const searchText = ref("");


    /* 布局相关 */
    const pagination = {
      onChange: page => {
        console.log(page);
      },
      pageSize: 9,
    };

    /* 课程相关 */
    const courses = ref([]);
    const detailVisible = ref(false);
    for (let i = 0; i < 23; i++) {
      courses.value.push({
        title: `test${i}`,
        description: ' test.',
      });
    }
    function chooseCourse() {
      console.log("抢课");
    }
    function showDetail() {
      detailVisible.value = true;
    }
    function onClose() {
      detailVisible.value = false;
    }
    const handleChange = value => {
      selector.value = value;
    };
    return {
      courses,
      pagination,
      selector,
      searchText,
      chooseCourse,
      handleChange,
      showDetail,
      detailVisible,
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
.search-courses {
  flex: 0 0 6%;
  padding-top: 0px;
  padding-left: 0px;
}
.ant-list-item, .ant-list-item-no-flex{
  display: flex;
  flex-direction: row;
  padding-top: 2px;
  padding-bottom: 2px;
}
.ant-list-item-meta {
  flex: 0 1 80%;
}
.ant-list-item-action {
  padding-left: 20px;
  flex: 0 0 20%;
}
.ant-list-vertical .ant-list-item-action > li {
  padding: 0 8px;
}
.ant-divider {
  flex: 0 0 1px;
  margin-top: 6px;
  margin-bottom: 6px;
}

.capacitynum {
  flex: 0 1 10%;
  padding: 15px 25px;
}
</style>