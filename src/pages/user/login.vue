<!--
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-26 10:22:45
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-27 14:52:36
-->
<template>
  <div class="user-layout-login">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          size="large"
          type="text"
          placeholder="请输入帐户名"
          v-decorator="[
                'username',
                {
                  initialValue:'',
                  rules: [{ required: true, message: '请输入帐户名' }]
                }
              ]"
        >
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input-password
          size="large"
          placeholder="请输入密码"
          v-decorator="[
                'password',
                {rules: [{ required: true, message: '请输入密码' }]}
              ]"
        >
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }" />
        </a-input-password>
      </a-form-item>
      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="loginBtn"
          :disabled="loginBtn"
        >确定</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import MD5 from "js-md5";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: this.$form.createForm(this),
      loginBtn: false
    };
  },
  methods: {
    ...mapActions(["setUserInfoSync"]),
    handleSubmit(e) {
      e.preventDefault();
      const {
        form: { validateFields }
      } = this;

      validateFields(
        ["username", "password"],
        { force: true },
        async (err, values) => {
          if (!err) {
            this.loginBtn = true;
            const data = {
              content: { platform: "mweb" }
            };
            const res = await this.$post("/mall29/index.html", data);
            this.loginBtn = false;
            if (res.errcode == 0) {
              this.setUserInfoSync({ name: "syq" });
              sessionStorage.setItem(
                "user",
                escape(JSON.stringify({ name: "syq" }))
              );
              this.$router.replace("/");
            }
          }
        }
      );
    }
  }
};
</script>
<style lang="less" scoped>
.user-layout-login {
  min-width: 260px;
  width: 368px;
  margin: 0 auto;
  .login-button {
    width: 100%;
  }
}
</style>