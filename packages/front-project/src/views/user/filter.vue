<template>
  <a-form :model="filter" layout="inline">
    <a-form-item field="account" label="账号：">
      <a-input v-model="filter.account" />
    </a-form-item>
    <a-form-item>
      <a-button @click="onSearch" type="primary">查询</a-button>
      <a-button @click="onReset" style="margin-left: 10px">重置</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  data() {
    return {
      filter: {
        account: "",
      },
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.filter);
    },
    onReset() {
      this.filter = {
        account: "",
      };
      this.$emit("reset", {});
    },
  },
};
</script>