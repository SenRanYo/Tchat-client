<template>
  <div class="password">
    <p class="password-title">未知,总能蹦发出无限可能</p>
    <el-form
      class="password-form"
      ref="changePasswordForm"
      status-icon
      :model="changePasswordForm"
      :rules="changePasswordValidator"
    >
      <!-- 用户名 -->
      <el-form-item prop="name">
        <el-input
          v-model="changePasswordForm.name"
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <!-- 新密码 -->
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="请输入新密码"
          prefix-icon="el-icon-lock"
          v-model.number="changePasswordForm.password"
        ></el-input>
      </el-form-item>
      <!-- 再次输入新密码 -->
      <el-form-item prop="repeatPassword">
        <el-input
          type="password"
          placeholder="请再次输入新密码"
          prefix-icon="el-icon-lock"
          v-model.number="changePasswordForm.repeatPassword"
        ></el-input>
      </el-form-item>
      <!-- 密保信息 -->
      <el-form-item prop="protection">
        <el-input
          placeholder="请输入当前用户密保信息"
          prefix-icon="el-icon-key"
          v-model.number="changePasswordForm.protection"
        ></el-input>
      </el-form-item>
      <!-- 修改按钮 -->
      <el-form-item>
        <el-button
          class="changepassword-btn"
          type="success"
          @click="changePsd('changePasswordForm')"
          >立即修改</el-button
        >
      </el-form-item>
      <!-- 登陆注册页面跳转 -->
      <el-form-item>
        <div class="other-container">
          <router-link :to="{ path: '/login' }">用户登录</router-link>
          <router-link :to="{ path: '/register' }">注册账号</router-link>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "password",
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
      if (value !== this.changePasswordForm.password) {
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
      changePasswordForm: {
        name: "",
        password: "",
        repeatPassword: "",
        protection: ""
      },
      changePasswordValidator: {
        name: [{ validator: checkName, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
        repeatPassword: [{ validator: checkRepeatPassword, trigger: "blur" }],
        protection: [{ validator: checkProtection, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 映射actions
    ...mapActions(["changePassword"]),
    // 修改密码
    changePsd(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let changePasswordInfo = {
            name: this.changePasswordForm.name,
            password: this.changePasswordForm.password,
            protection: this.changePasswordForm.protection
          };
          this.changePassword(changePasswordInfo);
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
.password {
  height: 450px;
  width: 480px;
  border-radius: 8px;
  background-color: #4a5058;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .password-title {
    font-size: 16px;
    color: #fff;
    margin-bottom: 20px;
  }
  .password-form {
    width: 260px;
    .changepassword-btn {
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
