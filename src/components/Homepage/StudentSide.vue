<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        :selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px'}"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
      </a-menu>

    <a-avatar :size="48" style="margin-top: 8px" >
      <template #icon><UserOutlined /></template>
    </a-avatar>
    </a-layout-header>
    <a-layout-content style="padding: 20px 100px; flex: 0 1 60%;">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>学生</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            :selectedKeys="selectedKeys2"
            :openKeys="openKeys"
            mode="inline"
            style="height: 100%"
          >
            <a-sub-menu key="sub1">
              <template #title>
                <span>
                  <user-outlined />
                  subnav 1
                </span>
              </template>
              <a-menu-item key="1">option1</a-menu-item>
              <a-menu-item key="2">option2</a-menu-item>
              <a-menu-item key="3">option3</a-menu-item>
              <a-menu-item key="4">option4</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <template #title>
                <span>
                  <laptop-outlined />
                  subnav 2
                </span>
              </template>
              <a-menu-item key="5">option5</a-menu-item>
              <a-menu-item key="6">option6</a-menu-item>
              <a-menu-item key="7">option7</a-menu-item>
              <a-menu-item key="8">option8</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <template #title>
                <span>
                  <notification-outlined />
                </span>
              </template>
              <a-menu-item key="9">option9</a-menu-item>
              <a-menu-item key="10">option10</a-menu-item>
              <a-menu-item key="11">option11</a-menu-item>
              <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>

        <router-view/>
        <!-- 
          主要内容
         -->
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center; flex: 1 1 20%;">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
export default ({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    return {
      selectedKeys1: ref(['1']),
      selectedKeys2: ref(['1']),
      openKeys: (['sub1']),
    };
  },
});
</script>
<style>


.header {
  display: flex;
  justify-content: space-between;
}

.ant-menu {
  flex: 1 0 40%;
}
.logo {
  flex: 0 0 10%;
}

</style>
