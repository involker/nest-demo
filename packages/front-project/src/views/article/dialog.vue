<template>
  <div>
    <a-form :model="form" ref="form">
      <a-form-item field="title" label="标题：" required>
        <a-input v-model="form.title"></a-input>
      </a-form-item>
      <a-form-item field="content" label="内容：" required>
        <a-input v-model="form.content" type="textarea"></a-input>
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

export default {
  data() {
    return {
      form: {
        title: "",
        content: "",
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
          res = await this.$api.addArticle(this.form);
        }
        this.$message.success(res.rspDesc);
        this.$emit("close", true);
      });
    },
  },
};
</script>