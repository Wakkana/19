<template>
  <a-layout class="main-container">
    <div class="header">
      <div class="logo">19组</div>
      <a-menu
        theme="dark"
        class="menu"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">首页</a-menu-item>
      </a-menu>
      <a-dropdown class="info" placement="bottomCenter">
        <a-avatar :size="48" style="margin-top: 8px" >
          <template #icon><UserOutlined /></template>
        </a-avatar>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <a @click="router.push({path:`/userinfo/${info.uid}`})">
                个人中心
              </a>
            </a-menu-item>
            <a-menu-item key="1">
              <a @click="logout()">
                注销
              </a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
      
    <a-layout-content style="padding: 20px 12%" class="content">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>个人中心</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="background: #fff; height: 70vh">
        <!-- 主要内容区域 -->
        <a-switch :checked="modifying" />
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center;">
      Design By Team19 ©2021 
    </a-layout-footer>
  </a-layout>
</template>
<script scoped>
import { UserOutlined } from '@ant-design/icons-vue';
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router'
export default ({
  components: {
    UserOutlined,
  },
  setup() {
    const modifying = ref(false);
    const router = useRouter();
    const info = inject('info')

    function logout() {
      info.login = false;
      router.push({path:"/login"})
    }

    return {
      info,
      router,
      logout,
      modifying
    };
  },
});
</script>
<style scoped>

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: #3480fd;
  background-image: -webkit-radial-gradient(50% -200px,circle,#b0e0ff 0,#18a7fd 45%,#3480fd 100%);
  background-image: radial-gradient(circle at 50% -200px,#b0e0ff 0,#18a7fd 45%,#3480fd 100%);
}
.menu, .ant-menu.ant-menu-dark {
  background-color: rgba(0, 0, 0, 0);
}
.ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.ant-menu {
  flex: 1 0 40%;
}
.logo {
  flex: 0 0 10%;
  color: white;
}
.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.ant-layout-footer {
  flex: 0 1 10%;
}
.info {
  margin-right:80px;
}

  
</style>
