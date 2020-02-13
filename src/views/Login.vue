<template>
  <div class="login">
    <p class="login-title">未知,总能蹦发出无限可能</p>
    <el-form
      class="login-form"
      :model="loginForm"
      status-icon
      :rules="loginValidator"
      ref="loginForm"
    >
      <!-- 用户名 -->
      <el-form-item prop="name">
        <el-input
          v-model="loginForm.name"
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input
          type="password"
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
          v-model.number="loginForm.password"
        ></el-input>
      </el-form-item>
      <!-- 登陆按钮 -->
      <el-form-item>
        <el-button
          class="login-btn"
          type="success"
          size="small"
          @click="loginHandle('loginForm')"
          >立即登陆</el-button
        >
      </el-form-item>
      <!-- 注册改密页面跳转 -->
      <el-form-item>
        <div class="other-container">
          <router-link :to="{ path: '/register' }">注册账号</router-link>
          <router-link :to="{ path: '/password' }">修改密码</router-link>
        </div>
        <div class="other-login-container">
          <el-divider content-position="center">其他登陆</el-divider>
          <eva-icon
            class="github-btn"
            name="github"
            animation="shake"
            fill="limegreen"
          ></eva-icon>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    const checkName = (rule, value, callback) => {
      if (!value) return callback(new Error("用户名不能为空"));
      if (/^[0-9a-zA-Z\u4e00-\u9fa5_]{6,12}$/.test(value)) {
        callback();
      } else {
        callback(new Error("用户名格式验证未通过"));
      }
    };
    const checkPassword = (rule, value, callback) => {
      if (!value) return callback(new Error("密码不能为空"));
      if (/^[a-zA-Z0-9\w._!@#$%^&*`~()-+=]{6,12}$/.test(value)) {
        callback();
      } else {
        callback(new Error("密码格式验证未通过"));
      }
    };
    return {
      loginForm: { name: "", password: "" },
      loginValidator: {
        name: [{ validator: checkName, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginHandle(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let loginInfo = {
            name: this.loginForm.name,
            password: this.loginForm.password
          };
          this.login(loginInfo);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.login {
  height: 450px;
  width: 480px;
  border-radius: 8px;
  background-color: #4a5058;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-title {
    font-size: 16px;
    color: #fff;
    margin-bottom: 20px;
  }
  .login-form {
    width: 260px;
    .login-btn {
      width: 100%;
    }
  }
  .other-container {
    height: 30px;
    display: flex;
    justify-content: space-around;
    a {
      color: #fff;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .other-login-container {
    text-align: center;
    .el-divider__text {
      background-color: #4a5058;
      color: #fff;
    }
    .github-btn {
      cursor: pointer;
    }
  }
}
</style>
