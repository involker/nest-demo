<template>
  <div>
    <a-form :model="form" :style="{ width: '600px' }">
      <a-form-item field="username" label="账户：">
        <a-input v-model="form.username" />
      </a-form-item>
      <a-form-item field="password" label="密码：">
        <a-input v-model="form.password" />
      </a-form-item>
      <a-form-item>
        <a-button @click="login">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "3242@qq.com",
        password: "123123"
      }
    }
  },
  methods: {
    async login() {
      const res = await this.$api.login({
        ...this.form
      });
      if(res.rspCode){
        window.localStorage.setItem('token',res.data.access_token);
        this.$router.push("/")
      }
    }
  }
}
</script>