<template>
  <div class="courses-container">
    <div class="hello">
      你好同学， 这是你选择的课程
      <a-divider />
    </div>
    <a-list item-layout="vertical" :pagination="pagination" :data-source="listData"> 
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #actions>
            <a>详情</a>
            <a @click="quitCourse()">退课</a>
          </template>
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
import { inject } from 'vue';
const listData = [];

for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Teamasdjsadsahdhsahsajh.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

export default({
  components: {

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
      pageSize: 6,
    };
    function quitCourse() {
      console.log("quit course");
    }
    return {
      listData,
      pagination,
      quitCourse,
    };
  },

});
</script>

<style>
.courses-container {
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
.hello{
  flex: 0 0 0%;
  padding-top: 0px;
  padding-left: 0px;
}
.ant-list-item, .ant-list-item-no-flex{
  padding-top: 2px;
  padding-bottom: 2px;
}
.ant-divider {
  margin: 8px 0;
}
.ant-list-item-meta-description {
  color: #86909c;
  font-size: 13px;
  line-height: 22px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>