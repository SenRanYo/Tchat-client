<template>
  <div class="register">
    <p class="register-title">未知,总能蹦发出无限可能</p>
    <el-form
      class="register-form"
      ref="registerForm"
      status-icon
      :model="registerForm"
      :rules="registerValidator"
    >
      <!-- 用户名 -->
      <el-form-item prop="name">
        <el-input
          v-model="registerForm.name"
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model.number="registerForm.password"
        ></el-input>
      </el-form-item>
      <!-- 再次输入密码 -->
      <el-form-item prop="repeatPassword">
        <el-input
          type="password"
          placeholder="请再次输入密码"
          prefix-icon="el-icon-lock"
          v-model.number="registerForm.repeatPassword"
        ></el-input>
      </el-form-item>
      <!-- 密保信息 -->
      <el-form-item prop="protection">
        <el-input
          placeholder="请输入密保信息"
          prefix-icon="el-icon-key"
          v-model.number="registerForm.protection"
        ></el-input>
      </el-form-item>
      <!-- 注册按钮 -->
      <el-form-item>
        <el-button
          class="register-btn"
          type="success"
          @click="registerHandle('registerForm')"
          >立即注册</el-button
        >
      </el-form-item>
      <!-- 登陆改密页面跳转 -->
      <el-form-item>
        <div class="other-container">
          <router-link :to="{ path: '/login' }">用户登录</router-link>
          <router-link :to="{ path: '/password' }">修改密码</router-link>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "register",
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
    const checkRepeatPassword = (rule, value, callback) => {
      if (!value) return callback(new Error("重复输入密码不能为空"));
      if (value !== this.registerForm.password) {
        callback(new Error("重复密码和密码不相同"));
      } else {
        callback();
      }
    };
    const checkProtection = (rule, value, callback) => {
      if (!value) return callback(new Error("密保信息不能为空"));
      if (/^$|^\w{6,12}$/.test(value)) {
        callback();
      } else {
        callback(new Error("密保信息格式不正确"));
      }
    };
    return {
      registerForm: {
        name: "",
        password: "",
        repeatPassword: "",
        protection: ""
      },
      registerValidator: {
        name: [{ validator: checkName, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
        repeatPassword: [{ validator: checkRepeatPassword, trigger: "blur" }],
        protection: [{ validator: checkProtection, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 映射actions
    ...mapActions(["register"]),
    // 用户注册
    registerHandle(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let registerInfo = {
            name: this.registerForm.name,
            password: this.registerForm.password,
            protection: this.registerForm.protection
          };
          this.register(registerInfo);
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
.register {
  height: 450px;
  width: 480px;
  border-radius: 8px;
  background-color: #4a5058;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .register-title {
    font-size: 16px;
    color: #fff;
    margin-bottom: 20px;
  }
  .register-form {
    width: 260px;
    .register-btn {
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
}
</style>
