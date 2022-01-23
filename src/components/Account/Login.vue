<template>
  <a-layout class="main-container">
    <div class="header">
      <div class="logo">19组</div>
    </div>
    <div class="login">
      <a-form
          :model="formState"
          name="normal_login"
          class="login-form"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" placeholder="账号">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input-password v-model:value="formState.password" placeholder="密码">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <div class="login-form-wrap">
          <a-form-item name="remember">
            <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
          </a-form-item>
          <a class="login-form-forgot"  @click="router.push({path:'/password'})">忘记密码</a>
        </div>

        <a-form-item>
          <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button" @click="login()">
            下一步
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </a-layout>
</template>
<script>
import { ref, reactive, computed/* , inject */ } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useRouter} from 'vue-router'
export default({
  components: {
    UserOutlined,
    LockOutlined,
  },

  setup() {
    const router = useRouter();
    const formState = reactive({
      username: '',
      password: '',
      remember: true,
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
      return !(formState.username && formState.password);
    });

    function login() {
      //let info = inject('info');
      /* 登陆成功更新全局uid */
/*       let url = "";
      axios.get(url).then((res)=> {
        
      }) */
      router.push({path:`/${type.value}`});
    }
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
      login,
      router,
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
  margin-top:5px;
}
.login-form-wrap {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}
.login-form-button {
    height: 40px;
    width: 100%;
    border-radius: 8.53px;
    cursor: pointer;
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