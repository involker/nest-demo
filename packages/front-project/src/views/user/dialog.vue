<template>
  <div>
    <a-form :model="form" ref="form">
      <a-form-item field="nickName" label="昵称：" required>
        <a-input v-model="form.nickName"></a-input>
      </a-form-item>
      <a-form-item field="account" label="账号：" required>
        <a-input v-model="form.account"></a-input>
      </a-form-item>
      <a-form-item field="password" label="密码：" required>
        <a-input v-model="form.password"></a-input>
      </a-form-item>
    </a-form>
    <div style="text-align: center">
      <a-button @click="$emit('close')">取消</a-button>
      <a-button type="primary" @click="submit" style="margin-left: 10px"
        >提交</a-button
      >
    </div>
  </div>
</template>
<script>
import * as UserApi from "@/api/user.js";

export default {
  data() {
    return {
      form: {
        account: "",
        password: "",
        nickName: "",
      },
    };
  },
  props: {
    injectData: {
      type: Object,
    },
  },
  mounted() {
    if (this.injectData.isEdit) {
      Object.keys(this.form).forEach((k) => {
        this.form[k] = this.injectData[k];
      });
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate(async (valid) => {
        let res = {};
        if (this.injectData.isEdit) {
          res = await UserApi.updateUser({
            ...this.form,
            id: this.injectData.id,
          });
        } else {
          res = await UserApi.addUser(this.form);
        }
        this.$message.success(res.rspDesc)
        this.$emit("close", true);
      });
    },
  },
};
</script>