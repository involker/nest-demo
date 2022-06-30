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
      <a-form-item field="avatr" label="头像：" required>
        <a-upload :custom-request="customRequest" :show-file-list="false">
          <template #upload-button>
            <img
              :src="form.avatr"
              v-if="form.avatr"
              style="width: 100px; height: 100px"
            />
            <a-button v-else>上传</a-button>
          </template>
        </a-upload>
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
        avatr: "",
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
    async customRequest(option) {
      const { fileItem } = option;
      const formData = new FormData();
      formData.append("file", fileItem.file);
      const res = await UserApi.uploadImage(formData);
      this.form.avatr = res.data.url;
      this.$refs.form.validateField('avatr')
    },
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
        this.$message.success(res.rspDesc);
        this.$emit("close", true);
      });
    },
  },
};
</script>