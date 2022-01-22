<template>
  <a-layout class="main-container">
    <div class="header">
      <div class="logo">19组</div>
    </div>
    <div class="login">
      <h5 style="color: red; margin-bottom:20px;" v-if="formState.next">验证码已经发送到您的手机号（未实现 输入6666即可）</h5>
      <a-form
          :model="formState"
          name="normal_login"
          class="login-form"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: '请输入账户名!' }]"
        >
          <a-input v-model:value="formState.username" placeholder="账号">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          v-if="formState.next"
          name="varifycode"
          :rules="[{ required: true, message: '请输入验证码' }]"
        >
          <a-input v-model:value="formState.varifycode" placeholder="验证码">
            <template #prefix>
              <MessageOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          v-if="formState.varified"
          name="password"
          :rules="[{ required: true, message: '请输入新密码' }]"
        >
          <a-input v-model:value="formState.password" placeholder="新密码">
            <template #prefix>
              <MessageOutlined class="site-form-item-icon"/>
            </template>
          </a-input>
        </a-form-item>


        <div class="login-form-wrap">
          <a class="login-form-forgot" @click="router.push({path:'/login'})">记得密码？ 前往登陆</a>
        </div>

        <a-form-item>
          <a-button v-if="!formState.next && !formState.varified" :disabled="disabled" type="primary" html-type="submit" class="login-form-button" @click="formState.next=true">
            下一步
          </a-button>
          <a-button v-else-if="formState.next && !formState.varifed" :disabled="disabled" type="primary" html-type="submit" class="login-form-button" @click="checkCode()">
            确认
          </a-button>
          <a-button v-else :disabled="disabled" type="primary" html-type="submit" class="login-form-button" @click="login()">
            进入首页
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </a-layout>
</template>
<script>
import { ref, reactive, computed } from 'vue';
import { UserOutlined, MessageOutlined } from '@ant-design/icons-vue';
import { useRouter} from 'vue-router'
export default({
  components: {
    UserOutlined,
    MessageOutlined
  },

  setup() {
    const router = useRouter();
    const formState = reactive({
      username: '',
      password:'',
      varifycode: '',
      next: false,
      varified: false,
    });

    let type = ref("student");

    /* 
      student -> 学生
      teacher -> 老师
      manager -> 管理
     */

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const disabled = computed(() => {
      return !formState.username;
    });

    function login() {
/*       let url = "";
      axios.get(url).then((res)=> {
        
      }) */
      router.push({path:`/${type.value}`});
    }
    function checkCode() {
      if (formState.varifycode == '6666') {
        formState.next = false;
        formState.varified = true;
      }
    }
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
      login,
      router,
      checkCode
    }
  },
});
</script>

<style scoped>
/* For demo */
.logo {
  font-size: 100%;
}
.main-container {
  background-color: #fff;
}

.header {
  height: 92px;
  width: 100%;
  padding: 28px 0;
  position: relative;
  overflow: hidden;
  background-color: #3480fd;
  background-image: -webkit-radial-gradient(50% -200px,circle,#b0e0ff 0,#18a7fd 45%,#3480fd 100%);
  background-image: radial-gradient(circle at 50% -200px,#b0e0ff 0,#18a7fd 45%,#3480fd 100%);
}
.login {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 496px;
  padding: 50px 20px;
  margin: 50px auto;
  background: #fff;
  box-shadow: 0 6px 32px -7px rgba(29,102,189,.16);
  border-radius: 12px;
}

.login-form {
  width:300px;
}
.login-form-forgot {
  margin-bottom: 12px;
}
.login-form-wrap {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.login-form-button {
  height: 40px;
  width: 100%;
  border-radius: 8.53px;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#components-form-demo-normal-login .login-form-forgot {
  margin-bottom: 24px;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>